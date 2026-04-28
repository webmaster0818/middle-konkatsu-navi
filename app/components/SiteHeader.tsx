"use client";

import { useState } from "react";
import Link from "next/link";

export default function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-surface border-b border-border sticky top-0 z-50 shadow-sm">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 no-underline">
          <span className="text-2xl" aria-hidden="true">💜</span>
          <span className="text-xl md:text-2xl font-bold text-primary">
            ミドル世代婚活ナビ
          </span>
        </Link>

        {/* PR Disclosure Badge */}
        <span className="hidden md:inline-block text-xs bg-yellow-50 border border-yellow-300 text-yellow-700 px-2 py-1 rounded font-medium ml-2">
          PRを含みます
        </span>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-5 text-sm font-medium text-muted items-center ml-auto">
          <Link href="/#ranking" className="hover:text-primary transition-colors">
            ランキング
          </Link>
          <Link href="/age/40s/" className="hover:text-primary transition-colors">
            40代
          </Link>
          <Link href="/age/50s/" className="hover:text-primary transition-colors">
            50代
          </Link>
          <Link href="/remarriage/recommended/" className="hover:text-primary transition-colors">
            再婚
          </Link>
          <Link href="/worry/too-late-40s/" className="hover:text-primary transition-colors">
            お悩み相談
          </Link>
          <Link href="/knowhow/profile-photo/" className="hover:text-primary transition-colors">
            婚活ノウハウ
          </Link>
          <Link href="/compare/musubel-vs-zwei/" className="hover:text-primary transition-colors">
            比較
          </Link>
          <Link href="/article/first-marriage-40s/" className="hover:text-primary transition-colors">
            コラム
          </Link>
        </nav>

        {/* Hamburger */}
        <button
          className="md:hidden p-2 rounded-lg hover:bg-purple-50 transition-colors ml-2"
          aria-label="メニューを開く"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? (
            <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-surface border-t border-border">
          <div className="px-4 py-2 flex items-center gap-2">
            <span className="text-xs bg-yellow-50 border border-yellow-300 text-yellow-700 px-2 py-1 rounded font-medium">
              PRを含みます
            </span>
          </div>
          <nav className="flex flex-col px-4 pb-4 gap-1">
            {[
              { href: "/#ranking", label: "おすすめランキング" },
              { href: "/age/40s/", label: "40代向けランキング" },
              { href: "/age/50s/", label: "50代向けランキング" },
              { href: "/age/60s/", label: "60代向けランキング" },
              { href: "/remarriage/recommended/", label: "再婚・バツイチ向け" },
              { href: "/strategy/men-40s/", label: "男性の婚活戦略" },
              { href: "/strategy/women-40s/", label: "女性の婚活戦略" },
              { href: "/worry/too-late-40s/", label: "お悩み相談" },
              { href: "/knowhow/profile-photo/", label: "婚活ノウハウ" },
              { href: "/compare/musubel-vs-zwei/", label: "比較ランキング" },
              { href: "/article/first-marriage-40s/", label: "コラム" },
              { href: "/#price", label: "料金比較" },
              { href: "/#faq", label: "よくある質問" },
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="py-2 px-3 rounded-lg text-foreground hover:bg-purple-50 hover:text-primary transition-colors font-medium"
                onClick={() => setMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
