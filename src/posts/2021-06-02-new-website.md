---
title: 'New Website'
date: '2021-06-02'
tags: ['web-dev']
color: 'var(--color-blog)'
---

## New Website!

[John Dilworth](https://johndilworth.com/) was a professor of mine in college. He once told me to always keep an updated portfolio. My website had not been updated in quite some time, so I set out to give it a refresh. I did the design work over a year ago but never got around to building it. 

## Page Transitions

I designed the site to have small page transitions between pages. At the time, I had no idea how that could be accomplished. I'm glad I never got around to building this website until now because I don't think I could have used the transition library called [Swup](https://swup.js.org/). I stumbled upon it when researching how to do modern page transitions. It's dead simple to get some [page transitions going using CSS](https://swup.js.org/getting-started/example). I found I needed some more control over the page transitions, so I went with the [javascript version](https://swup.js.org/plugins/js-plugin) of Swup. Using the javascript Swup plugin also let me use [Green Sock](https://greensock.com/) to make things smooth.

## Static Site Generator 11ty

I knew I wanted to build a static site and not use some CMS. I tested a few static site generators out. I found [11ty](https://www.11ty.dev/) to be easy to use and powerful enough to allow me to do what I wanted with this website. The templating was easy for me to understand. I'm using [Nunjucks](https://www.11ty.dev/docs/languages/nunjucks/) for the templating. One thing I knew I needed to handle well was images. I have a large hero image at the top of each page and portfolio images for each project. Serving the correct image size for different devices was going to get complicated. I knew I wanted to use the <picture> element, but I didn't want to set it up separately for each image. Luckily 11ty has an image plugin that will do all this for me. I use the top sample in my templates and the bottom code sample gets rendered.

{% raw %}
``` html
{% headerimage intro.image, intro.imageAlt, "100vw" %}
```
{% endraw %}

``` html
<picture>
    <source type="image/webp" srcset="/img/b7d66153-300.webp 300w, /img/b7d66153-600.webp 600w, /img/b7d66153-900.webp 900w, /img/b7d66153-1200.webp 1200w, /img/b7d66153-1800.webp 1800w, /img/b7d66153-2000.webp 2000w, /img/b7d66153-3500.webp 3500w" sizes="100vw">
    <source type="image/jpeg" srcset="/img/b7d66153-300.jpeg 300w, /img/b7d66153-600.jpeg 600w, /img/b7d66153-900.jpeg 900w, /img/b7d66153-1200.jpeg 1200w, /img/b7d66153-1800.jpeg 1800w, /img/b7d66153-2000.jpeg 2000w, /img/b7d66153-3500.jpeg 3500w" sizes="100vw">
    <img alt="Luke Larsen UX + Front End" loading="lazy" decoding="async" src="/img/b7d66153-300.jpeg" width="3500" height="2517">
</picture>
```

## Lighthouse Score

Lighthouse is a service that will rate a website on performance, accessibility, best practices, and SEO. I worked hard to get this score up. Yay!

{% image "./src/images/posts/2021-06-02-new-website/lighthouse.png", "Lighthouse Score", "50vw" %}
{.media-image .media-image-caption .media-image-small}

Huzzah!
{.extra-spacing}

## Blog

I have a good amount of posts I need to bring over. I hope to do that over time.
{.extra-spacing}