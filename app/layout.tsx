import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Naman Soni — Full Stack Developer",
  description: "Portfolio of Naman Soni, a full stack developer building modern, scalable web experiences.",
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
