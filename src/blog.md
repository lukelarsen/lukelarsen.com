---
title: 'Blog'
layout: 'layouts/feed.html'
metaDesc: 'Luke Larsen Blog'
color: 'var(--color-blog)'
pagination:
    data: collections.blog
    size: 6
permalink: 'blog{% if pagination.pageNumber > 0 %}/page/{{ pagination.pageNumber }}{% endif %}/index.html'
paginationPrevText: 'Newer posts'
paginationNextText: 'Older posts'
paginationAnchor: '#post-list'
---