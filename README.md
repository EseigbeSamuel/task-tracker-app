# Task Tracker

A simple mobile task management app built with React Native, Expo, and TypeScript.

## Setup

```bash
npm install
npx expo start
```

Scan the QR code with the **Expo Go** app on your iOS or Android device.

> Requires Expo Go with SDK 54 support.

## Features

- View a list of tasks
- Create new tasks (empty task validation included)
- Mark tasks as complete or incomplete
- Filter tasks by **All**, **Active**, or **Completed**
- Tasks persist locally across app restarts

## Project Structure

```
task-tracker/
├── app/              # Entry point and screens
├── components/       # UI components (TaskItem, TaskInput, FilterBar)
├── hooks/            # useTasks — state and persistence logic
├── storage/          # AsyncStorage read/write helpers
├── types/            # TypeScript interfaces
```

## Libraries Used

| Library                                     | Reason                                                                                         |
| ------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `expo`                                      | Managed workflow, easy device testing via Expo Go                                              |
| `@react-native-async-storage/async-storage` | Simple, reliable local persistence without the overhead of a full database                     |
| `nativewind`                                | Tailwind-style utility classes for React Native — faster styling with consistent design tokens |
| `react-native-safe-area-context`            | Handles notches and home indicators across devices cleanly                                     |

## What I'd Improve With More Time

- **Swipe to delete** tasks using `react-native-gesture-handler`
- **Edit task titles** inline with a long-press gesture
- **Due dates and reminders** via `expo-notifications`
- **Animations** on task completion with `react-native-reanimated`
- **Unit tests** for the `useTasks` hook using Jest and React Native Testing Library
- **Haptic feedback** on task toggle for a better mobile feel
