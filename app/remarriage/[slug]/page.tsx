import type { Metadata } from "next";
import Link from "next/link";
import remarriages from "../../../data/remarriages.json";
import agencies from "../../../data/agencies.json";
import SiteHeader from "../../components/SiteHeader";
import SiteFooter from "../../components/SiteFooter";
import Breadcrumb from "../../components/Breadcrumb";

export async function generateStaticParams() {
  return remarriages.map((r) => ({ slug: r.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const page = remarriages.find((r) => r.slug === slug);
  if (!page) return { title: "Not Found" };
  return {
    title: `${page.title}｜ミドル世代婚活ナビ`,
    description: page.description,
  };
}

export default async function RemarriagePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const page = remarriages.find((r) => r.slug === slug);

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
    .map((slug) => agencies.find((a) => a.slug === slug))
    .filter(Boolean) as typeof agencies;

  const otherPages = remarriages.filter((r) => r.slug !== slug);

  return (
    <div className="flex flex-col min-h-screen">
      <SiteHeader />
      <Breadcrumb
        items={[
          { name: "再婚・バツイチ特集", href: "/remarriage/recommended/" },
          { name: page.title },
        ]}
      />

      <main className="flex-1">
        {/* Hero */}
        <section className="bg-gradient-to-br from-pink-50 to-purple-50 py-12 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="inline-block bg-accent/10 text-accent text-sm font-medium px-3 py-1 rounded-full mb-4">
              再婚・バツイチ婚活
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4 leading-tight">
              {page.title}
            </h1>
            <p className="text-lg text-muted leading-relaxed max-w-3xl">{page.description}</p>
          </div>
        </section>

        <div className="max-w-4xl mx-auto px-4 py-10">
          {/* Sections */}
          {page.sections.map((section, i) => (
            <section key={i} className="mb-10">
              <h2 className="text-2xl font-bold text-foreground mb-4 flex items-center gap-2">
                <span className="w-8 h-8 bg-primary text-white rounded-lg flex items-center justify-center text-sm font-bold flex-shrink-0">
                  {i + 1}
                </span>
                {section.title}
              </h2>
              <div className="bg-surface rounded-2xl border border-border p-6">
                <p className="text-foreground leading-relaxed whitespace-pre-line">
                  {section.content}
                </p>
              </div>
            </section>
          ))}

          {/* Tips */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-foreground mb-5">
              成功のためのアドバイス
            </h2>
            <div className="bg-purple-50 rounded-2xl border border-purple-200 p-6">
              <ul className="space-y-3">
                {page.tips.map((tip, i) => (
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

          {/* Recommended Agencies */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-foreground mb-5">
              おすすめの結婚相談所
            </h2>
            <div className="space-y-4">
              {recommendedAgencyData.map((agency, i) => (
                <div
                  key={agency.slug}
                  className="bg-surface rounded-2xl border border-border p-5 flex items-start gap-4 hover:border-primary transition-colors"
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
                      <span className="text-foreground">
                        <span className="text-muted">月会費：</span>
                        <span className="font-bold text-primary">
                          {agency.monthlyFee.toLocaleString("ja-JP")}円
                        </span>
                      </span>
                      <span className="text-foreground">
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

          {/* Other remarriage pages */}
          {otherPages.length > 0 && (
            <section>
              <h2 className="text-2xl font-bold text-foreground mb-5">
                再婚・バツイチ婚活の関連記事
              </h2>
              <div className="grid md:grid-cols-2 gap-4">
                {otherPages.map((p) => (
                  <Link
                    key={p.slug}
                    href={`/remarriage/${p.slug}/`}
                    className="bg-surface border border-border rounded-xl p-5 hover:border-primary hover:bg-purple-50 transition-all group"
                  >
                    <p className="text-xs text-accent font-medium mb-1">再婚・バツイチ婚活</p>
                    <p className="font-bold text-foreground group-hover:text-primary transition-colors leading-tight">
                      {p.title}
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
