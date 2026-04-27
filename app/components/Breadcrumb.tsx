import Link from "next/link";

interface BreadcrumbItem {
  name: string;
  href?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

export default function Breadcrumb({ items }: BreadcrumbProps) {
  const allItems = [{ name: "ホーム", href: "/" }, ...items];

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: allItems.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.href ? `https://middle-konkatsu-navi.com${item.href}` : undefined,
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
      <nav aria-label="パンくずリスト" className="py-3 px-4 bg-purple-50 border-b border-border">
        <div className="max-w-6xl mx-auto">
          <ol className="flex flex-wrap items-center gap-1 text-sm text-muted">
            {allItems.map((item, index) => (
              <li key={index} className="flex items-center gap-1">
                {index > 0 && (
                  <svg className="w-3 h-3 text-muted flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                )}
                {item.href && index < allItems.length - 1 ? (
                  <Link href={item.href} className="hover:text-primary transition-colors">
                    {item.name}
                  </Link>
                ) : (
                  <span className="text-foreground font-medium">{item.name}</span>
                )}
              </li>
            ))}
          </ol>
        </div>
      </nav>
    </>
  );
}
