---
order: 5
title: ViralFrame
year: "2026"
discipline: systems
summary: "A local, CPU-friendly tool that cuts long videos into vertical clips from exact timestamps, with FFmpeg handling the media and optional speech-to-text captions."
image: /assets/viral-frame.webp
imageAlt: "ViralFrame dashboard with a clip source field and job statistics"
specs:
  - label: Runtime
    value: Python 3.11+
  - label: Media
    value: FFmpeg
  - label: Interface
    value: FastAPI
  - label: Processing
    value: Local · CPU
stack:
  - Python
  - FastAPI
  - FFmpeg
  - yt-dlp
---

## What it does

Takes a video — uploaded, or fetched from a permitted URL — and exports vertical clips from exact start and end points. Optional subtitle generation, and optional audio-based detection of candidate moments.

## Why local

Processing runs on the machine you are using. No upload, no queue, no account, no per-minute cost. That constraint shaped the whole build: it has to work on a laptop CPU, so it avoids GPU-only models and heavy pipelines.

## Stack notes

Python 3.11+ with FFmpeg for all media handling, FastAPI and uvicorn for the browser interface, yt-dlp for permitted source downloads, and faster-whisper kept as an optional extra rather than a hard dependency. Captions are burned in with Pillow.
