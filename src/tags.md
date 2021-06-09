---
title: 'Tag Archive'
layout: 'layouts/tags.html'
metaDesc: 'Blog posts sorted by tag'
color: 'var(--color-blog)'
pagination:
    data: collections
    size: 1
    alias: tag
    filter: ['all', 'nav', 'blog', 'work', 'featuredWork', 'people', 'rss']
permalink: '/blog/tag/{{ tag | slug }}/'
---
