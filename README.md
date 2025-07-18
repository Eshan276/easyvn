# EasyVN - Visual Novel Engine

A lightweight, modular TypeScript-based visual novel engine for creating interactive stories in the browser.

---

## Overview

EasyVN provides a simple yet powerful framework for building visual novels with features like character dialogue, sprite management, branching narratives, and interactive choices. Built with TypeScript for type safety and modern web standards.

---
<img width="1920" height="875" alt="image" src="https://github.com/user-attachments/assets/eb2ac2ba-b873-4add-af73-2494d8763cd9" />

## Website

[EasyVN](https://easyvn.iameshan.tech/)


## Key Features

### 🎭 Character System
- Create characters with multiple sprites and expressions.
- Smooth character positioning and movement.
- Chainable method calls for fluid scene composition.

### 🎬 Scene Management
- Organize stories into discrete scenes with backgrounds.
- Smooth transitions between scenes.
- Scene registration with metadata support.

### 🔀 Branching Narratives
- Advanced routing system for complex story paths.
- Label-based navigation with `goto`/`jump` mechanics.
- Conditional story branching.

### 💬 Interactive Dialogue
- Click-to-continue dialogue system.
- Multiple choice decision points.
- Asynchronous choice handling.

### 🎨 Visual Elements
- Background management with automatic switching.
- Character sprite positioning (left, center, right).
- Smooth animations and transitions.

---

## Architecture

The engine is built with a modular architecture:

- **Character**: Manages character sprites, dialogue, and positioning.
- **Engine**: Core scene management and background handling.
- **Router**: Advanced navigation and branching logic.
- **Choices**: Interactive decision point system.
- **VN**: Utility class for simple scene playback.

---

## Getting Started

### Installation
Follow the installation instructions to set up EasyVN.

- To download this module separately, run: `npm i easyvn`
- To quickly set up a project, run:
  ```bash
  npx create-vn my-vn
  cd my-vn
  npm run dev
  ```


---

### HTML Requirements

Your HTML needs these key elements:

- `#background` - Background image element.
- `#character` - Character sprite element.
- `#textbox` - Dialogue container.
- `#speaker` - Character name display.
- `#dialogue` - Dialogue text display.
- `#choices` - Choice buttons container.

---

### Asset Structure

Organize assets in the following directories:

- `./assets/characters/` - Character sprites.
- `./assets/backgrounds/` - Background images.

---

## Core Concepts

### Scenes
The fundamental unit of your story. Each scene is an async function that can contain dialogue, choices, and navigation.

### Characters
Entities with names, sprites, and the ability to speak and move around the scene.

### Routing
A powerful system for creating branching narratives with labels and conditional jumps.

### Choices
Interactive decision points that can trigger different story paths or character reactions.

---

## API Summary

### Exports
- **Character**: Character class for managing sprites and dialogue.
- **VN**: Utility class for simple scene playback.
- **waitClick**: Promise-based click waiting.
- **showChoice**: Interactive choice system.
- **startScene**, **registerScene**, **setBackground**, **gotoScene**, **jumpToScene**: Scene management.
- **runNextRouteIfAny**, **route**, **goto**: Advanced routing system.

---
