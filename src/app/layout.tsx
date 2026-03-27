import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: {
    default: "Notes of Rd",
    template: "%s — Notes of Rd",
  },
  description: "Writing about software, ideas, and things I find interesting",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=IBM+Plex+Serif:ital,wght@0,400;0,450;0,500;0,600;1,400&display=swap"
          rel="stylesheet"
        />
        <link rel="icon" href="/profile.png" type="image/png" />
        {/* Prevent dark mode flash */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var d=document.documentElement,t=localStorage.getItem('theme');if(t==='dark'||(!t&&window.matchMedia('(prefers-color-scheme:dark)').matches)){d.classList.add('dark')}}catch(e){}})()`,
          }}
        />
      </head>
      <body className="relative flex min-h-screen flex-col overflow-x-clip">
        <Header />
        <div className="mx-auto flex min-h-0 w-full max-w-6xl flex-1 border-x border-border">
          <main className="min-w-0 flex-1">{children}</main>
        </div>
        <Footer />
      </body>
    </html>
  );
}
