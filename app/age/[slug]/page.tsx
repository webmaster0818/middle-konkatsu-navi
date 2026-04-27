import type { Metadata } from "next";
import Link from "next/link";
import ageGuides from "../../../data/ages.json";
import agencies from "../../../data/agencies.json";
import SiteHeader from "../../components/SiteHeader";
import SiteFooter from "../../components/SiteFooter";
import Breadcrumb from "../../components/Breadcrumb";

export async function generateStaticParams() {
  return ageGuides.map((g) => ({ slug: g.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const guide = ageGuides.find((g) => g.slug === slug);
  if (!guide) return { title: "Not Found" };
  return {
    title: `${guide.title}｜ミドル世代婚活ナビ`,
    description: guide.overview.slice(0, 120) + "...",
  };
}

export default async function AgePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const guide = ageGuides.find((g) => g.slug === slug);

  if (!guide) {
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

  const rankedAgencyData = guide.rankedAgencies
    .map((s) => agencies.find((a) => a.slug === s))
    .filter(Boolean) as typeof agencies;

  const otherGuides = ageGuides.filter((g) => g.slug !== slug);

  return (
    <div className="flex flex-col min-h-screen">
      <SiteHeader />
      <Breadcrumb
        items={[
          { name: "年代別ランキング" },
          { name: guide.title },
        ]}
      />

      <main className="flex-1">
        {/* Hero */}
        <section className="bg-gradient-to-br from-purple-50 via-pink-50 to-purple-100 py-12 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block bg-primary text-white text-sm font-bold px-4 py-1.5 rounded-full mb-4">
              {guide.ageLabel}向け厳選ランキング
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4 leading-tight">
              {guide.title}
            </h1>
            <p className="text-muted leading-relaxed max-w-3xl mx-auto">{guide.overview}</p>
          </div>
        </section>

        <div className="max-w-4xl mx-auto px-4 py-10">
          {/* Ranking */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-foreground mb-6">
              {guide.ageLabel}おすすめ結婚相談所ランキング
            </h2>
            <div className="space-y-5">
              {rankedAgencyData.map((agency, i) => {
                const rankColors = ["bg-yellow-400", "bg-gray-400", "bg-amber-600", "bg-primary/70", "bg-primary/50"];
                return (
                  <div
                    key={agency.slug}
                    className="bg-surface rounded-2xl border border-border overflow-hidden shadow-sm hover:shadow-md transition-shadow"
                  >
                    <div className="flex items-stretch">
                      <div className={`${rankColors[i] ?? "bg-primary/30"} text-white font-bold text-xl w-16 flex items-center justify-center flex-shrink-0`}>
                        #{i + 1}
                      </div>
                      <div className="flex-1 p-5">
                        <div className="flex items-start justify-between gap-4 flex-wrap">
                          <div>
                            <div className="flex items-center gap-2 mb-1 flex-wrap">
                              <h3 className="text-xl font-bold text-foreground">{agency.name}</h3>
                              <span className="text-xs bg-accent/10 text-accent px-2 py-0.5 rounded-full">
                                {agency.type}
                              </span>
                            </div>
                            <p className="text-sm text-accent font-medium mb-2">{agency.tagline}</p>
                            <p className="text-sm text-muted leading-relaxed">{agency.description}</p>
                          </div>
                        </div>
                        <div className="mt-4 flex flex-wrap gap-4 text-sm">
                          <div>
                            <span className="text-muted">月会費</span>
                            <span className="ml-2 font-bold text-primary">
                              {agency.monthlyFee.toLocaleString("ja-JP")}円
                            </span>
                          </div>
                          <div>
                            <span className="text-muted">入会金</span>
                            <span className="ml-2 font-bold">
                              {agency.initialFee.toLocaleString("ja-JP")}円
                            </span>
                          </div>
                          <div>
                            <span className="text-muted">成婚料</span>
                            <span className="ml-2 font-bold">
                              {agency.successFee === 0 ? "0円" : `${agency.successFee.toLocaleString("ja-JP")}円`}
                            </span>
                          </div>
                        </div>
                        <div className="mt-4 flex flex-wrap gap-2 items-center justify-between">
                          <div className="flex flex-wrap gap-1">
                            {agency.features.slice(0, 3).map((f, fi) => (
                              <span key={fi} className="text-xs bg-purple-50 text-primary border border-purple-200 px-2 py-0.5 rounded">
                                {f}
                              </span>
                            ))}
                          </div>
                          <Link
                            href={`/agency/${agency.slug}/`}
                            className="bg-primary text-white text-sm font-bold px-5 py-2 rounded-lg hover:bg-primary-dark transition-colors flex-shrink-0"
                          >
                            詳細・口コミを見る
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </section>

          {/* Tips */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-foreground mb-5">
              {guide.ageLabel}の婚活を成功させるコツ
            </h2>
            <div className="bg-purple-50 rounded-2xl border border-purple-200 p-6">
              <ul className="space-y-3">
                {guide.tips.map((tip, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="w-6 h-6 bg-primary text-white rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">
                      {i + 1}
                    </span>
                    <span className="text-foreground leading-relaxed">{tip}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* FAQs */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-foreground mb-5">
              {guide.ageLabel}の婚活に関するよくある質問
            </h2>
            <div className="space-y-4">
              {guide.faqs.map((faq, i) => (
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

          {/* Other age guides */}
          {otherGuides.length > 0 && (
            <section>
              <h2 className="text-2xl font-bold text-foreground mb-5">他の年代のランキングも見る</h2>
              <div className="grid md:grid-cols-2 gap-4">
                {otherGuides.map((g) => (
                  <Link
                    key={g.slug}
                    href={`/age/${g.slug}/`}
                    className="bg-surface border border-border rounded-xl p-5 hover:border-primary hover:bg-purple-50 transition-all group"
                  >
                    <p className="text-xs text-primary font-medium mb-1">{g.ageLabel}向けランキング</p>
                    <p className="font-bold text-foreground group-hover:text-primary transition-colors leading-tight">
                      {g.title}
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
