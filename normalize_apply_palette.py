#!/usr/bin/env python3
"""Normalize project color literals to new tokens.
- Skips .svg files
- Attempts to avoid replacing inside <svg>...</svg> blocks in TSX/HTML files
"""
import re
import sys
from pathlib import Path

root = Path(".").resolve()
extensions = ['.tsx', '.ts', '.jsx', '.js', '.css']
# map hex (uppercase/lowercase) -> token
mapping = {
    '#C8A96A': 'var(--brand-accent)',
    '#c8a96a': 'var(--brand-accent)',
    '#E3A93C': 'var(--brand-accent)',
    '#e3a93c': 'var(--brand-accent)',
    '#D4AF67': 'var(--brand-accent)',
    '#d4af67': 'var(--brand-accent)',
    '#B68A37': 'var(--brand-accent-dark)',
    '#b68a37': 'var(--brand-accent-dark)',
    '#C8912F': 'var(--brand-accent-dark)',
    '#c8912f': 'var(--brand-accent-dark)',
    '#F7F7F7': 'var(--brand-text-light)',
    '#f7f7f7': 'var(--brand-text-light)',
    '#F2F2F2': 'var(--brand-text-light)',
    '#f2f2f2': 'var(--brand-text-light)',
    '#FFF9F2': 'var(--brand-surface)',
    '#fff9f2': 'var(--brand-surface)'
}

summary = {'files': [], 'replacements': 0}

svg_tag_re = re.compile(r'<svg[\s\S]*?<\/svg>', re.IGNORECASE)

for p in root.rglob('*'):
    if p.is_file() and p.suffix in extensions and 'node_modules' not in str(p) and '.git' not in str(p):
        if p.suffix == '.css' and p.name.endswith('tokens.css'):
            # tokens file should be updated manually (we already updated). Skip.
            continue
        if p.suffix == '.svg' or p.suffix == '.png' or p.suffix == '.jpg':
            continue
        text = p.read_text(encoding='utf-8')
        original = text
        masked = text
        svg_matches = list(svg_tag_re.finditer(text))
        masks = []
        for m in svg_matches:
            start, end = m.span()
            masks.append((start, end, text[start:end]))
            masked = masked[:start] + (' ' * (end-start)) + masked[end:]
        # perform replacements on masked content, but apply to original while preserving svg regions
        replaced_any = False
        new_masked = masked
        for old, new in mapping.items():
            if old in new_masked:
                new_masked = new_masked.replace(old, new)
                replaced_any = True
            # case-insensitive already added lower/upper entries
        if not replaced_any:
            continue
        # now apply replacements to original, skipping svg regions
        result_chars = list(original)
        for old, new in mapping.items():
            # find occurrences outside svg ranges
            idx = 0
            while True:
                i = original.find(old, idx)
                if i == -1:
                    break
                j = i + len(old)
                inside = False
                for (s,e,_) in masks:
                    if i >= s and i < e:
                        inside = True
                        break
                if not inside:
                    # replace in result_chars
                    result_chars[i:j] = list(new)
                idx = j
        result = ''.join(result_chars)
        if result != original:
            p.write_text(result, encoding='utf-8')
            summary['files'].append(str(p))
            # naive count: count number of mapped tokens occurrences in result
            # compute difference occurrences
            cnt = sum(original.count(k) for k in mapping.keys()) - sum(result.count(k) for k in mapping.keys())
            summary['replacements'] += max(0,cnt)

print('Normalization complete')
print('Files modified:', len(summary['files']))
for f in summary['files']:
    print(' -', f)
print('Estimated replacements:', summary['replacements'])
