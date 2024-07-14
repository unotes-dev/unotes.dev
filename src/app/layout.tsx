import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { GitHubLogoIcon, RocketIcon } from '@radix-ui/react-icons';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Unotes | Secure and Self-Hosted Note-Taking Application',
  description:
    'unotes is an open-source, self-hosted web application for secure note-taking. Focus on data safety and privacy with easy installation and management. Ideal for personal and organizational use.'
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/logo.svg" />
        <title>Unotes | Secure and Self-Hosted Note-Taking Application</title>
        <meta
          name="description"
          content="unotes is an open-source, self-hosted web application for secure note-taking. Focus on data safety and privacy with easy installation and management. Ideal for personal and organizational use."
        />
        <meta
          name="keywords"
          content="unotes, open-source notes application, secure note-taking, self-hosted notes, data privacy, self-hosted note-taking app"
        />
        <meta
          property="og:title"
          content="unotes - Secure and Self-Hosted Note-Taking Application"
        />
        <meta
          property="og:description"
          content="unotes is an open-source, self-hosted web application for secure note-taking. Focus on data safety and privacy with easy installation and management."
        />
        <meta property="og:image" content="/logo.svg" />
        <meta property="og:url" content="https://unotes.dev" />
        <meta property="og:type" content="website" />

        <meta name="twitter:card" content="/logo.svg" />
        <meta
          name="twitter:title"
          content="unotes - Secure and Self-Hosted Note-Taking Application"
        />
        <meta
          name="twitter:description"
          content="unotes is an open-source, self-hosted web application for secure note-taking. Focus on data safety and privacy with easy installation and management."
        />
        <meta name="twitter:image" content="/logo.svg" />
      </head>
      <body className={inter.className}>
        <header className="px-4 lg:px-6 h-14 flex items-center">
          <a className="flex items-center justify-center" href="/">
            <div className="flex gap-4 items-center">
              <img src="/logo.svg" alt="Unotes" width={32} height={32} />
              <span className="font-bold font-mono hidden md:flex">
                Safe Notes for Better Sleep
              </span>
            </div>
          </a>
          <nav className="ml-auto flex gap-4 sm:gap-6">
            <a
              className="text-sm font-medium hover:underline underline-offset-4"
              href="https://app.unotes.dev"
            >
              <div className="flex gap-1 items-center text-[#ce3df3]">
                <RocketIcon color="#ce3df3" />
                Playground
              </div>
            </a>
            <a
              className="text-sm font-medium hover:underline underline-offset-4"
              href="/features"
            >
              Features
            </a>

            <a
              className="text-sm font-medium hover:underline underline-offset-4"
              href="https://github.com/unotes-dev"
            >
              <div className="flex gap-1 items-center">
                <GitHubLogoIcon />
                Docs
              </div>
            </a>
          </nav>
        </header>

        {children}
      </body>
    </html>
  );
}
