---
title: 'Bindable'
layout: 'layouts/default.html'
metaDesc: 'I am the meta desc for the bindable page.'
color: 'var(--color-project3)'
intro:
    main: 'Bindable'
    summary: 'A themeable design system.'
    image: './src/images/page-headers/bindable.jpg'
    imageAlt: 'Bindable Design System'
---

## Bindable

Bindable is a themeable design system built in Aurelia JS that allows for faster and easier web development. It comes with over 40 components, 10 layouts, a modular scale, various value converters, and more. It has helped me build interfaces quickly and efficiently. We make upgrades frequently, but despite my best efforts, it still cannot make me a sandwich.

- ### Team Project
    - 1 Javascript Engineer
    - 1 UX/UI Engineer (Me)
  {.side-by-side__single}

- ### Info
    - Aurelia Plugin (v1)
    - Stencil Web Components (v2)
    - CSS Modules
    - Typescript
  {.side-by-side__single}

{.side-by-side}

{% image "./src/images/pages/bindable/bindable-tokens.png", "Bindable Color Tokens", "100vw" %}
{.media-image}

Color tokens that come with Bindable
{.extra-spacing}

## Purpose and Goal

While working on the Uplynk project we noticed that engineers would often re-build something that was already in a different part of the app. A small example of this might be spacing between two buttons. Some new CSS would be added and yet classes were already in place for this. Design systems can help fix problems like this and many other problems. We set out to build one that would work for our use cases and allow everyone on the team to help build UIs without duplicating unnecessary code.

{% image "./src/images/pages/bindable/bindable-logo-sketches.png", "Bindable Logo Ideas", "100vw" %}
{.media-image}

Some Bindable logo sketches
{.extra-spacing}

## Problems and Thought Process

- ### Problems
    - One of the problems we needed to tackle was how structured Bindable would be. Bindable needed to define patterns and options but not be overly strict that it became hard to use or customize. Some components might only allow you to choose from a set list of options while others might allow you to set any value you want. We needed to figure out how to do this in an elegant way.
  {.side-by-side__single}

- ### Thought Process
    - After testing out a few options we landed on leveraging the power of CSS custom properties (aka variables). Within a component, if you set one of its predefined options we just apply the appropriate CSS class. If you pass in a custom value we set the value of a CSS custom property on that instance of the component so it gets the custom value. This allows us not to have to make dozens of CSS classes for each possible value. We end up with strict pre-defined options, yet total flexibility where needed.
  {.side-by-side__single}

{.side-by-side}

{% image "./src/images/pages/bindable/bindable-l-grid.png", "Bindable l-grid layout", "100vw" %}
{.media-image}

Example of the gap property of the l-grid layout
{.extra-spacing}

{% image "./src/images/pages/bindable/bindable-c-button.png", "Bindable c-button component", "100vw" %}
{.media-image}

Callbacks and color property of the c-button component
{.extra-spacing}

## Current Status

[Version 1](https://bindable-ui.com/) has become mature enough that we rely on it heavily in Uplynk. It was built specifically for Aurelia JS as that is what we were building Uplynk in at the time. While we are still using Aurelia it became apparent we needed Bindble not just in Aurelia. We started working on version 2 for this reason. Version 2 is well underway and many components have been built. Version 2 is built using Stencil and will work with any javascript framework. We are happy with the progress and look forward to releasing it in the future.
{.extra-spacing}

## Lessons Learned

I’ve been primarily a UX and HTML/CSS guy for a long part of my career. I’d get into the javascript when needed and could survive but that’s it. Starting Bindable has pushed me a little more into the javascript world. I’ve learned more about javascript classes, typescript, and with Bindable2 I’ve learned that jsx isn’t super crazy horrible and that it can grow on you. This project has been good for me because I could work a little slower at it to make sure I understood things. I also have been working on this with Joe Ipson and he has taught me a lot. 