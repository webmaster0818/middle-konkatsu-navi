import type { Metadata } from "next";
import Link from "next/link";
import strategies from "../../../data/strategies.json";
import agencies from "../../../data/agencies.json";
import SiteHeader from "../../components/SiteHeader";
import SiteFooter from "../../components/SiteFooter";
import Breadcrumb from "../../components/Breadcrumb";

export async function generateStaticParams() {
  return strategies.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const page = strategies.find((s) => s.slug === slug);
  if (!page) return { title: "Not Found" };
  return {
    title: `${page.title}｜ミドル世代婚活ナビ`,
    description: page.description,
  };
}

export default async function StrategyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const page = strategies.find((s) => s.slug === slug);

  if (!page) {
    return (
      <div className="flex flex-col min-h-screen">
        <SiteHeader />
        <main className="flex-1 flex items-center justify-center">
          <p className="text-muted">ページが見つかりませんでした。</p>
        </main>
        <SiteFooter />
      </div>
    );
  }

  const recommendedAgencyData = page.recommendedAgencies
    .map((s) => agencies.find((a) => a.slug === s))
    .filter(Boolean) as typeof agencies;

  const otherStrategies = strategies.filter((s) => s.slug !== slug);

  return (
    <div className="flex flex-col min-h-screen">
      <SiteHeader />
      <Breadcrumb
        items={[
          { name: "婚活戦略ガイド" },
          { name: page.title },
        ]}
      />

      <main className="flex-1">
        {/* Hero */}
        <section className="bg-gradient-to-br from-purple-50 to-pink-50 py-12 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="inline-block bg-primary/10 text-primary text-sm font-medium px-3 py-1 rounded-full mb-4">
              婚活戦略ガイド
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4 leading-tight">
              {page.title}
            </h1>
            <p className="text-lg text-muted leading-relaxed max-w-3xl">{page.description}</p>
          </div>
        </section>

        <div className="max-w-4xl mx-auto px-4 py-10">
          {/* Overview */}
          <section className="mb-10">
            <div className="bg-purple-50 rounded-2xl border border-purple-200 p-6">
              <h2 className="text-xl font-bold text-foreground mb-3">はじめに</h2>
              <p className="text-foreground leading-relaxed">{page.overview}</p>
            </div>
          </section>

          {/* Strategies */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-foreground mb-6">
              具体的な戦略・ポイント
            </h2>
            <div className="space-y-6">
              {page.strategies.map((strategy, i) => (
                <div key={i} className="bg-surface rounded-2xl border border-border p-6">
                  <div className="flex items-start gap-3 mb-3">
                    <div className="w-8 h-8 bg-primary text-white rounded-lg flex items-center justify-center text-sm font-bold flex-shrink-0">
                      {i + 1}
                    </div>
                    <h3 className="text-lg font-bold text-foreground leading-snug">
                      {strategy.title}
                    </h3>
                  </div>
                  <p className="text-foreground leading-relaxed ml-11 whitespace-pre-line">
                    {strategy.content}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Tips */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-foreground mb-5">
              実践的なアドバイス
            </h2>
            <div className="bg-pink-50 rounded-2xl border border-pink-200 p-6">
              <ul className="space-y-3">
                {page.tips.map((tip, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="text-accent font-bold flex-shrink-0 mt-0.5">◆</span>
                    <span className="text-foreground leading-relaxed">{tip}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* Recommended Agencies */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-foreground mb-5">
              この戦略に合うおすすめ結婚相談所
            </h2>
            <div className="space-y-4">
              {recommendedAgencyData.map((agency, i) => (
                <div
                  key={agency.slug}
                  className="bg-surface rounded-xl border border-border p-5 flex items-start gap-4 hover:border-primary transition-colors"
                >
                  <div className="bg-primary text-white font-bold text-base px-3 py-1.5 rounded-lg flex-shrink-0">
                    #{i + 1}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1 flex-wrap">
                      <h3 className="font-bold text-foreground text-lg">{agency.name}</h3>
                      <span className="text-xs bg-accent/10 text-accent px-2 py-0.5 rounded-full">
                        {agency.type}
                      </span>
                    </div>
                    <p className="text-sm text-muted mb-2">{agency.tagline}</p>
                    <div className="flex flex-wrap gap-3 text-sm">
                      <span>
                        <span className="text-muted">月会費：</span>
                        <span className="font-bold text-primary">
                          {agency.monthlyFee.toLocaleString("ja-JP")}円
                        </span>
                      </span>
                      <span>
                        <span className="text-muted">成婚料：</span>
                        <span className="font-bold">
                          {agency.successFee === 0 ? "0円" : `${agency.successFee.toLocaleString("ja-JP")}円`}
                        </span>
                      </span>
                    </div>
                  </div>
                  <Link
                    href={`/agency/${agency.slug}/`}
                    className="flex-shrink-0 bg-primary text-white text-sm font-medium px-4 py-2 rounded-lg hover:bg-primary-dark transition-colors"
                  >
                    詳細を見る
                  </Link>
                </div>
              ))}
            </div>
          </section>

          {/* FAQs */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-foreground mb-5">よくある質問</h2>
            <div className="space-y-4">
              {page.faqs.map((faq, i) => (
                <div key={i} className="bg-surface border border-border rounded-xl overflow-hidden">
                  <div className="bg-purple-50 px-5 py-4 font-medium text-foreground flex items-start gap-2">
                    <span className="text-primary font-bold flex-shrink-0">Q.</span>
                    <span>{faq.question}</span>
                  </div>
                  <div className="px-5 py-4 text-muted flex items-start gap-2">
                    <span className="text-accent font-bold flex-shrink-0">A.</span>
                    <span className="leading-relaxed">{faq.answer}</span>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Other strategies */}
          {otherStrategies.length > 0 && (
            <section>
              <h2 className="text-2xl font-bold text-foreground mb-5">
                他の婚活戦略ガイド
              </h2>
              <div className="grid md:grid-cols-2 gap-4">
                {otherStrategies.slice(0, 4).map((s) => (
                  <Link
                    key={s.slug}
                    href={`/strategy/${s.slug}/`}
                    className="bg-surface border border-border rounded-xl p-5 hover:border-primary hover:bg-purple-50 transition-all group"
                  >
                    <p className="text-xs text-primary font-medium mb-1">婚活戦略ガイド</p>
                    <p className="font-bold text-foreground group-hover:text-primary transition-colors leading-tight">
                      {s.title}
                    </p>
                  </Link>
                ))}
              </div>
            </section>
          )}
        </div>
      </main>

      <SiteFooter />
    </div>
  );
}
