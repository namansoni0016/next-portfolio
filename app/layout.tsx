import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Naman Soni — Software Engineer",
  description: "Portfolio of Naman Soni, a software engineer building modern, scalable web experiences.",
};

export default function RootLayout(
  { children }: Readonly<{ children: React.ReactNode }>
) {
  return (
    <>
      <html lang="en">
        <body className="noise">
          {children}
        </body>
      </html>;
    </>
  );
}
