import type { Metadata } from "next";
import "./globals.css";
import { RootProviders } from "@/components/root-providers";

export const metadata: Metadata = {
  title: "Archery AI Builder - Build archery apps and sites with AI",
  description: "Turns ideas into apps in minutes.",
  openGraph: {
    title: "Archery AI Builder - Build archery apps and sites with AI",
    description: "Turns ideas into apps in minutes - no coding needed",
    type: 'website',
  }
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col">
        <RootProviders>{children}</RootProviders>
      </body>
    </html>
  );
}
