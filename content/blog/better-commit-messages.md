---
title: "Writing Better Commit Messages"
date: "2026-02-20"
description: "Your commit history is a story. Make it one worth reading."
author: "Rd"
icon: "git"
category: "notes"
---

## The audience

A commit message has two readers: the person reviewing your PR right now, and the person running `git blame` six months from now trying to understand why this line exists.

Write for both of them.

## What to include

The title says what changed. The body says why. That's the whole framework.

"Fix login bug" is a title. "Users on Safari were getting redirected to the wrong page after OAuth because the callback URL wasn't being URL-encoded" is the why.

The diff already shows the what. The message should explain the intent behind the what.

## Atomic commits

Each commit should do one thing. If you find yourself writing "and" in your commit message, you probably need two commits.

This isn't pedantry. It makes reverts possible, makes bisecting useful, and makes the history actually readable.

## Conventional commits

The `type(scope): message` format works well for automated tooling. Changelogs, version bumps, and release notes can all be generated from well-structured commits.

But don't let the format become a substitute for a good message. `fix(auth): fix bug` technically follows the convention and tells you absolutely nothing.

## The test

Read your last ten commit messages. If a new team member could understand what happened and why from those messages alone, you're doing it right.
