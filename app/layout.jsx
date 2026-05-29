import "./globals.css";
import Providers from "@/components/providers/Providers";

export const metadata = {
  title: "Portfolio",
  description: "My personal portfolio website showcasing my skills and projects.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="overflow-x-clip dark:bg-primary-dark font-figtree">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
