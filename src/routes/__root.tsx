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
        name: 'author',
        content: 'Ismail Kayadelen',
      },
      {
        name: 'theme-color',
        content: '#753d9f',
      },
    ],
    links: [
      {
        rel: 'stylesheet',
        href: appCss,
      },
      {
        rel: 'icon',
        href: '/favicon.ico',
        sizes: '48x48',
      },
      {
        rel: 'icon',
        href: '/favicon.svg',
        type: 'image/svg+xml',
      },
      {
        rel: 'apple-touch-icon',
        href: '/apple-touch-icon.png',
      },
      {
        rel: 'manifest',
        href: '/manifest.json',
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
