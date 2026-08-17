import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'AI Cloudflare App',
  description: 'AI App built with AI SDK and Next.js',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body style={{ margin: 0, padding: 0, backgroundColor: '#ffffff' }}>
        {children}
      </body>
    </html>
  );
}
