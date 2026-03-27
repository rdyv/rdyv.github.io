---
title: "Building a Personal Knowledge Graph"
date: "2026-03-14"
description: "How I connected my notes, bookmarks, and code snippets into something that actually helps me think."
author: "Rd"
icon: "graph"
category: "notes"
featured: true
---

## The problem with notes

I had notes everywhere. Markdown files in a repo. Bookmarks in three browsers. Screenshots in a folder. Code snippets in gists. None of them talked to each other.

The information existed. Finding it when I needed it was the hard part.

## What a knowledge graph gives you

A knowledge graph is just nodes and edges. A note links to a concept. A concept links to a project. A project links to code. The structure emerges from the connections, not from a folder hierarchy.

The shift from "where do I file this?" to "what does this connect to?" changes how you capture information. You stop organizing and start linking.

## My setup

I settled on a simple approach:

- **Obsidian** for daily notes and long-form thinking
- **A local SQLite database** that indexes everything
- **A CLI tool** that lets me search across all sources
- **Backlinks** generated automatically from content analysis

The key insight was that I didn't need a fancy graph database. I needed a search index that understood relationships.

## What surprised me

The most useful connections were the ones I didn't create intentionally. Two notes written months apart, linked by a shared concept. A code snippet that turned out to be relevant to a completely different project.

The graph surfaced patterns I couldn't see in a flat list.

## Practical advice

Start small. Link things manually for a month before automating anything. You need to understand your own patterns before you can write code to detect them.

And don't over-structure it. The whole point is that the structure emerges. If you spend more time organizing than writing, you've missed the point.
