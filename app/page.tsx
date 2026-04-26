import agencies from "../data/agencies.json";

export default function Home() {
  const top3 = agencies.filter((a) => a.rank <= 3);
  const remarriageAgencies = agencies.filter((a) =>
    a.recommended.includes("再婚")
  );

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <header className="bg-surface border-b border-border sticky top-0 z-50 shadow-sm">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-2xl" aria-hidden="true">
              💜
            </span>
            <h1 className="text-xl md:text-2xl font-bold text-primary">
              ミドル世代婚活ナビ
            </h1>
          </div>
          <nav className="hidden md:flex gap-6 text-sm font-medium text-muted">
            <a href="#ranking" className="hover:text-primary transition-colors">
              おすすめランキング
            </a>
            <a href="#price" className="hover:text-primary transition-colors">
              料金比較
            </a>
            <a
              href="#remarriage"
              className="hover:text-primary transition-colors"
            >
              再婚向け
            </a>
            <a href="#howto" className="hover:text-primary transition-colors">
              選び方
            </a>
            <a href="#faq" className="hover:text-primary transition-colors">
              FAQ
            </a>
          </nav>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero */}
        <section className="bg-gradient-to-br from-purple-50 via-pink-50 to-purple-100 py-16 md:py-24 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-accent font-medium text-sm md:text-base mb-4">
              40代・50代・再婚の方に特化した結婚相談所比較サイト
            </p>
            <h2 className="text-3xl md:text-5xl font-bold text-foreground leading-tight mb-6">
              40代・50代からの婚活、
              <br className="hidden md:block" />
              まだ間に合います。
            </h2>
            <p className="text-lg md:text-xl text-muted max-w-2xl mx-auto mb-8 leading-relaxed">
              「この年齢から始めて大丈夫だろうか」
              <br className="hidden md:block" />
              そんな不安を感じているあなたへ。
              <br />
              ミドル世代の婚活に精通した結婚相談所を、
              <br className="hidden md:block" />
              料金・サポート・実績から徹底比較しました。
            </p>
            <div className="flex flex-wrap justify-center gap-3 mb-10">
              <a
                href="#ranking"
                className="inline-block bg-primary text-white font-bold px-8 py-4 rounded-full text-lg hover:bg-primary-dark transition-colors shadow-lg hover:shadow-xl"
              >
                おすすめランキングを見る
              </a>
              <a
                href="#price"
                className="inline-block bg-surface text-primary font-bold px-8 py-4 rounded-full text-lg border-2 border-primary hover:bg-purple-50 transition-colors"
              >
                料金を比較する
              </a>
            </div>
          </div>
        </section>

        {/* Trust Badges */}
        <section className="py-10 bg-surface border-b border-border">
          <div className="max-w-5xl mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="flex items-center gap-4 bg-purple-50 rounded-2xl p-6">
                <span className="text-4xl" aria-hidden="true">
                  🏆
                </span>
                <div>
                  <p className="font-bold text-foreground text-lg">
                    厳選10社を比較
                  </p>
                  <p className="text-sm text-muted">
                    料金・サポート・実績を徹底調査
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-4 bg-pink-50 rounded-2xl p-6">
                <span className="text-4xl" aria-hidden="true">
                  🎯
                </span>
                <div>
                  <p className="font-bold text-foreground text-lg">
                    40代50代に特化
                  </p>
                  <p className="text-sm text-muted">
                    ミドル世代に合った相談所を厳選
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-4 bg-purple-50 rounded-2xl p-6">
                <span className="text-4xl" aria-hidden="true">
                  💕
                </span>
                <div>
                  <p className="font-bold text-foreground text-lg">
                    再婚・バツイチ対応
                  </p>
                  <p className="text-sm text-muted">
                    再婚に理解のある相談所を紹介
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Age-based Navigation */}
        <section className="py-12 px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">
              あなたの状況に合った相談所を探す
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <a
                href="#ranking"
                className="group block bg-surface rounded-2xl p-8 border-2 border-border hover:border-primary transition-all shadow-sm hover:shadow-md text-center"
              >
                <span
                  className="text-5xl block mb-4"
                  aria-hidden="true"
                >
                  🌸
                </span>
                <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                  40代の方向け
                </h3>
                <p className="text-sm text-muted">
                  初婚も再婚も。40代ならではの
                  <br />
                  婚活戦略と相談所選び
                </p>
              </a>
              <a
                href="#ranking"
                className="group block bg-surface rounded-2xl p-8 border-2 border-border hover:border-primary transition-all shadow-sm hover:shadow-md text-center"
              >
                <span
                  className="text-5xl block mb-4"
                  aria-hidden="true"
                >
                  🍂
                </span>
                <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                  50代の方向け
                </h3>
                <p className="text-sm text-muted">
                  人生のパートナーを見つける。
                  <br />
                  50代に強い相談所を厳選
                </p>
              </a>
              <a
                href="#remarriage"
                className="group block bg-surface rounded-2xl p-8 border-2 border-border hover:border-accent transition-all shadow-sm hover:shadow-md text-center"
              >
                <span
                  className="text-5xl block mb-4"
                  aria-hidden="true"
                >
                  🌈
                </span>
                <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-accent transition-colors">
                  再婚・バツイチの方向け
                </h3>
                <p className="text-sm text-muted">
                  理解のある相手と出会える。
                  <br />
                  再婚に強い相談所を紹介
                </p>
              </a>
            </div>
          </div>
        </section>

        {/* Top 3 Ranking */}
        <section id="ranking" className="py-16 px-4 bg-surface">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <p className="text-accent font-medium text-sm mb-2">
                2026年最新版
              </p>
              <h2 className="text-2xl md:text-3xl font-bold">
                40代50代におすすめの結婚相談所TOP3
              </h2>
              <p className="text-muted mt-3 max-w-xl mx-auto">
                ミドル世代の成婚実績・サポート体制・料金のバランスを総合的に評価しました
              </p>
            </div>

            <div className="space-y-8">
              {top3.map((agency, idx) => (
                <div
                  key={agency.id}
                  className={`rounded-2xl border-2 overflow-hidden shadow-md ${
                    idx === 0
                      ? "border-yellow-400 bg-gradient-to-r from-yellow-50 to-surface"
                      : idx === 1
                      ? "border-gray-300 bg-gradient-to-r from-gray-50 to-surface"
                      : "border-orange-300 bg-gradient-to-r from-orange-50 to-surface"
                  }`}
                >
                  <div className="p-6 md:p-8">
                    <div className="flex flex-col md:flex-row md:items-start gap-4 mb-4">
                      <div
                        className={`flex-shrink-0 w-14 h-14 rounded-full flex items-center justify-center text-white font-bold text-xl ${
                          idx === 0
                            ? "bg-yellow-500"
                            : idx === 1
                            ? "bg-gray-400"
                            : "bg-orange-400"
                        }`}
                      >
                        {idx + 1}位
                      </div>
                      <div className="flex-1">
                        <div className="flex flex-wrap items-center gap-3 mb-1">
                          <h3 className="text-2xl font-bold text-foreground">
                            {agency.name}
                          </h3>
                          <span className="inline-block bg-primary text-white text-xs font-bold px-3 py-1 rounded-full">
                            {agency.type}
                          </span>
                        </div>
                        <p className="text-accent font-medium text-sm mb-2">
                          {agency.tagline}
                        </p>
                        <p className="text-muted text-sm leading-relaxed mb-4">
                          {agency.description}
                        </p>

                        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-4">
                          <div className="bg-purple-50 rounded-xl p-3 text-center">
                            <p className="text-xs text-muted mb-1">入会金</p>
                            <p className="font-bold text-foreground">
                              {agency.initialFee.toLocaleString()}円
                            </p>
                          </div>
                          <div className="bg-purple-50 rounded-xl p-3 text-center">
                            <p className="text-xs text-muted mb-1">月会費</p>
                            <p className="font-bold text-foreground">
                              {agency.monthlyFee.toLocaleString()}円
                            </p>
                          </div>
                          <div className="bg-purple-50 rounded-xl p-3 text-center">
                            <p className="text-xs text-muted mb-1">成婚料</p>
                            <p className="font-bold text-foreground">
                              {agency.successFee === 0
                                ? "無料"
                                : `${agency.successFee.toLocaleString()}円`}
                            </p>
                          </div>
                          <div className="bg-pink-50 rounded-xl p-3 text-center">
                            <p className="text-xs text-muted mb-1">会員数</p>
                            <p className="font-bold text-foreground text-sm">
                              {agency.memberCount}
                            </p>
                          </div>
                        </div>

                        <div className="flex flex-wrap gap-2 mb-4">
                          {agency.features.map((f, i) => (
                            <span
                              key={i}
                              className="inline-block bg-purple-100 text-primary text-xs font-medium px-3 py-1 rounded-full"
                            >
                              {f}
                            </span>
                          ))}
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                          <div>
                            <p className="font-bold text-success mb-1">
                              良い点
                            </p>
                            <ul className="space-y-1">
                              {agency.pros.map((p, i) => (
                                <li key={i} className="flex items-start gap-2">
                                  <span className="text-success mt-0.5 flex-shrink-0">
                                    ✓
                                  </span>
                                  <span className="text-muted">{p}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                          <div>
                            <p className="font-bold text-warning mb-1">
                              注意点
                            </p>
                            <ul className="space-y-1">
                              {agency.cons.map((c, i) => (
                                <li key={i} className="flex items-start gap-2">
                                  <span className="text-warning mt-0.5 flex-shrink-0">
                                    △
                                  </span>
                                  <span className="text-muted">{c}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Price Comparison Table */}
        <section id="price" className="py-16 px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-2xl md:text-3xl font-bold">
                結婚相談所10社 料金比較表
              </h2>
              <p className="text-muted mt-3 max-w-xl mx-auto">
                入会金・月会費・成婚料・年間総額の目安を一覧で比較できます
              </p>
            </div>

            <div className="overflow-x-auto rounded-2xl border border-border shadow-md bg-surface">
              <table className="w-full min-w-[700px]">
                <thead>
                  <tr>
                    <th className="rounded-tl-2xl text-sm py-4">相談所名</th>
                    <th className="text-sm py-4">タイプ</th>
                    <th className="text-sm py-4">入会金</th>
                    <th className="text-sm py-4">月会費</th>
                    <th className="text-sm py-4">成婚料</th>
                    <th className="rounded-tr-2xl text-sm py-4">
                      年間総額目安
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {agencies.map((agency) => (
                    <tr key={agency.id} className="text-sm">
                      <td className="font-bold text-foreground whitespace-nowrap">
                        {agency.rank <= 3 && (
                          <span className="text-accent mr-1">
                            {agency.rank === 1
                              ? "🥇"
                              : agency.rank === 2
                              ? "🥈"
                              : "🥉"}
                          </span>
                        )}
                        {agency.name}
                      </td>
                      <td className="whitespace-nowrap">
                        <span className="inline-block bg-purple-100 text-primary text-xs px-2 py-0.5 rounded-full">
                          {agency.type}
                        </span>
                      </td>
                      <td className="whitespace-nowrap">
                        {agency.initialFee.toLocaleString()}円
                      </td>
                      <td className="whitespace-nowrap">
                        {agency.monthlyFee.toLocaleString()}円
                      </td>
                      <td className="whitespace-nowrap">
                        {agency.successFee === 0
                          ? "無料"
                          : `${agency.successFee.toLocaleString()}円`}
                      </td>
                      <td className="whitespace-nowrap font-bold text-primary">
                        {agency.annualEstimate.toLocaleString()}円
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-xs text-muted mt-4 text-center">
              ※料金は代表的なプランの目安です。実際の料金はプランや時期により異なります。年間総額は入会金+月会費12ヶ月分+成婚料で算出しています。最新情報は各社公式サイトをご確認ください。
            </p>
          </div>
        </section>

        {/* Remarriage Section */}
        <section id="remarriage" className="py-16 px-4 bg-surface">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-10">
              <p className="text-accent font-medium text-sm mb-2">
                再婚・バツイチの方へ
              </p>
              <h2 className="text-2xl md:text-3xl font-bold">
                再婚に理解のある結婚相談所
              </h2>
              <p className="text-muted mt-3 max-w-2xl mx-auto leading-relaxed">
                再婚をお考えの方にとって、理解のある環境で婚活を進められることはとても大切です。
                以下の相談所は、再婚やバツイチの方へのサポートに実績があります。
              </p>
            </div>

            <div className="bg-gradient-to-br from-pink-50 to-purple-50 rounded-2xl p-6 md:p-10 mb-8">
              <h3 className="text-xl font-bold text-foreground mb-4">
                再婚で結婚相談所を選ぶ際のポイント
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="text-accent font-bold flex-shrink-0 mt-0.5">
                    1.
                  </span>
                  <div>
                    <p className="font-bold text-foreground">
                      再婚への理解がある会員が多いか
                    </p>
                    <p className="text-sm text-muted">
                      会員層として再婚者や理解のある方が多い相談所を選びましょう
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent font-bold flex-shrink-0 mt-0.5">
                    2.
                  </span>
                  <div>
                    <p className="font-bold text-foreground">
                      子どもがいる場合のサポート体制
                    </p>
                    <p className="text-sm text-muted">
                      子連れ再婚への配慮や、相手への伝え方のアドバイスがあるか確認しましょう
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent font-bold flex-shrink-0 mt-0.5">
                    3.
                  </span>
                  <div>
                    <p className="font-bold text-foreground">
                      カウンセラーが再婚事情に詳しいか
                    </p>
                    <p className="text-sm text-muted">
                      離婚経験を踏まえた婚活アドバイスができるカウンセラーの存在は心強いです
                    </p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {remarriageAgencies.map((agency) => (
                <div
                  key={agency.id}
                  className="bg-surface border border-border rounded-2xl p-6 hover:shadow-md transition-shadow"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <h3 className="text-lg font-bold text-foreground">
                      {agency.name}
                    </h3>
                    <span className="inline-block bg-accent text-white text-xs px-2 py-0.5 rounded-full">
                      再婚対応
                    </span>
                  </div>
                  <p className="text-sm text-muted mb-3">
                    {agency.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {agency.features.slice(0, 3).map((f, i) => (
                      <span
                        key={i}
                        className="inline-block bg-pink-50 text-accent text-xs px-2 py-0.5 rounded-full"
                      >
                        {f}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How to Choose */}
        <section id="howto" className="py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-2xl md:text-3xl font-bold">
                ミドル世代の結婚相談所の選び方 5つのポイント
              </h2>
              <p className="text-muted mt-3 max-w-xl mx-auto">
                40代・50代で結婚相談所を選ぶ際に、特に重要なポイントをまとめました
              </p>
            </div>

            <div className="space-y-6">
              {[
                {
                  num: "01",
                  title: "同世代の会員が多い相談所を選ぶ",
                  desc: "40代・50代の会員割合が高い相談所なら、同世代との出会いが期待できます。若い会員が多い相談所では、どうしてもマッチングしにくくなる傾向があります。茜会のような中高年専門の相談所や、会員数が多い大手は同世代の出会いが見つかりやすいでしょう。",
                },
                {
                  num: "02",
                  title: "サポートの手厚さを重視する",
                  desc: "婚活の経験が少ない方や、久しぶりに異性と向き合う方には、専任カウンセラーや仲人がいる相談所がおすすめです。プロフィール作成のアドバイスから、お見合いの練習、交際中のフォローまで、心強いサポートが受けられます。",
                },
                {
                  num: "03",
                  title: "無理のない料金プランか確認する",
                  desc: "結婚相談所の費用は年間10万円台から80万円超までさまざまです。高ければ良いとは限りません。自分の予算に合ったプランがあるか、追加料金は発生しないかを事前に確認しましょう。まずは無料相談を活用するのがおすすめです。",
                },
                {
                  num: "04",
                  title: "自分のペースで活動できるか",
                  desc: "仕事や家庭の事情で婚活に充てられる時間は人それぞれ。オンライン対応があるか、活動の頻度やペースを調整できるかは大切なポイントです。無理なく続けられる環境が、良い出会いにつながります。",
                },
                {
                  num: "05",
                  title: "まずは無料相談で雰囲気を確かめる",
                  desc: "多くの結婚相談所は無料相談やカウンセリングを実施しています。実際に足を運び、カウンセラーとの相性や相談所の雰囲気を確認することが大切です。複数の相談所を比較してから決めることをおすすめします。",
                },
              ].map((point) => (
                <div
                  key={point.num}
                  className="bg-surface rounded-2xl border border-border p-6 md:p-8 flex gap-4 md:gap-6 shadow-sm"
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold text-lg">
                    {point.num}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-foreground mb-2">
                      {point.title}
                    </h3>
                    <p className="text-sm text-muted leading-relaxed">
                      {point.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* All 10 Agencies Overview */}
        <section className="py-16 px-4 bg-surface">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-2xl md:text-3xl font-bold">
                結婚相談所10社の詳細一覧
              </h2>
              <p className="text-muted mt-3 max-w-xl mx-auto">
                各社の特徴・料金・強みを詳しくまとめました
              </p>
            </div>

            <div className="space-y-6">
              {agencies.map((agency) => (
                <div
                  key={agency.id}
                  className="bg-background rounded-2xl border border-border p-6 md:p-8 shadow-sm"
                >
                  <div className="flex flex-wrap items-center gap-3 mb-3">
                    <span className="inline-block bg-primary text-white text-sm font-bold px-3 py-1 rounded-full">
                      第{agency.rank}位
                    </span>
                    <h3 className="text-xl font-bold text-foreground">
                      {agency.name}
                    </h3>
                    <span className="inline-block bg-purple-100 text-primary text-xs font-medium px-3 py-1 rounded-full">
                      {agency.type}
                    </span>
                    {agency.recommended.includes("再婚") && (
                      <span className="inline-block bg-pink-100 text-accent text-xs font-medium px-3 py-1 rounded-full">
                        再婚対応
                      </span>
                    )}
                  </div>
                  <p className="text-accent font-medium text-sm mb-2">
                    {agency.tagline}
                  </p>
                  <p className="text-sm text-muted mb-4 leading-relaxed">
                    {agency.description}
                  </p>

                  <div className="grid grid-cols-2 md:grid-cols-5 gap-3 mb-4">
                    <div className="bg-surface rounded-xl p-3 text-center border border-border">
                      <p className="text-xs text-muted mb-1">入会金</p>
                      <p className="font-bold text-sm">
                        {agency.initialFee.toLocaleString()}円
                      </p>
                    </div>
                    <div className="bg-surface rounded-xl p-3 text-center border border-border">
                      <p className="text-xs text-muted mb-1">月会費</p>
                      <p className="font-bold text-sm">
                        {agency.monthlyFee.toLocaleString()}円
                      </p>
                    </div>
                    <div className="bg-surface rounded-xl p-3 text-center border border-border">
                      <p className="text-xs text-muted mb-1">成婚料</p>
                      <p className="font-bold text-sm">
                        {agency.successFee === 0
                          ? "無料"
                          : `${agency.successFee.toLocaleString()}円`}
                      </p>
                    </div>
                    <div className="bg-surface rounded-xl p-3 text-center border border-border">
                      <p className="text-xs text-muted mb-1">年間目安</p>
                      <p className="font-bold text-sm text-primary">
                        {agency.annualEstimate.toLocaleString()}円
                      </p>
                    </div>
                    <div className="bg-surface rounded-xl p-3 text-center border border-border">
                      <p className="text-xs text-muted mb-1">会員数</p>
                      <p className="font-bold text-sm">{agency.memberCount}</p>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {agency.features.map((f, i) => (
                      <span
                        key={i}
                        className="inline-block bg-purple-50 text-primary text-xs px-3 py-1 rounded-full"
                      >
                        {f}
                      </span>
                    ))}
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                    <div>
                      <p className="font-bold text-success mb-1">良い点</p>
                      <ul className="space-y-1">
                        {agency.pros.map((p, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <span className="text-success mt-0.5 flex-shrink-0">
                              ✓
                            </span>
                            <span className="text-muted">{p}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <p className="font-bold text-warning mb-1">注意点</p>
                      <ul className="space-y-1">
                        {agency.cons.map((c, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <span className="text-warning mt-0.5 flex-shrink-0">
                              △
                            </span>
                            <span className="text-muted">{c}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <p className="text-xs text-muted mt-3">
                    対象年齢: {agency.ageRange}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-2xl md:text-3xl font-bold">
                よくある質問
              </h2>
              <p className="text-muted mt-3">
                40代・50代の婚活について、よく寄せられるご質問にお答えします
              </p>
            </div>

            <div className="space-y-4">
              {[
                {
                  q: "40代・50代からの婚活でも遅くありませんか？",
                  a: "決して遅くありません。実際に40代・50代で結婚相談所を通じて成婚される方は年々増えています。人生経験を重ねた今だからこそ、自分に合ったパートナーを見極められるという強みがあります。大切なのは「始める勇気」です。多くの結婚相談所が40代・50代向けのサポートを充実させており、同世代の出会いの場は確実に広がっています。",
                },
                {
                  q: "再婚・バツイチでも結婚相談所に入会できますか？",
                  a: "もちろん入会できます。現在の結婚相談所では、再婚希望の方やバツイチの方の入会は珍しくありません。むしろ、離婚経験があるからこそ「次こそは」という真剣な気持ちで活動される方が多く、成婚につながりやすいとも言われています。茜会やムスベル、サンマリエなど、再婚への理解が深い相談所も多数あります。",
                },
                {
                  q: "結婚相談所の費用はどれくらいかかりますか？",
                  a: "結婚相談所の費用は、年間で約10万円〜85万円と幅があります。オンライン型のnaco-do（年間約11万円）やエン婚活エージェント（年間約18万円）はリーズナブルです。一方、仲人型のムスベルやIBJメンバーズは年間60万円以上になりますが、その分サポートが手厚くなります。まずは無料相談で各社の料金を比較し、ご自身の予算に合ったプランを選ぶことをおすすめします。",
                },
                {
                  q: "仕事が忙しくても婚活はできますか？",
                  a: "はい、可能です。オンライン型の結婚相談所（naco-do、エン婚活エージェント等）なら、スマホやPCで空き時間に相手を探せます。対面型でも、土日祝のお見合い設定や、夜間のカウンセリング対応をしている相談所があります。大切なのは、無理のないペースで続けること。カウンセラーに仕事の状況を伝えれば、それに合わせた活動プランを提案してもらえます。",
                },
                {
                  q: "成婚までどれくらいの期間がかかりますか？",
                  a: "個人差はありますが、一般的に活動開始から成婚退会まで6ヶ月〜1年程度が目安です。ムスベルでは成婚者の70.7%が5ヶ月以内に成婚しているというデータもあります。40代・50代の場合、条件よりも人柄や価値観の相性を重視する傾向があり、お互いに真剣な分、マッチング後の交際がスムーズに進みやすいという声もあります。焦らず、しかし積極的に活動することが成婚への近道です。",
                },
              ].map((item, idx) => (
                <details
                  key={idx}
                  className="group bg-surface rounded-2xl border border-border shadow-sm"
                >
                  <summary className="cursor-pointer p-6 font-bold text-foreground flex items-center justify-between gap-4 list-none">
                    <span className="flex items-center gap-3">
                      <span className="flex-shrink-0 w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white text-sm font-bold">
                        Q
                      </span>
                      {item.q}
                    </span>
                    <span className="flex-shrink-0 text-primary text-xl transition-transform group-open:rotate-45">
                      +
                    </span>
                  </summary>
                  <div className="px-6 pb-6 pt-0">
                    <div className="pl-11">
                      <p className="text-sm text-muted leading-relaxed">
                        {item.a}
                      </p>
                    </div>
                  </div>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 px-4 bg-gradient-to-br from-purple-100 via-pink-50 to-purple-50">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              新しい出会いは、いつからでも始められます
            </h2>
            <p className="text-muted leading-relaxed mb-8 max-w-xl mx-auto">
              40代・50代だからこそ、人生経験を活かした素敵なパートナーシップが築けます。
              まずは気になる結婚相談所の無料相談から、一歩を踏み出してみませんか。
            </p>
            <a
              href="#ranking"
              className="inline-block bg-primary text-white font-bold px-10 py-4 rounded-full text-lg hover:bg-primary-dark transition-colors shadow-lg hover:shadow-xl"
            >
              おすすめランキングをもう一度見る
            </a>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-foreground text-white py-12 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <span className="text-xl" aria-hidden="true">
                  💜
                </span>
                <p className="font-bold text-lg">ミドル世代婚活ナビ</p>
              </div>
              <p className="text-sm text-gray-400 leading-relaxed">
                40代・50代・再婚の方に特化した
                <br />
                結婚相談所おすすめ比較サイト
              </p>
            </div>
            <div>
              <p className="font-bold mb-3">コンテンツ</p>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <a href="#ranking" className="hover:text-white transition-colors">
                    おすすめランキング
                  </a>
                </li>
                <li>
                  <a href="#price" className="hover:text-white transition-colors">
                    料金比較表
                  </a>
                </li>
                <li>
                  <a href="#remarriage" className="hover:text-white transition-colors">
                    再婚向け相談所
                  </a>
                </li>
                <li>
                  <a href="#howto" className="hover:text-white transition-colors">
                    選び方ガイド
                  </a>
                </li>
                <li>
                  <a href="#faq" className="hover:text-white transition-colors">
                    よくある質問
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <p className="font-bold mb-3">運営情報</p>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>運営: 株式会社MediaX</li>
                <li>所在地: 東京都渋谷区</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-700 pt-6">
            <p className="text-xs text-gray-500 text-center leading-relaxed">
              ※当サイトに掲載している情報は、各結婚相談所の公式サイトおよび公開情報に基づいています。
              料金・サービス内容は変更される場合がありますので、最新情報は各社公式サイトにてご確認ください。
              <br />
              ※当サイトにはアフィリエイトリンクが含まれる場合があります。
            </p>
            <p className="text-xs text-gray-500 text-center mt-4">
              &copy; 2026 ミドル世代婚活ナビ All rights reserved. 運営:
              株式会社MediaX
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
