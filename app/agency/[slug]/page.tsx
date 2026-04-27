import type { Metadata } from "next";
import Link from "next/link";
import agencies from "../../../data/agencies.json";
import SiteHeader from "../../components/SiteHeader";
import SiteFooter from "../../components/SiteFooter";
import Breadcrumb from "../../components/Breadcrumb";

export async function generateStaticParams() {
  return agencies.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const agency = agencies.find((a) => a.slug === slug);
  if (!agency) return { title: "Not Found" };
  return {
    title: `${agency.name}の評判・口コミ・料金【2026年最新】｜ミドル世代婚活ナビ`,
    description: `${agency.name}の料金・特徴・口コミを詳しく解説。${agency.description}`,
  };
}

export default async function AgencyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const agency = agencies.find((a) => a.slug === slug);

  if (!agency) {
    return (
      <div className="flex flex-col min-h-screen">
        <SiteHeader />
        <main className="flex-1 flex items-center justify-center">
          <p className="text-muted text-lg">相談所が見つかりませんでした。</p>
        </main>
        <SiteFooter />
      </div>
    );
  }

  const fmtCurrency = (n: number) =>
    n === 0 ? "0円" : `${n.toLocaleString("ja-JP")}円`;

  const otherAgencies = agencies
    .filter((a) => a.slug !== slug)
    .slice(0, 4);

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: agency.name,
    description: agency.description,
    url: agency.officialUrl,
  };

  return (
    <div className="flex flex-col min-h-screen">
      <SiteHeader />
      <Breadcrumb
        items={[
          { name: "結婚相談所一覧", href: "/#ranking" },
          { name: agency.name },
        ]}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />

      <main className="flex-1">
        {/* Hero */}
        <section className="bg-gradient-to-br from-purple-50 to-pink-50 py-12 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-start gap-4 mb-4">
              <div className="bg-primary text-white font-bold text-xl px-4 py-2 rounded-lg flex-shrink-0">
                #{agency.rank}
              </div>
              <div>
                <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
                  {agency.name}の評判・口コミ・料金
                </h1>
                <p className="text-lg text-accent font-medium">{agency.tagline}</p>
              </div>
            </div>
            <p className="text-muted leading-relaxed max-w-3xl">{agency.description}</p>
            <div className="mt-6 flex flex-wrap gap-2">
              {agency.recommended.map((tag) => (
                <span
                  key={tag}
                  className="inline-block bg-primary/10 text-primary text-sm font-medium px-3 py-1 rounded-full"
                >
                  {tag}向け
                </span>
              ))}
              <span className="inline-block bg-accent/10 text-accent text-sm font-medium px-3 py-1 rounded-full">
                {agency.type}
              </span>
            </div>
          </div>
        </section>

        <div className="max-w-4xl mx-auto px-4 py-10">
          {/* Key Stats */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-foreground mb-5">料金・費用の概要</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { label: "入会金", value: fmtCurrency(agency.initialFee) },
                { label: "月会費", value: fmtCurrency(agency.monthlyFee) },
                { label: "成婚料", value: fmtCurrency(agency.successFee) },
                { label: "年間費用目安", value: fmtCurrency(agency.annualEstimate) },
              ].map((item) => (
                <div
                  key={item.label}
                  className="bg-surface rounded-2xl border border-border p-5 text-center shadow-sm"
                >
                  <p className="text-xs text-muted font-medium mb-1">{item.label}</p>
                  <p className="text-lg font-bold text-primary">{item.value}</p>
                </div>
              ))}
            </div>
            <p className="text-xs text-muted mt-3">
              ※年間費用は概算です。プランや活動期間によって異なります。必ず公式サイトでご確認ください。
            </p>
          </section>

          {/* Details */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-foreground mb-5">基本情報</h2>
            <div className="bg-surface rounded-2xl border border-border overflow-hidden">
              <table className="w-full text-sm">
                <tbody>
                  {[
                    { label: "サービスタイプ", value: agency.type },
                    { label: "会員数", value: agency.memberCount },
                    { label: "対象年齢", value: agency.ageRange },
                    { label: "おすすめ対象", value: agency.recommended.join("・") + "の方" },
                  ].map((row) => (
                    <tr key={row.label}>
                      <td className="bg-purple-50 font-medium text-foreground w-1/3 px-4 py-3 border-b border-border">
                        {row.label}
                      </td>
                      <td className="px-4 py-3 border-b border-border text-foreground">
                        {row.value}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* Features */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-foreground mb-5">
              {agency.name}の特徴
            </h2>
            <ul className="space-y-3">
              {agency.features.map((feature, i) => (
                <li key={i} className="flex items-start gap-3 bg-surface rounded-xl border border-border p-4">
                  <span className="text-primary font-bold text-lg flex-shrink-0">✓</span>
                  <span className="text-foreground">{feature}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* Pros & Cons */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-foreground mb-5">メリット・デメリット</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-green-50 rounded-2xl border border-green-200 p-6">
                <h3 className="font-bold text-success mb-4 text-lg flex items-center gap-2">
                  <span>👍</span> メリット
                </h3>
                <ul className="space-y-2">
                  {agency.pros.map((pro, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-foreground">
                      <span className="text-success font-bold flex-shrink-0">◎</span>
                      {pro}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-red-50 rounded-2xl border border-red-200 p-6">
                <h3 className="font-bold text-red-600 mb-4 text-lg flex items-center gap-2">
                  <span>⚠️</span> デメリット・注意点
                </h3>
                <ul className="space-y-2">
                  {agency.cons.map((con, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-foreground">
                      <span className="text-red-500 font-bold flex-shrink-0">△</span>
                      {con}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          {/* Target Audience */}
          <section className="mb-10 bg-purple-50 rounded-2xl p-6 border border-purple-200">
            <h2 className="text-2xl font-bold text-foreground mb-4">
              {agency.name}はこんな方におすすめ
            </h2>
            <ul className="space-y-2">
              {agency.recommended.map((tag) => (
                <li key={tag} className="flex items-center gap-2 text-foreground">
                  <span className="text-primary">💜</span>
                  <span>{tag}で真剣に結婚を考えている方</span>
                </li>
              ))}
              <li className="flex items-center gap-2 text-foreground">
                <span className="text-primary">💜</span>
                <span>{agency.type}のサービスを希望する方</span>
              </li>
              <li className="flex items-center gap-2 text-foreground">
                <span className="text-primary">💜</span>
                <span>対象年齢：{agency.ageRange}</span>
              </li>
            </ul>
          </section>

          {/* FAQ */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-foreground mb-5">
              {agency.name}に関するよくある質問
            </h2>
            <div className="space-y-4">
              {[
                {
                  q: `${agency.name}の月会費はいくらですか？`,
                  a: `${agency.name}の月会費は${fmtCurrency(agency.monthlyFee)}です。入会金${fmtCurrency(agency.initialFee)}、成婚料${fmtCurrency(agency.successFee)}と合わせた年間費用の目安は${fmtCurrency(agency.annualEstimate)}となります（活動期間によって変動します）。`,
                },
                {
                  q: `${agency.name}は40代・50代でも利用できますか？`,
                  a: `はい、${agency.name}は${agency.ageRange}の方が対象です。ミドル世代の方にも対応しており、${agency.recommended.join("・")}の方の婚活をサポートしています。`,
                },
                {
                  q: `${agency.name}の特徴・強みは何ですか？`,
                  a: `${agency.name}の主な特徴は${agency.features.join("、")}などです。${agency.tagline}`,
                },
              ].map((faq, i) => (
                <div key={i} className="bg-surface border border-border rounded-xl overflow-hidden">
                  <div className="bg-purple-50 px-5 py-4 font-medium text-foreground flex items-start gap-2">
                    <span className="text-primary font-bold flex-shrink-0">Q.</span>
                    <span>{faq.q}</span>
                  </div>
                  <div className="px-5 py-4 text-muted flex items-start gap-2">
                    <span className="text-accent font-bold flex-shrink-0">A.</span>
                    <span>{faq.a}</span>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* CTA */}
          <section className="mb-10 bg-gradient-to-br from-primary to-purple-700 rounded-2xl p-8 text-center text-white">
            <h2 className="text-2xl font-bold mb-3">{agency.name}に無料相談してみる</h2>
            <p className="text-purple-200 mb-6 text-sm">
              まずは無料カウンセリングから。あなたの婚活をプロがサポートします。
            </p>
            <a
              href={agency.officialUrl}
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-block bg-white text-primary font-bold px-10 py-4 rounded-full text-lg hover:bg-purple-50 transition-colors shadow-lg"
            >
              {agency.name}の公式サイトを見る →
            </a>
            <p className="text-xs text-purple-300 mt-3">
              ※外部サイトへ移動します。本リンクはPRを含みます。
            </p>
          </section>

          {/* Other agencies */}
          <section>
            <h2 className="text-2xl font-bold text-foreground mb-5">他の結婚相談所と比較する</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {otherAgencies.map((a) => (
                <Link
                  key={a.slug}
                  href={`/agency/${a.slug}/`}
                  className="bg-surface border border-border rounded-xl p-4 hover:border-primary hover:bg-purple-50 transition-all text-center group"
                >
                  <p className="text-xs text-muted mb-1">#{a.rank}</p>
                  <p className="font-bold text-foreground group-hover:text-primary transition-colors text-sm">
                    {a.name}
                  </p>
                  <p className="text-xs text-muted mt-1">{a.type}</p>
                </Link>
              ))}
            </div>
            <div className="text-center mt-4">
              <Link
                href="/#ranking"
                className="text-primary hover:text-primary-dark font-medium text-sm"
              >
                全10社のランキングを見る →
              </Link>
            </div>
          </section>
        </div>
      </main>

      <SiteFooter />
    </div>
  );
}
