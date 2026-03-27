---
title: "Lessons from Running a Side Project for 3 Years"
date: "2026-01-25"
description: "What I learned from building, maintaining, and occasionally neglecting something that was never supposed to last this long."
author: "Rd"
icon: "rocket"
category: "projects"
---

## It started as a weekend thing

Three years ago I built a small tool to solve a problem I had. It took a weekend. I put it on GitHub. A few people found it. Then a few more.

Now it has users who depend on it, and I have opinions about maintaining open source software.

## What I got right

**Keeping it small.** The scope stayed narrow. Every feature request that would have doubled the surface area got a polite "no" or a "here's how you could fork it."

**Writing docs early.** The README was almost as long as the codebase for the first year. That ratio felt wrong but turned out to be exactly right. Good docs meant fewer issues, which meant less maintenance.

## What I got wrong

**Not setting up CI immediately.** For the first six months, I tested manually. This was fine until someone submitted a PR that broke something I didn't think to test. Lesson: automate the things you'll forget.

**Underestimating the support burden.** Even a small project with a few hundred users generates a steady stream of questions. Most are answered in the docs, but people don't read docs. Building a FAQ and issue templates helped.

## The motivation curve

Enthusiasm is high in month one. By month six, the project is stable and boring. By month twelve, you're wondering if anyone would notice if you archived it.

Then someone opens an issue saying your tool saved them hours of work, and you remember why you built it.

## The real lesson

Side projects teach you things that work projects can't. You make every decision. You live with every shortcut. There's no team to distribute the consequences across.

That feedback loop, between choices and outcomes, is the most valuable part of the whole experience.
