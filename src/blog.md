---
title: 'Blog'
layout: 'layouts/feed.html'
metaDesc: 'I am the meta desc for the blog page.'
color: 'var(--color-blog)'
pagination:
    data: collections.blog
    size: 5
intro:
    main: 'Blog'
    summary: 'Blog Text'
    image: './src/images/page-headers/home.jpg'
    imageAlt: 'Blog'
permalink: 'blog{% if pagination.pageNumber > 0 %}/page/{{ pagination.pageNumber }}{% endif %}/index.html'
paginationPrevText: 'Newer posts'
paginationNextText: 'Older posts'
paginationAnchor: '#post-list'
---

## Headline2

The latest articles from around the studio, demonstrating our design
thinking, strategy and expertise.
