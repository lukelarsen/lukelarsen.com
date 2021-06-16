---
title: 'Varients With CSS Custom Properties'
date: '2021-06-05'
tags: ['css', 'web-dev']
color: 'var(--color-blog)'
---

## Background

When writing CSS, we often need to make classes for various variants. An example of this might be setting some spacing inside a component. You might have classes like this:

``` css
.component{
    background: white;
    border: solid 1px blue;
}

.component--spacing-large{
    margin-bottom: 24px;
}

.component--spacing-medium{
    margin-bottom: 12px;
}

.component--spacing-small{
    margin-bottom: 6px;
}
```

Depending on how many different spacings you need, you could end up with a lot of classes.

## A different approach
I decided to try this when making the [layout components for Bindable](https://bindable-ui.com/#/layouts/overview). I didn't want to have all the classes it would take to give me all the sizing options. I wasn't even sure if all those classes would get used in HTML. The different approach uses CSS Custom Properties.

``` css
.component{
    --component-spacing: 12px;
    background: white;
    border: solid 1px blue;
    margin-bottom: var(--component-spacing);
}
```

``` html
<div
    class="component"
    style="--component-spacing: 24px"
>
    ...
</div>
```

If you need the default spacing, you wouldn't need the style attribute in your HTML. But now, you can set that spacing to be whatever you want for each specific use case. A new CSS class for new variants is not needed. This general idea is used heavily in the layout components for Bindable.