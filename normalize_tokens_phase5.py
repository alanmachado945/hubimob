#!/usr/bin/env python3
"""Phase 5: Complete Color and Typography Centralization"""

import os
import re
import sys
from pathlib import Path

def normalize_tokens(dry_run=False):
    """Replace all hardcoded colors with token references"""
    
    src_path = Path("src")
    if not src_path.exists():
        print("Error: 'src' directory not found")
        sys.exit(1)
    
    # Color replacements
    replacements = {
        '#E3A93C': 'var(--accent-gold)',
        '#C8912F': 'var(--accent-gold-dark)',
        '#D4AF67': 'var(--brand-gold-alt)',
        '#C8A96A': 'var(--brand-primary)',
        '#A68A52': 'var(--brand-primary-dark)',
        '#0D1A2D': 'var(--brand-secondary)',
        '#0A0F1F': 'var(--brand-secondary-light)',
        '#1A1A1A': 'var(--brand-dark)',
        '#0D0D0D': 'var(--brand-dark-secondary)',
        '#F7F9FB': 'var(--brand-light)',
        '#E7ECF2': 'var(--brand-light-gray)',
        '#F7F7F7': 'var(--brand-text-muted)',
        '#C7C7C7': 'var(--brand-text-gray)',
    }
    
    # Regex patterns
    regex_patterns = {
        r'rgba\(242,\s*242,\s*242,\s*0\.70\)': 'var(--rgba-light-70)',
        r'rgba\(242,\s*242,\s*242,\s*0\.80\)': 'var(--rgba-light-80)',
        r'rgba\(242,\s*242,\s*242,\s*0\.90\)': 'var(--rgba-light-90)',
    }
    
    stats = {'files': 0, 'replacements': 0}
    
    print("=" * 60)
    print("Phase 5: Complete Token Centralization")
    print("=" * 60)
    print(f"Dry Run Mode: {dry_run}\n")
    
    # Process all TypeScript/JavaScript files
    for file_path in src_path.rglob('*'):
        if file_path.suffix not in ['.tsx', '.ts', '.jsx', '.js']:
            continue
        
        try:
            with open(file_path, 'r', encoding='utf-8') as f:
                content = f.read()
            
            original = content
            
            # Apply string replacements
            for old, new in replacements.items():
                count = content.count(old)
                if count > 0:
                    content = content.replace(old, new)
                    stats['replacements'] += count
            
            # Apply regex replacements
            for pattern, replacement in regex_patterns.items():
                matches = len(re.findall(pattern, content))
                if matches > 0:
                    content = re.sub(pattern, replacement, content)
                    stats['replacements'] += matches
            
            # Write if changes made
            if content != original:
                stats['files'] += 1
                if not dry_run:
                    with open(file_path, 'w', encoding='utf-8') as f:
                        f.write(content)
                print(f"✓ {file_path.name}")
        
        except Exception as e:
            print(f"✗ {file_path.name}: {str(e)}")
    
    print("\n" + "=" * 60)
    print(f"Files Modified: {stats['files']}")
    print(f"Total Replacements: {stats['replacements']}")
    print("=" * 60)
    print("\nPhase 5 Complete!" if not dry_run else "\n[DRY RUN] No files were modified")

if __name__ == "__main__":
    dry_run = len(sys.argv) > 1 and sys.argv[1] == "--dry-run"
    normalize_tokens(dry_run=dry_run)
