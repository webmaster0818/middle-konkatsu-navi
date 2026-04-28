import type { Metadata } from "next";
import Link from "next/link";
import compares from "../../../data/compares.json";
import agencies from "../../../data/agencies.json";
import SiteHeader from "../../components/SiteHeader";
import SiteFooter from "../../components/SiteFooter";
import Breadcrumb from "../../components/Breadcrumb";

export async function generateStaticParams() {
  return compares.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const compare = compares.find((c) => c.slug === slug);
  if (!compare) return { title: "Not Found" };
  return {
    title: `${compare.title}｜ミドル世代婚活ナビ`,
    description: compare.description,
  };
}

export default async function ComparePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const compare = compares.find((c) => c.slug === slug);

  if (!compare) {
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

  const otherCompares = compares.filter((c) => c.slug !== slug).slice(0, 4);
  const rankColors = ["bg-yellow-400", "bg-gray-400", "bg-amber-600", "bg-primary/70", "bg-primary/50"];

  return (
    <div className="flex flex-col min-h-screen">
      <SiteHeader />
      <Breadcrumb
        items={[
          { name: "比較ランキング", href: "/compare/" },
          { name: compare.title },
        ]}
      />

      <main className="flex-1">
        {/* Hero */}
        <section className="bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 py-12 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block bg-primary text-white text-sm font-bold px-4 py-1.5 rounded-full mb-4">
              {compare.comparisonLabel}
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4 leading-tight">
              {compare.title}
            </h1>
            <p className="text-muted leading-relaxed max-w-3xl mx-auto">{compare.description}</p>
          </div>
        </section>

        <div className="max-w-4xl mx-auto px-4 py-10">
          {/* Comparison table */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-foreground mb-5">比較表</h2>
            <div className="overflow-x-auto rounded-2xl border border-border shadow-sm">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-primary text-white">
                    <th className="px-4 py-3 text-left font-bold w-1/3">比較項目</th>
                    <th className="px-4 py-3 text-left font-bold">{compare.comparisonItems[0]?.itemA ?? "A"}</th>
                    <th className="px-4 py-3 text-left font-bold">{compare.comparisonItems[0]?.itemB ?? "B"}</th>
                  </tr>
                </thead>
                <tbody>
                  {compare.comparisonItems.map((item, i) => (
                    <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-purple-50/50"}>
                      <td className="px-4 py-3 font-medium text-foreground border-r border-border">{item.category}</td>
                      <td className="px-4 py-3 text-muted border-r border-border">{item.valueA}</td>
                      <td className="px-4 py-3 text-muted">{item.valueB}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* Ranked results */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-foreground mb-6">総合ランキング結果</h2>
            <div className="space-y-5">
              {compare.rankedResults.map((result, i) => {
                const agency = agencies.find((a) => a.slug === result.slug);
                return (
                  <div
                    key={result.rank}
                    className="bg-surface rounded-2xl border border-border overflow-hidden shadow-sm hover:shadow-md transition-shadow"
                  >
                    <div className="flex items-stretch">
                      <div className={`${rankColors[i] ?? "bg-primary/30"} text-white font-bold text-xl w-16 flex items-center justify-center flex-shrink-0`}>
                        #{result.rank}
                      </div>
                      <div className="flex-1 p-5">
                        <div className="flex items-start justify-between gap-4 flex-wrap mb-3">
                          <div>
                            <h3 className="text-xl font-bold text-foreground mb-1">{result.name}</h3>
                            <span className="text-xs bg-purple-100 text-primary border border-purple-200 px-2 py-0.5 rounded">
                              {result.bestFor}
                            </span>
                          </div>
                          {agency && (
                            <Link
                              href={`/agency/${agency.slug}/`}
                              className="bg-primary text-white text-sm font-bold px-5 py-2 rounded-lg hover:bg-primary-dark transition-colors flex-shrink-0"
                            >
                              詳細を見る
                            </Link>
                          )}
                        </div>
                        <p className="text-muted leading-relaxed text-sm">{result.verdict}</p>
                        {agency && (
                          <div className="mt-3 flex flex-wrap gap-4 text-sm">
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
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </section>

          {/* Additional sections */}
          {compare.sections.map((section, i) => (
            <section key={i} className="mb-10">
              <h2 className="text-2xl font-bold text-foreground mb-4">{section.heading}</h2>
              <p className="text-foreground leading-relaxed">{section.body}</p>
            </section>
          ))}

          {/* FAQs */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-foreground mb-5">よくある質問</h2>
            <div className="space-y-4">
              {compare.faqs.map((faq, i) => (
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

          {/* Other compares */}
          {otherCompares.length > 0 && (
            <section>
              <h2 className="text-2xl font-bold text-foreground mb-5">他の比較記事も見る</h2>
              <div className="grid md:grid-cols-2 gap-4">
                {otherCompares.map((c) => (
                  <Link
                    key={c.slug}
                    href={`/compare/${c.slug}/`}
                    className="bg-surface border border-border rounded-xl p-5 hover:border-primary hover:bg-purple-50 transition-all group"
                  >
                    <p className="text-xs text-primary font-medium mb-1">{c.comparisonLabel}</p>
                    <p className="font-bold text-foreground group-hover:text-primary transition-colors leading-tight">
                      {c.title}
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
