export const metadata = {
  title: 'AI App',
  description: 'Built with AI SDK on Cloudflare',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
