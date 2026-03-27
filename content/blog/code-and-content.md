---
title: "Code and Content Are Becoming the Same Thing"
date: "2026-03-26"
description: "The line between writing software and writing prose is dissolving. What happens when the two converge?"
author: "rdyv"
tags: ["Software", "Writing"]
---

## The old separation

There used to be a clean divide. Engineers wrote code. Writers wrote content. The tools were different, the workflows were different, the people were different. A CMS on one side, an IDE on the other. Nobody confused the two.

That separation made sense when software was compiled binaries and content was static pages. But that world is gone.

## Everything is a text file now

Blogs are markdown. Infrastructure is YAML. Designs are JSON tokens. Policies are code. The format converged first. Then the tooling followed. Version control, pull requests, linting, CI/CD — all of it now applies to words just as much as it applies to functions.

When you write a blog post in a Git repo, review it in a PR, and deploy it through a pipeline, you are doing software engineering. The fact that the output is prose instead of a binary doesn't change the process.

## Prose that executes

The interesting shift isn't just that content lives in repos. It's that content is starting to *do things*. Documentation generates API clients. README files configure tools. Comments become type annotations. Prompts become programs.

A well-written prompt is closer to a function than it is to a paragraph. It takes input, applies logic, and produces output. The syntax is English, but the intent is computational.

## Code that reads like writing

Meanwhile, code is moving the other direction. Declarative frameworks, DSLs, and configuration languages keep pushing code toward natural language. A Terraform file reads more like a specification than an instruction set. A React component reads more like a description of what should exist than a sequence of operations.

The gap between "describe what you want" and "instruct the machine how to do it" is narrowing from both sides.

## What this changes

When code and content are the same thing, a few assumptions break down:

- **Roles blur.** The person writing docs might also be writing the system that serves them. The person writing prompts might be the most effective "programmer" on the team.
- **Quality standards merge.** If your prose ships through the same pipeline as your code, it should meet the same bar. Reviewed, tested, versioned.
- **Tools consolidate.** The editor, the preview, the deploy — it all collapses into one flow. The CMS becomes the repo. The repo becomes the CMS.

## The convergence

This isn't a prediction. It's already happening. You're reading a markdown file that was committed to a Git repo, built by a static site generator, and deployed through a CI pipeline. The words and the infrastructure are the same artifact.

Code and content aren't becoming the same thing in some abstract future sense. They already are. The only question is whether we update our mental models to match.
