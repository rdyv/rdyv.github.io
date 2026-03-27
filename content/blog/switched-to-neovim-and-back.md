---
title: "Why I Switched to Neovim and Back"
date: "2026-01-15"
description: "A six-month experiment with modal editing, what I gained, and why I eventually returned to a graphical editor."
author: "Rd"
icon: "terminal"
category: "opinions"
---

## The appeal

Everyone who uses Neovim seems to love it with an intensity that borders on religious. The promise is compelling: an editor that's as fast as your thoughts, completely customizable, runs in a terminal, and never requires a mouse.

So I tried it. For six months.

## What I gained

**Speed in text manipulation.** After the learning curve, editing text with Vim motions is genuinely faster. `ciw` to change a word, `dd` to delete a line, `.` to repeat the last action. The grammar of commands becomes intuitive.

**Focus.** A terminal editor with no sidebar, no notifications, and no distractions. Just code. There's something to be said for that.

**Understanding my tools.** Configuring Neovim meant understanding LSP, treesitter, and how editors actually work under the hood. That knowledge transfers.

## What I lost

**Discovery.** In a graphical editor, features are visible. Menus, buttons, hover tooltips. In Neovim, if you don't know a feature exists, it effectively doesn't. I kept finding out about useful plugins months after I needed them.

**Speed in everything else.** File navigation, project-wide search and replace, debugging, git integration. All possible in Neovim. All faster in a graphical editor with good defaults.

**Time.** I spent more time configuring my editor than I'd like to admit. The "I'll just tweak this one thing" loop is real and dangerous.

## The synthesis

I kept Vim keybindings. Most graphical editors support them now. I get the text editing speed without the configuration overhead.

The experiment was worth it. I learned a lot. But I write code for a living, and I need my tools to get out of the way. For me, that means a graphical editor with Vim motions, not Vim with graphical plugins.
