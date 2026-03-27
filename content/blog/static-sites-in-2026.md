---
title: "The Case for Static Sites in 2026"
date: "2026-03-20"
description: "Server components and edge functions are everywhere, but the humble static site still wins more often than you'd think."
author: "Rd"
icon: "lightning"
category: "projects"
featured: true
---

## The pendulum swings

Every few years, the web development world rediscovers that serving pre-built HTML files is fast. Then it forgets again. Then it remembers.

We are in a remembering phase.

## What changed

Static site generators used to mean Jekyll and waiting 45 seconds for your blog to build. Now it means Next.js with `output: "export"`, Astro with zero JS by default, or even just a markdown file and a GitHub Action.

The tooling caught up. You get component architectures, TypeScript, hot reload, and a build that finishes before you can switch to the browser tab.

## When static wins

Static is the right call when your content changes at deploy time, not at request time. That covers more ground than people realize:

- **Blogs and documentation.** Obviously.
- **Marketing sites.** The content changes weekly, not per-request.
- **Dashboards with public data.** Rebuild on a schedule, serve from a CDN.
- **Internal tools.** If the data source has an API, fetch at build time.

## The cost of dynamic

Every server-rendered page is a machine that needs to stay running. It needs monitoring, scaling, error handling, and a deployment strategy. A static file needs a CDN and nothing else.

The operational simplicity is the real argument. Not speed, not cost, not developer experience. Just fewer things that can break at 2am.

## The hybrid sweet spot

The best modern stacks let you choose per-page. Most pages are static. A few are dynamic. You don't have to pick one mode for the entire site.

That's the real win of frameworks like Next.js and Astro. Not that they can do everything, but that they let you do the minimum necessary thing for each page.
