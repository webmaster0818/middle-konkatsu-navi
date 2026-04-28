import type { Metadata } from "next";
import Link from "next/link";
import articles from "../../../data/articles.json";
import agencies from "../../../data/agencies.json";
import SiteHeader from "../../components/SiteHeader";
import SiteFooter from "../../components/SiteFooter";
import Breadcrumb from "../../components/Breadcrumb";

export async function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = articles.find((a) => a.slug === slug);
  if (!article) return { title: "Not Found" };
  return {
    title: `${article.title}｜ミドル世代婚活ナビ`,
    description: article.description,
  };
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = articles.find((a) => a.slug === slug);

  if (!article) {
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

  const recommendedAgencyData = article.recommendedAgencies
    .map((s) => agencies.find((a) => a.slug === s))
    .filter(Boolean) as typeof agencies;

  const otherArticles = articles.filter((a) => a.slug !== slug).slice(0, 4);

  return (
    <div className="flex flex-col min-h-screen">
      <SiteHeader />
      <Breadcrumb
        items={[
          { name: "コラム", href: "/article/" },
          { name: article.title },
        ]}
      />

      <main className="flex-1">
        {/* Hero */}
        <section className="bg-gradient-to-br from-purple-50 via-pink-50 to-purple-100 py-12 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block bg-primary text-white text-sm font-bold px-4 py-1.5 rounded-full mb-4">
              {article.categoryLabel}
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4 leading-tight">
              {article.title}
            </h1>
            <p className="text-muted leading-relaxed max-w-3xl mx-auto">{article.description}</p>
          </div>
        </section>

        <div className="max-w-4xl mx-auto px-4 py-10">
          {/* Table of contents */}
          {article.sections.length >= 3 && (
            <div className="bg-purple-50 border border-purple-200 rounded-2xl p-5 mb-10">
              <p className="font-bold text-foreground mb-3">この記事の内容</p>
              <ol className="space-y-1">
                {article.sections.map((section, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-primary">
                    <span className="flex-shrink-0 font-bold">{i + 1}.</span>
                    <span>{section.heading}</span>
                  </li>
                ))}
              </ol>
            </div>
          )}

          {/* Main sections */}
          <div className="space-y-10 mb-12">
            {article.sections.map((section, i) => (
              <section key={i} className="border-b border-border pb-8 last:border-none">
                <h2 className="text-xl md:text-2xl font-bold text-foreground mb-4">
                  <span className="text-primary mr-2">{i + 1}.</span>
                  {section.heading}
                </h2>
                <p className="text-foreground leading-relaxed">{section.body}</p>
              </section>
            ))}
          </div>

          {/* Tips */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-foreground mb-5">実践のポイント・まとめ</h2>
            <div className="bg-purple-50 rounded-2xl border border-purple-200 p-6">
              <ul className="space-y-3">
                {article.tips.map((tip, i) => (
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
              <h2 className="text-2xl font-bold text-foreground mb-6">おすすめ結婚相談所</h2>
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
                              <p className="text-sm text-accent font-medium mb-1">{agency.tagline}</p>
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
              {article.faqs.map((faq, i) => (
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

          {/* Other articles */}
          {otherArticles.length > 0 && (
            <section>
              <h2 className="text-2xl font-bold text-foreground mb-5">関連コラムも読む</h2>
              <div className="grid md:grid-cols-2 gap-4">
                {otherArticles.map((a) => (
                  <Link
                    key={a.slug}
                    href={`/article/${a.slug}/`}
                    className="bg-surface border border-border rounded-xl p-5 hover:border-primary hover:bg-purple-50 transition-all group"
                  >
                    <p className="text-xs text-primary font-medium mb-1">{a.categoryLabel}</p>
                    <p className="font-bold text-foreground group-hover:text-primary transition-colors leading-tight">
                      {a.title}
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
