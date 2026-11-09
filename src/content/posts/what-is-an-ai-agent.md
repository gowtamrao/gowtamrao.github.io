---
title: 'What actually is an AI agent?'
description: 'A plain-English explanation of AI agents: a model, a loop, and some tools.'
date: 2026-11-08
topic: ai
tags: ['llm', 'agents', 'explainer']
---

"Agent" is one of the most overused words in tech right now. Here's the simplest definition I've found useful.

## The one-line version

An AI agent is **a language model running in a loop, with tools it can call**, working towards a goal.

## The loop

```text
goal → model thinks → picks a tool → tool runs → result goes back to model → repeat → done
```

1. You give the model a goal ("find and fix the failing test").
2. The model decides what to do next and asks to call a tool (read a file, run a command, search the web).
3. Your code runs the tool and hands the result back.
4. The model looks at the result and decides the next step — until it's done.

## Why this matters

A plain chatbot can only *talk*. An agent can *act*: it can gather information it didn't have and check its own work. That's the jump from "autocomplete" to "assistant".

## What's next

In future posts I'll build a tiny agent from scratch and look at protocols like MCP that let agents plug into real tools.

*(This is a sample post — edit or replace it with your own!)*
