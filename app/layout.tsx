import type { Metadata } from "next";
import { Noto_Sans_JP } from "next/font/google";
import "./globals.css";

const notoSansJP = Noto_Sans_JP({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
  preload: true,
  variable: "--font-noto-sans-jp",
});

export const metadata: Metadata = {
  title: "ミドル世代婚活ナビ｜40代50代・再婚向け結婚相談所おすすめ比較【2026年最新】",
  description:
    "40代・50代の婚活、再婚・バツイチの方に特化した結婚相談所おすすめ比較サイト。料金・成婚率・サポート体制を徹底比較し、あなたに合った結婚相談所選びをサポートします。",
  keywords:
    "結婚相談所,40代,50代,再婚,バツイチ,婚活,おすすめ,比較,ミドル世代,中高年",
  openGraph: {
    title: "ミドル世代婚活ナビ｜40代50代・再婚向け結婚相談所おすすめ比較",
    description:
      "40代・50代の婚活、再婚・バツイチの方に特化した結婚相談所比較サイト。",
    type: "website",
    locale: "ja_JP",
  },
  other: {
    "Cache-Control": "no-cache, no-store, must-revalidate",
    Pragma: "no-cache",
    Expires: "0",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" className={`${notoSansJP.variable} h-full antialiased`}>
      <head>
        <meta
          httpEquiv="Cache-Control"
          content="no-cache, no-store, must-revalidate"
        />
        <meta httpEquiv="Pragma" content="no-cache" />
        <meta httpEquiv="Expires" content="0" />
      </head>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
