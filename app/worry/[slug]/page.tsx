import type { Metadata } from "next";
import Link from "next/link";
import worries from "../../../data/worries.json";
import agencies from "../../../data/agencies.json";
import SiteHeader from "../../components/SiteHeader";
import SiteFooter from "../../components/SiteFooter";
import Breadcrumb from "../../components/Breadcrumb";

export async function generateStaticParams() {
  return worries.map((w) => ({ slug: w.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const worry = worries.find((w) => w.slug === slug);
  if (!worry) return { title: "Not Found" };
  return {
    title: `${worry.title}｜ミドル世代婚活ナビ`,
    description: worry.description,
  };
}

export default async function WorryPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const worry = worries.find((w) => w.slug === slug);

  if (!worry) {
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

  const recommendedAgencyData = worry.recommendedAgencies
    .map((s) => agencies.find((a) => a.slug === s))
    .filter(Boolean) as typeof agencies;

  const otherWorries = worries.filter((w) => w.slug !== slug).slice(0, 4);

  return (
    <div className="flex flex-col min-h-screen">
      <SiteHeader />
      <Breadcrumb
        items={[
          { name: "お悩み相談", href: "/worry/" },
          { name: worry.title },
        ]}
      />

      <main className="flex-1">
        {/* Hero */}
        <section className="bg-gradient-to-br from-pink-50 via-purple-50 to-pink-100 py-12 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block bg-accent text-white text-sm font-bold px-4 py-1.5 rounded-full mb-4">
              {worry.heroLabel}
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4 leading-tight">
              {worry.title}
            </h1>
            <p className="text-muted leading-relaxed max-w-3xl mx-auto">{worry.description}</p>
          </div>
        </section>

        <div className="max-w-4xl mx-auto px-4 py-10">
          {/* Main sections */}
          <div className="space-y-8 mb-12">
            {worry.sections.map((section, i) => (
              <section key={i}>
                <h2 className="text-xl md:text-2xl font-bold text-foreground mb-4 flex items-start gap-2">
                  <span className="w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5">
                    {i + 1}
                  </span>
                  <span>{section.heading}</span>
                </h2>
                <p className="text-foreground leading-relaxed pl-10">{section.body}</p>
              </section>
            ))}
          </div>

          {/* Practical tips */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-foreground mb-5">具体的なアドバイス</h2>
            <div className="bg-purple-50 rounded-2xl border border-purple-200 p-6">
              <ul className="space-y-3">
                {worry.tips.map((tip, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="w-6 h-6 bg-primary text-white rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">
                      ✓
                    </span>
                    <span className="text-foreground leading-relaxed">{tip}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* Recommended agencies */}
          {recommendedAgencyData.length > 0 && (
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-foreground mb-6">
                この悩みを解決しやすいおすすめ結婚相談所
              </h2>
              <div className="space-y-4">
                {recommendedAgencyData.map((agency, i) => {
                  const rankColors = ["bg-yellow-400", "bg-gray-400", "bg-amber-600"];
                  return (
                    <div
                      key={agency.slug}
                      className="bg-surface rounded-2xl border border-border overflow-hidden shadow-sm hover:shadow-md transition-shadow"
                    >
                      <div className="flex items-stretch">
                        <div className={`${rankColors[i] ?? "bg-primary/30"} text-white font-bold text-xl w-14 flex items-center justify-center flex-shrink-0`}>
                          #{i + 1}
                        </div>
                        <div className="flex-1 p-5">
                          <div className="flex items-start justify-between gap-4 flex-wrap">
                            <div>
                              <h3 className="text-lg font-bold text-foreground mb-1">{agency.name}</h3>
                              <p className="text-sm text-accent font-medium mb-2">{agency.tagline}</p>
                              <p className="text-sm text-muted leading-relaxed">{agency.description}</p>
                            </div>
                          </div>
                          <div className="mt-4 flex flex-wrap gap-4 text-sm items-center justify-between">
                            <div className="flex flex-wrap gap-4">
                              <div>
                                <span className="text-muted">月会費</span>
                                <span className="ml-2 font-bold text-primary">
                                  {agency.monthlyFee.toLocaleString("ja-JP")}円
                                </span>
                              </div>
                              <div>
                                <span className="text-muted">成婚料</span>
                                <span className="ml-2 font-bold">
                                  {agency.successFee === 0 ? "0円" : `${agency.successFee.toLocaleString("ja-JP")}円`}
                                </span>
                              </div>
                            </div>
                            <Link
                              href={`/agency/${agency.slug}/`}
                              className="bg-primary text-white text-sm font-bold px-5 py-2 rounded-lg hover:bg-primary-dark transition-colors flex-shrink-0"
                            >
                              詳細を見る
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </section>
          )}

          {/* FAQs */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-foreground mb-5">よくある質問</h2>
            <div className="space-y-4">
              {worry.faqs.map((faq, i) => (
                <div key={i} className="bg-surface border border-border rounded-xl overflow-hidden">
                  <div className="bg-pink-50 px-5 py-4 font-medium text-foreground flex items-start gap-2">
                    <span className="text-accent font-bold flex-shrink-0">Q.</span>
                    <span>{faq.question}</span>
                  </div>
                  <div className="px-5 py-4 text-muted flex items-start gap-2">
                    <span className="text-primary font-bold flex-shrink-0">A.</span>
                    <span className="leading-relaxed">{faq.answer}</span>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Other worries */}
          {otherWorries.length > 0 && (
            <section>
              <h2 className="text-2xl font-bold text-foreground mb-5">他のお悩みを読む</h2>
              <div className="grid md:grid-cols-2 gap-4">
                {otherWorries.map((w) => (
                  <Link
                    key={w.slug}
                    href={`/worry/${w.slug}/`}
                    className="bg-surface border border-border rounded-xl p-5 hover:border-primary hover:bg-purple-50 transition-all group"
                  >
                    <p className="text-xs text-accent font-medium mb-1">{w.heroLabel}</p>
                    <p className="font-bold text-foreground group-hover:text-primary transition-colors leading-tight">
                      {w.title}
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
