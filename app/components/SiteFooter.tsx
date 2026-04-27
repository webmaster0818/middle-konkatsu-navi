import Link from "next/link";

export default function SiteFooter() {
  return (
    <footer className="bg-foreground text-white mt-16">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-3">
              <span className="text-2xl" aria-hidden="true">💜</span>
              <span className="text-lg font-bold text-white">ミドル世代婚活ナビ</span>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed">
              40代・50代・60代の婚活、再婚・バツイチの方に特化した結婚相談所比較サイトです。
            </p>
            <p className="text-xs text-yellow-400 mt-3 border border-yellow-700 rounded px-2 py-1 inline-block">
              ※ PRを含みます（景品表示法に基づく表示）
            </p>
          </div>

          {/* Age Rankings */}
          <div>
            <h3 className="text-sm font-bold text-white mb-3 border-b border-gray-700 pb-2">年代別ランキング</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><Link href="/age/40s/" className="hover:text-white transition-colors">40代向けおすすめ結婚相談所</Link></li>
              <li><Link href="/age/50s/" className="hover:text-white transition-colors">50代向けおすすめ結婚相談所</Link></li>
              <li><Link href="/age/60s/" className="hover:text-white transition-colors">60代向けおすすめ結婚相談所</Link></li>
            </ul>
          </div>

          {/* Remarriage */}
          <div>
            <h3 className="text-sm font-bold text-white mb-3 border-b border-gray-700 pb-2">再婚・バツイチ特集</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><Link href="/remarriage/recommended/" className="hover:text-white transition-colors">再婚向けおすすめ結婚相談所</Link></li>
              <li><Link href="/remarriage/reality/" className="hover:text-white transition-colors">バツイチ婚活の現実と成功のコツ</Link></li>
              <li><Link href="/remarriage/with-children/" className="hover:text-white transition-colors">子持ち再婚の進め方ガイド</Link></li>
              <li><Link href="/remarriage/introduce-partner/" className="hover:text-white transition-colors">子供へのパートナー紹介方法</Link></li>
              <li><Link href="/remarriage/single-parent/" className="hover:text-white transition-colors">シングルマザー・ファザーの婚活</Link></li>
            </ul>
          </div>

          {/* Strategy */}
          <div>
            <h3 className="text-sm font-bold text-white mb-3 border-b border-gray-700 pb-2">婚活戦略ガイド</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><Link href="/strategy/men-40s/" className="hover:text-white transition-colors">40代男性の婚活戦略</Link></li>
              <li><Link href="/strategy/women-40s/" className="hover:text-white transition-colors">40代女性の婚活戦略</Link></li>
              <li><Link href="/strategy/men-50s/" className="hover:text-white transition-colors">50代男性の婚活戦略</Link></li>
              <li><Link href="/strategy/women-50s/" className="hover:text-white transition-colors">50代女性の婚活戦略</Link></li>
              <li><Link href="/strategy/age-gap/" className="hover:text-white transition-colors">年の差婚のリアル</Link></li>
            </ul>
          </div>
        </div>

        {/* Agency Links */}
        <div className="border-t border-gray-700 pt-6 mb-6">
          <h3 className="text-sm font-bold text-white mb-3">結婚相談所 個別レビュー</h3>
          <div className="flex flex-wrap gap-3 text-sm text-gray-400">
            {[
              { slug: "musubell", name: "ムスベル" },
              { slug: "zwei", name: "ツヴァイ" },
              { slug: "onet", name: "オーネット" },
              { slug: "partner-agent", name: "パートナーエージェント" },
              { slug: "ibj-members", name: "IBJメンバーズ" },
              { slug: "naco-do", name: "naco-do" },
              { slug: "en-konkatsu", name: "エン婚活エージェント" },
              { slug: "sunmarie", name: "サンマリエ" },
              { slug: "akanekai", name: "茜会" },
              { slug: "fiore", name: "フィオーレ" },
            ].map((a) => (
              <Link key={a.slug} href={`/agency/${a.slug}/`} className="hover:text-white transition-colors">
                {a.name}
              </Link>
            ))}
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-gray-700 pt-6 flex flex-col md:flex-row justify-between items-center gap-3 text-sm text-gray-500">
          <p>© 2026 ミドル世代婚活ナビ. All rights reserved.</p>
          <div className="flex gap-4">
            <span className="text-gray-500">プライバシーポリシー</span>
            <span className="text-gray-500">免責事項</span>
            <span className="text-gray-500">お問い合わせ</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
