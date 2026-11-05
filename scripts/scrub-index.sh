#!/bin/sh
# index-filter for `git filter-branch`: drop everything that must never be published
# (redistribution-blocked fonts and reference-only screenshots) from every commit.
git rm -r --cached --ignore-unmatch ':(glob)**/*.png' 'packages/dsh-theme-zzz/fonts' >/dev/null
exit 0
