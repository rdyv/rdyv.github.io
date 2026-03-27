---
title: "On Simplicity in Software"
date: "2026-02-04"
description: "Simple is not easy. It takes real effort to find the straightforward solution hiding behind the complicated one."
author: "Rd"
icon: "circle"
category: "opinions"
---

## The easy trap

The first solution to most problems is complicated. It handles every edge case, anticipates every future requirement, and abstracts everything behind interfaces.

It's also usually wrong.

Complicated solutions feel productive because they're hard to build. But difficulty is not a proxy for quality. The best code is often embarrassingly straightforward.

## What simple means

Simple doesn't mean fewer lines of code. It means fewer concepts. A 200-line file with one clear idea is simpler than a 50-line file that requires understanding three patterns and an inheritance hierarchy.

Simple code is code where each part does one thing, and you can understand that thing without reading the rest of the codebase.

## How to get there

Start with the naive solution. The one you'd be embarrassed to show in a code review. Then ask: does it work? Does it handle the actual requirements (not the hypothetical ones)?

Often, it does. And the naive solution has a property that the clever one doesn't: everyone on the team can understand it, modify it, and debug it.

## When complexity is necessary

Sometimes the problem is genuinely complex. Distributed systems, concurrent data access, real-time collaboration. These require sophisticated solutions because the underlying problem is sophisticated.

The skill is distinguishing between essential complexity (the problem is hard) and accidental complexity (we made it hard). Most of the complexity in most software is accidental.

## The practice

Every time you're about to add an abstraction, ask: what if I just didn't? What if I duplicated this code instead of extracting it? What if I used a simple `if` statement instead of a strategy pattern?

Sometimes the abstraction is warranted. But asking the question forces you to justify the complexity rather than defaulting to it.
