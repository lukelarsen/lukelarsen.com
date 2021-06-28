---
title: 'Gap On Flexbox'
date: '2021-05-04'
tags: ['css', 'web-dev']
color: 'var(--color-blog)'
---

## Gap Background
Flexbox has supported gap as a way to add spacing between flexbox items for a while. We didn't have support in Safari for the gap property until just recently. Safari 14.1 now supports it! What this means is that our CSS can get cleaner!

## What does it look like

The syntax is super simple. The great thing about gap is that it handles wrapping. Your flex container will wrap the children, and the spacing will be nice and orderly.

``` css
.flex{
    display: flex;
    gap: 15px;
}
```

## What we had to do before

Before the Safari update, we had to add one of the fixes to get spacing correct on wrapping children.

### The lobotomized owl

Kind of a crazy name. It fits. It looks like this:

``` css
.flex > * + * {
    margin-left: 15px;
}
```

The simple way to think about this is that it applies to all but the first child of .flex. The bad thing about this one is that it also doesn't work on wrapping children. Once things start to go to the second row, they will still have the correct spacing.

### Negative Margins

This method will get things working with children items, but we have to wrap everything in a new container with `overflow: hidden;` applied to it. Beware, this will cause problems if you need overflow to show. It looks like this.

``` css
.wrapper{
    overflow: hidden;
}

.flex{
    display: flex;
    flex-wrap: wrap;
    margin: -15px 0 0 -15px;
}

.flex > * {
    margin: 15px 0 0 15px;
}
```

## Conclusion
As you can see, the gap property is much better than what we had to do before. No hacking, no trade-off. It just works. 