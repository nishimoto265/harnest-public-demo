# HarNest Public Demo App

This repository is a tiny public sandbox used to demonstrate HarNest on a real
GitHub repository and a real merged pull request.

## UI Conventions

- Interactive controls must have a specific accessible name.
- New user actions must expose a stable `data-analytics-event`.
- New UI states should expose a stable `data-ui-state`.
- Components that introduce new content density should keep the responsive
  card class convention.
- Fallback and notification copy should explain what is unavailable and what
  the user can do next.
- Trial and usage health components should expose explicit states for active,
  warning, and blocked flows.
