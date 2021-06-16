---
title: 'Link Underline Hovers'
date: '2021-06-15'
tags: ['css', 'web-dev']
color: 'var(--color-blog)'
---

## Background

Folks often mention the links on this website after they have had some time to poke around. People like how the underline doesn't go through the descenders of the text. Or they will say they enjoy the small animation. I thought I'd write a post about how I did this. I need to point out that everything I'll be talking about works great in Chrome, Edge, and Firefox. Safari links look just fine, but they look a bit different. More on that below.

## text-underline-offset

I find that the css property `text-underline-offset` isn't used that often. It allows you set the distance the underline appears from the text. You'll need to have `text-decoration` set to `underline` if this isn't happening already. It will take any valid length with a specified unit. Negative values are accepted as well. `text-underline-offset` works in all of the major browsers.

``` css
a {
    text-underline-offset: 0.5em;
}
```

## A thicker underline

On this website, I have thickened up the underline. I did this with the `text-decoration` property. 

``` css
a {
    text-decoration: underline 0.15em;
}
```

The second value in the `text-decoration` property is not supported in Safari, so it will just have the standard size.

## Animating the underline

I set the `text-underline-offset` property to be a custom property, --offset. I registered this custom property by using `@property`. Doing so will register the property for me to set later. Then we change the value of `--offset` on hover.

``` css
@property --offset {
    syntax: '<length>';
    inherits: false;
    initial-value: 0;
}

a{
    text-underline-offset: var(--offset, 0.1em);
    transition: --offset 300ms;
}

a:hover{
    --offset: 0.2em;
}
```

Running a transition on the `text-underline-offset` property won't work in Safari, so the underline doesn't animate smoothly.

See [this post on css-irl.info](https://css-irl.info/animating-underlines/) for a lot more details.