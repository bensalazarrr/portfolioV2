---
order: 1
title: HDS-E
year: "2026"
discipline: web
summary: "A hotel front-desk and property-management simulation used as the official training tool of a hospitality management program."
image: /assets/hdse.webp
imageAlt: "HDS-E sign-in screen with role and year-level selection"
live: "https://hdse.lol"
specs:
  - label: Platform
    value: Web app
  - label: Access
    value: Role-based
  - label: Modules
    value: "5"
  - label: Status
    value: In use
stack:
  - HTML
  - CSS
  - JavaScript
---

## The problem

The hospitality management program needed students to practise front-desk work without a live property management system. Role-play only goes so far — you cannot teach a check-out flow when there is no folio behind it.

## What it does

Reservations, check-in and check-out, housekeeping status, billing, and guest records. Students sign in by role and year level, so the tool can run in a class without exposing administrative functions.

## How it was built

Plain HTML, CSS, and JavaScript — no framework, no build step. Screens load as static files, which keeps the tool fast on the lab machines and simple to hand over to the program.
