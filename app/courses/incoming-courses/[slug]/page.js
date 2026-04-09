import Breadcrumb from "@/components/Breadcrumb";
import IncomingTrainingDetails from "@/components/courses/IncomingTrainingDetails";
import NextLayout from "@/layouts/NextLayout";
import content from "@/data/content.json";
import { notFound } from "next/navigation";

// Tells Next.js which slugs to pre-render at build time
export function generateStaticParams() {
    return content.incomingCourses
        .filter((course) => course.slug)
        .map((course) => ({ slug: course.slug }));
}

const page = async ({ params }) => {
    const { slug } = await params;
    const training = content.incomingCourses.find((c) => c.slug === slug);

    if (!training) notFound();

    const pageTitle = `${training.title} ${training.subtitle ?? ""}`.trim();

    return (
        <NextLayout>
            <Breadcrumb
                pageTitle={pageTitle}
                crumbs={[
                    { label: "Courses", href: "/courses" },
                    { label: "Incoming Courses", href: "/courses/incoming-courses" },
                    { label: pageTitle },
                ]}
            />
            <IncomingTrainingDetails training={training} />
        </NextLayout>
    );
};

export default page;
