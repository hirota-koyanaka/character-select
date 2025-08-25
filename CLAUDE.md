# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## 重要なルール

**すべてのやり取りは日本語で行うこと。** ユーザーへの応答、説明、エラーメッセージなど、すべてのコミュニケーションは日本語を使用してください。

## Commands

### Development
- `pnpm dev` - Start the development server (Next.js)
- `pnpm build` - Build the production application
- `pnpm start` - Start the production server
- `pnpm lint` - Run Next.js linting

### Package Management
This project uses pnpm as the package manager. Use `pnpm add` to install dependencies.

## Architecture

### Tech Stack
- **Framework**: Next.js 15 with App Router
- **UI Components**: shadcn/ui (component library built on Radix UI)
- **Styling**: Tailwind CSS v4 with CSS variables
- **Language**: TypeScript with strict mode enabled
- **Fonts**: Geist Sans and Geist Mono

### Project Structure
- `/app` - Next.js App Router pages and layouts
  - `page.tsx` - Main character select game interface
  - `layout.tsx` - Root layout with font configuration
  - `globals.css` - Global styles and Tailwind directives
- `/components/ui` - shadcn/ui components library (pre-built components)
- `/lib/utils.ts` - Utility functions including `cn()` for className merging
- `/hooks` - Custom React hooks

### Key Patterns
- Path aliases configured with `@/` prefix pointing to root directory
- shadcn/ui components are pre-configured and stored in `/components/ui`
- The main application is a character selection interface with emoji-based characters
- Uses client-side state management with React hooks

### Build Configuration
- ESLint errors are ignored during builds (`ignoreDuringBuilds: true`)
- TypeScript errors are ignored during builds (`ignoreBuildErrors: true`)
- Images are served unoptimized (`unoptimized: true`)