---
title: "Designing APIs That Developers Love"
date: "2026-03-08"
description: "Good APIs disappear into the background. Great ones make developers feel like they wrote the code themselves."
author: "Rd"
icon: "api"
category: "projects"
---

## The invisible API

The best API I ever used was one I barely noticed. I read the docs for ten minutes, wrote working code on the first try, and moved on. That's the goal.

Most APIs don't hit that bar. They require you to hold too much state in your head, name things inconsistently, or make the common case hard.

## Consistency over cleverness

Pick a pattern and stick with it. If `getUser` returns a user object, `getProject` should return a project object with the same shape conventions. If errors come as `{ error: { code, message } }`, they should always come that way.

Developers build mental models. Every inconsistency forces them to stop and recalibrate.

## Make the common case obvious

80% of your users will use 20% of your API. Make that 20% trivially easy. Put it on the first page of the docs. Make it work with zero configuration.

The advanced features can require reading. The basic ones shouldn't.

## Error messages are UI

An error message is the moment your API talks directly to a developer who is stuck. Make it count. Include what went wrong, what was expected, and ideally what to do about it.

`"Invalid request"` is not an error message. `"The 'email' field must be a valid email address. Received: 'not-an-email'"` is.

## Version thoughtfully

Don't break things. When you must break things, give people time. Deprecation warnings, migration guides, and a generous sunset period are the minimum.

The trust you build by not breaking things is worth more than any clever new feature.
