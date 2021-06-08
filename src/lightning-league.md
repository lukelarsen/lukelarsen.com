---
title: 'Lightning League'
layout: 'layouts/default.html'
metaDesc: 'I am the meta desc for the Lightning League page.'
color: 'var(--color-project2)'
intro:
    main: 'Lightning League'
    summary: 'A web app for running pickleball leagues.'
    heroAlign: 'right'
    image: './src/images/page-headers/lightning-league.jpg'
    imageAlt: 'Lightning League Web App'
---

## Lightning League

Lightning League is a web application to run pickleball leagues. What is pickleball? The short answer is one of the fastest-growing sports in the world. [Here is a link](https://usapickleball.org/what-is-pickleball/) to learn more about it if you are curious. Running a sports league is cumbersome. You have to manage sign-ups/players, input scores, contact players, and much more. Lightning League will handle all of that for you and allow you to focus on pickleball and having fun.

- ### Collaboration Project
    - 1 Designer (Initial Design Ideas)
    - Everything Else (Me)
  {.side-by-side__single}

- ### Info
    - Bindable UI
    - Firebase
    - Aurelia JS
  {.side-by-side__single}

{.side-by-side}

{% image "./src/images/pages/lightning-league/lightningleague-leagues.png", "Lightning League Leagues Page", "100vw" %}
{.media-image}

List of leagues in a given area
{.extra-spacing}
 
## Purpose and Goal

A small group of pickleball players and myself would organize a small group to play pickleball each week. We quickly found more and more people wanted to join our group. Things got out of hand quickly. It became hard to tell who was coming, who should play who, and many other problems. I volunteered to make a website to help organize things. Another member of the group, [Adam Record](https://www.adamrecordmusic.com/), also volunteered to get some initial designs done. Since then we have had over 150 players sign up. We’ve used the system to play each week. It has saved us a lot of time. Huzzah! Since then I’ve been putting together a system that will allow organizations to create their own leagues. Then players can search for leagues in their area to get more play in.

-
    - {% image "./src/images/pages/lightning-league/league-list.png", "Lightning League Mobile List Page", "30vw" %}
{.media-image}

    List of leagues on mobile
  {.side-by-side__single}

-
    - {% image "./src/images/pages/lightning-league/league-single.png", "Lightning League Mobile Single Page", "30vw" %}
{.media-image}

    League single on mobile
  {.side-by-side__single}

{.side-by-side}

## Problems and Thought Process

- ### Problems
    - We ran into two pain points when running pickleball groups each week. First, keeping track of scores from week to week and displaying those for everyone to see. We had to spend time doing calculations to get the scores and letting everyone know the results was a pain. Second, knowing who was coming each week and who couldn’t make it. We spent a lot of time texting people to know if they are coming. To maximize playtime we need groups of four each week. Getting that perfect was very time-consuming.
  {.side-by-side__single}

- ### Thought Process
    - To address the first problem we made the Lightning League web app calculate scoring and player match-ups automatically. An admin can log in and quickly input scores for a given round. It will do the math and organize players based on score. To help us out with the second problem an RSVP system was added. Messages can be sent to players via email or text. Players have to answer and their answers are logged and then groups of four are made automatically based on who is playing for a given round.
  {.side-by-side__single}

{.side-by-side}

{% image "./src/images/pages/lightning-league/lightningleague-rsvp.png", "Lightning League RSVP Screen", "100vw" %}
{.media-image}

Find out who has RSVP'd so far
{.extra-spacing}

{% image "./src/images/pages/lightning-league/lightningleague-enter-scores.png", "Lightning League Entering Scores", "100vw" %}
{.media-image}

Quickly enter scores after play is over
{.extra-spacing}

## Current Status

Lightning League is a side project of mine. It is currently a work in progress and not available for everyone to see. It has helped us organize ourselves and save us time. Later, it will be opened up for others to start, organize, and run their leagues. I’ve talked to a few local groups that run pickleball leagues and they have provided some valuable feedback on what it would take for them to use Lightning League. Overall Lightning League is much better than the spreadsheets most places are using to run their leagues. 
{.extra-spacing}

## Lessons Learned

Backend work for web applications is hard. At first, I wanted to do things custom and learn how to do things myself. I spend a lot of time reading and researching. I quickly became overwhelmed. I friend of mine mentioned Firebase. It seemed a little like cheating but was perfect for me. It handles a lot of work for me and I can focus on building the app and doing the things I know how to do. Firebase does still push me and I have to learn new things but what I do need to learn is within reach were doing everything from scratch was not within reach.
{.extra-spacing-plus}