---
title: "A Field Guide to Debugging Production"
date: "2026-01-05"
description: "When something breaks at scale, your approach matters more than your tools. Here's a framework."
author: "Rd"
icon: "bug"
category: "notes"
---

## The 3am page

Something is broken. Users are affected. The dashboard is red. Your heart rate is up. This is the worst time to be figuring out your debugging strategy.

The best debugging happens before the incident, in how you build observability into your systems. But since you're already here, let's talk about what to do now.

## Step one: scope it

Before you fix anything, understand the blast radius. Is it all users or some? All regions or one? All endpoints or specific ones? The answers narrow the search space dramatically.

Check your metrics first, then logs. Metrics tell you what's wrong. Logs tell you why.

## Step two: find the change

Most production incidents are caused by a recent change. A deploy, a config update, a database migration, a traffic pattern shift.

`git log --since="2 hours ago"` is an underrated debugging tool. So is asking "what changed?" in the incident channel.

## Step three: reproduce or correlate

If you can reproduce it, you can fix it. If you can't reproduce it, find the correlation. What do affected users have in common? What time did it start? What's different about the failing requests?

## Step four: fix forward or roll back

If the cause is clear and the fix is simple, fix forward. If it's unclear or complex, roll back the recent change and investigate from a stable state.

Rolling back is not a failure. It's a strategy. Getting users back to a working state quickly is always the right first move.

## The postmortem

After the incident, write down what happened, why, how you found it, and what you'll change to prevent it. The postmortem is more valuable than the fix. The fix solves one problem. The postmortem prevents a category of problems.
