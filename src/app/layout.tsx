import "./globals.css";
import RefreshRedirect from '@/components/RefreshRedirect'

export const metadata = {
 title: "Suraj Kumar | Portfolio",
  description: "Portfolio...",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <RefreshRedirect />
        {children}
        </body>
    </html>
  );
}