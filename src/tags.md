---
title: 'Tag Archive'
layout: 'layouts/feed.html'
metaDesc: 'I am the meta desc for the tags page.'
color: 'var(--color-blog)'
pagination:
    data: collections
    size: 1
    alias: tag
    filter: ['all', 'nav', 'blog', 'work', 'featuredWork', 'people', 'rss']
permalink: '/tag/{{ tag | slug }}/'
---
