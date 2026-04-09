import { notFound } from "next/navigation";
import Breadcrumb from "@/components/Breadcrumb";
import NextLayout from "@/layouts/NextLayout";
import NewsDetails from "@/components/news/NewsDetails";
import content from "@/data/content.json";

export function generateStaticParams() {
    return content.news.filter((n) => n.slug).map((n) => ({ slug: n.slug }));
}

export function generateMetadata({ params }) {
    const article = content.news.find((n) => n.slug === params.slug);
    if (!article) return {};
    return {
        title: `${article.title} | ${content.site.name}`,
        description: article.excerpt || article.title,
    };
}

const page = ({ params }) => {
    const article = content.news.find((n) => n.slug === params.slug);
    if (!article) notFound();

    return (
        <NextLayout>
            <Breadcrumb
                pageTitle={article.title}
                crumbs={[
                    { label: "News", href: "/news" },
                    { label: article.title },
                ]}
            />
            <NewsDetails article={article} />
        </NextLayout>
    );
};

export default page;
