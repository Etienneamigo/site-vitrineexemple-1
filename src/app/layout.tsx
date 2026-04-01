import type { Metadata } from "next";
import "./globals.css";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import SmoothScroll from "@/components/layout/SmoothScroll";

export const metadata: Metadata = {
  title: "ÉLUA — Movement Redefined | Premium Activewear",
  description:
    "Where precision meets grace. ÉLUA is a premium activewear brand designed for the modern silhouette. Discover our pilates collection — engineered for movement, crafted for elegance.",
  keywords: [
    "premium activewear",
    "pilates clothing",
    "luxury sportswear",
    "designer activewear",
    "ÉLUA",
    "movement",
    "wellness fashion",
  ],
  openGraph: {
    title: "ÉLUA — Movement Redefined",
    description:
      "Premium activewear designed for the modern silhouette. Engineered for movement, crafted for elegance.",
    type: "website",
    locale: "fr_FR",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body
        className="min-h-screen bg-brand-snow text-brand-ink antialiased"
        style={{ fontFamily: "'Inter', 'Helvetica Neue', Arial, sans-serif" }}
      >
        <SmoothScroll>
          <div className="noise" aria-hidden="true" />
          <Navigation />
          <main>{children}</main>
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}
