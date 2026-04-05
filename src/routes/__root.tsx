import {
  HeadContent,
  Scripts,
  createRootRouteWithContext,
} from '@tanstack/react-router'
import appCss from '../styles.css?url'

import type { QueryClient } from '@tanstack/react-query'
import { Toaster } from '@/components/ui/sonner'
import { ThemeProvider } from 'next-themes'
import { useEffect } from 'react'
import { authMiddleware } from '@/server/functions/auth'
import { LenisProvider } from '@/components/providers'

interface MyRouterContext {
  queryClient: QueryClient
}

const scripts: React.DetailedHTMLProps<
  React.ScriptHTMLAttributes<HTMLScriptElement>,
  HTMLScriptElement
>[] = []

if (import.meta.env.VITE_INSTRUMENTATION_SCRIPT_SRC) {
  scripts.push({
    src: import.meta.env.VITE_INSTRUMENTATION_SCRIPT_SRC,
    type: 'module',
  })
}

export const Route = createRootRouteWithContext<MyRouterContext>()({
  loader: async () => {
    const { currentUser } = await authMiddleware()

    return {
      currentUser,
    }
  },
  head: () => ({
    meta: [
      {
        charSet: 'utf-8',
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1',
      },
      {
        title: 'Frontend Developer Portfolio',
      },
      {
        name: 'description',
        content:
          'A polished, modern portfolio showcasing creative frontend development expertise with elegant design, smooth animations, and responsive layouts.',
      },
    ],
    links: [
      {
        rel: 'stylesheet',
        href: appCss,
      },
      {
        rel: 'preconnect',
        href: 'https://fonts.googleapis.com',
      },
      {
        rel: 'preconnect',
        href: 'https://fonts.gstatic.com',
        crossOrigin: 'anonymous',
      },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,100..1000;1,9..40,100..1000&family=Playfair+Display:ital,wght@0,400..900;1,400..900&display=swap',
      },
    ],
    scripts: [...scripts],
  }),

  shellComponent: RootDocument,
})

function ConsoleEasterEgg() {
  useEffect(() => {
    console.log(
      `%c
 _   _       _   _     _               _           __ _           _   _                          __
| \\ | |     | | | |   (_)             | |         / _(_)         | | | |                      _  \\ \\
|  \\| | ___ | |_| |__  _ _ __   __ _  | |_ ___   | |_ _ _ __   __| | | |__   ___ _ __ ___    (_)  | |
| . \` |/ _ \\| __| '_  | | '_ \\ / _\` | | __/ _ \\  |  _| | '_ \\ / _\` | | '_ \\ / _ \\ '__/ _ \\        | |
| |\\  | (_) | |_| | | | | | | | (_| | | || (_) | | | | | | | | (_| | | | | |  __/ | |  __/    _   | |
\\_| \\_/\\___/ \\__|_| |_|_|_| |_|\\__, |  \\__\\___/  |_| |_|_| |_|\\__,_| |_| |_|\\___|_|  \\___|   (_)  | |
                                __/ |                                                            /_/
                               |___/                                                                 `,
      'color: #753d9f; font-family: monospace;'
    )
  }, [])
  return null
}

function RootDocument({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <HeadContent />
      </head>
      <body className="font-sans antialiased relative">
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <LenisProvider>
            {children}
          </LenisProvider>
          <ConsoleEasterEgg />
          <Toaster />
        </ThemeProvider>
        <Scripts />
      </body>
    </html>
  )
}
