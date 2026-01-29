# 🎨 Terracotta

**Elegant developer portfolio template built with modern web technologies**

A polished, full-stack portfolio website featuring smooth animations, responsive design, and optional authentication system. Perfect for showcasing your projects, skills, and experience.

---

## ✨ Features

- 🎭 **Modern UI** - Built with Shadcn UI components and Tailwind CSS v4
- 🎬 **Smooth Animations** - Powered by Motion (Framer Motion successor)
- 📱 **Fully Responsive** - Looks great on all devices
- 🌙 **Dark Mode** - Theme switching with next-themes
- ⚡ **Lightning Fast** - SSR with TanStack Start and Bun runtime
- 🔐 **Authentication Ready** - Optional Appwrite integration for protected content
- 🎯 **Type Safe** - Full TypeScript support
- 🧪 **Testing Ready** - Vitest setup included

---

## 🛠️ Tech Stack

### Frontend
- **[TanStack Start](https://tanstack.com/start)** - React-based full-stack framework
- **[React 19](https://react.dev/)** - UI library
- **[TypeScript](https://www.typescriptlang.org/)** - Type safety
- **[Tailwind CSS v4](https://tailwindcss.com/)** - Utility-first styling
- **[Shadcn UI](https://ui.shadcn.com/)** - Beautiful component library
- **[Motion](https://motion.dev/)** - Animation library

### Backend & Infrastructure
- **[Bun](https://bun.sh/)** - Fast JavaScript runtime
- **[Appwrite](https://appwrite.io/)** - Backend as a Service (optional)
- **[TanStack Query](https://tanstack.com/query)** - Server state management
- **[TanStack Router](https://tanstack.com/router)** - File-based routing

### Developer Experience
- **[Vitest](https://vitest.dev/)** - Unit testing
- **[ESLint](https://eslint.org/)** - Code linting
- **[Prettier](https://prettier.io/)** - Code formatting

---

## 🚀 Getting Started

### Prerequisites

- [Bun](https://bun.sh/) installed on your machine
- (Optional) [Appwrite](https://appwrite.io/) account for authentication features

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/IsmailYaman/Terracotta.git
   cd Terracotta
   ```

2. **Install dependencies**
   ```bash
   bun install
   ```

3. **Set up environment variables (optional)**

   If you want to use authentication features:
   ```bash
   cp .env.example .env
   ```

   Then edit `.env` and add your Appwrite credentials:
   - `APPWRITE_ENDPOINT` - Your Appwrite instance URL
   - `APPWRITE_API_KEY` - API key for server operations
   - `APPWRITE_PROJECT_ID` - Project identifier
   - `APPWRITE_BUCKET_ID` - Storage bucket ID

4. **Start development server**
   ```bash
   bun --bun vite dev --port 3000
   ```

   Or use the npm script (may require Node.js 20.19+):
   ```bash
   bun run dev
   ```

5. **Open your browser**

   Navigate to [http://localhost:3000](http://localhost:3000)

---

## 📦 Available Scripts

```bash
# Development
bun run dev              # Start dev server
bun run generate:routes  # Generate route types

# Production
bun run build           # Build for production
bun run start           # Start production server
bun run serve           # Preview production build

# Code Quality
bun run test            # Run tests
bun run lint            # Lint code
bun run format          # Format code with Prettier
bun run format:check    # Check code formatting

# UI Components
pnpx shadcn@latest add <component-name>  # Add Shadcn component
```

---

## 📁 Project Structure

```
Terracotta/
├── src/
│   ├── components/
│   │   ├── portfolio/      # Main portfolio sections
│   │   │   ├── Hero.tsx
│   │   │   ├── About.tsx
│   │   │   ├── Projects.tsx
│   │   │   ├── Skills.tsx
│   │   │   ├── Education.tsx
│   │   │   └── Footer.tsx
│   │   ├── auth/          # Authentication components
│   │   └── ui/            # Shadcn UI components
│   ├── routes/
│   │   ├── _public/       # Public routes
│   │   ├── _auth/         # Auth pages
│   │   └── _protected/    # Protected routes
│   ├── server/
│   │   ├── functions/     # Server actions
│   │   └── lib/           # Server utilities
│   ├── lib/               # Client utilities
│   └── hooks/             # Custom React hooks
├── public/                # Static assets
├── server.ts              # Custom Bun production server
└── vite.config.ts         # Vite configuration
```

---

## 🎨 Customization

### Portfolio Sections

All portfolio content is in `src/components/portfolio/`:
- **Hero.tsx** - Landing section with introduction
- **About.tsx** - About me section
- **Projects.tsx** - Project showcase
- **Skills.tsx** - Skills and technologies
- **Education.tsx** - Education and experience
- **Footer.tsx** - Footer with social links

### Adding Routes

TanStack Router uses file-based routing:
1. Create a new file in `src/routes/`
2. Run `bun run generate:routes`
3. Routes are automatically typed and available

### Adding UI Components

```bash
pnpx shadcn@latest add button
pnpx shadcn@latest add card
pnpx shadcn@latest add dialog
```

---

## 🚢 Deployment

### Production Build

```bash
bun run build
```

### Run Production Server

```bash
bun run start
```

The custom Bun server (`server.ts`) features:
- Intelligent asset preloading
- Gzip compression
- ETag support
- Configurable via environment variables

### Deploy to Platforms

This project can be deployed to:
- **Vercel** - Easy deployment with zero config
- **Netlify** - Static site hosting
- **Railway** - Full-stack deployment
- **DigitalOcean** - VPS deployment
- **Any platform supporting Node.js/Bun**

---

## 🔒 Authentication (Optional)

The template includes a complete authentication system:
- Sign up / Sign in
- Password recovery
- Protected routes
- Session management

To use authentication:
1. Set up Appwrite account
2. Configure environment variables
3. Update `src/server/lib/appwrite.ts` if needed

To remove authentication:
1. Delete `src/routes/_auth/` and `src/routes/_protected/`
2. Remove Appwrite-related code from `src/server/`
3. Simplify route structure

---

## 🤝 Contributing

Contributions are welcome! Feel free to:
- Report bugs
- Suggest features
- Submit pull requests

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

## 🙏 Acknowledgments

- [TanStack](https://tanstack.com/) for amazing developer tools
- [Shadcn](https://ui.shadcn.com/) for beautiful UI components
- [Tailwind CSS](https://tailwindcss.com/) for utility-first styling
- [Appwrite](https://appwrite.io/) for backend services

---

<div align="center">

**Built with ❤️ using TanStack Start**

[Report Bug](https://github.com/IsmailYaman/Terracotta/issues) · [Request Feature](https://github.com/IsmailYaman/Terracotta/issues)

</div>
