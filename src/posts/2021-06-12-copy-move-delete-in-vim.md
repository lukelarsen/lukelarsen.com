---
title: 'Copy, Move, and Delete in Vim'
date: '2021-06-12'
tags: ['vim']
color: 'var(--color-blog)'
---

## What I normally do

The copy, move, and delete commands in Vim routine. I usually move my cursor to the line I want to run the command on, then type the command. 

```
dd
yy
```

## What I'd like to get better at

What I'd like to get better at is running these commands without moving my cursor. The commands are pretty simple. I just have to get my mind in the habit of doing it. 

## Copy lines

Without moving your cursor you can run the copy command to target a line and place it below your current cursor. This is great because you don't have to move your cursor down to the line you want to yank it. This command will copy line 20 and paste it below your cursor.

```
:20co
``

`:t` is an alias for `:co` so you can shorten it to:

```
:20t
```

## Move lines

If you want to take line 20 out of where it is now and place it at line 10 you can run this:

```
:20m10
```

## Delete lines

I can see myself using this one the most. If my cursor is on line 3 and I want to delete lines 7 through 10 I can run:

```
7,10d
```

What can happen after the command is run is your cursor could get moved. Run `''` to get back to your previous position.

## Paying attention to line numbers

I think in order for me to get used to this I'm going to have to pay attention to the line numbers more often. I hope this helps or motivates someone to incorporate something new into their workflow.