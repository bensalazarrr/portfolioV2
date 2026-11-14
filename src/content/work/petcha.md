---
order: 6
title: petcha
year: "2026"
discipline: mobile
frame: portrait
summary: "A reminders app for the things that repeat — bills, subscriptions, obligations — built with Expo and Supabase."
image: /assets/petcha.webp
imageAlt: "petcha home screen with a serif greeting and upcoming reminders"
specs:
  - label: Platform
    value: iOS · Android
  - label: Runtime
    value: Expo · RN
  - label: Data
    value: Supabase
  - label: Alerts
    value: expo-notifications
stack:
  - Expo
  - React Native
  - Supabase
---

## The idea

Most reminder apps are built for tasks. petcha is built for the things that repeat — internet, car payments, subscriptions — where the point is not to tick a box once, but to never miss the next one.

## Design

Dark olive and off-white, a serif display face against small mono labels. It reads like a printed list rather than a productivity dashboard, which was the intent.

## Technical

Expo and React Native with expo-router, Supabase for storage and sync, expo-notifications for scheduling, and a local cache so the list is readable before the network catches up.

![petcha reminders screen showing a timeline of upcoming bills](/assets/petcha-reminders.webp)
