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

const page = ({ params }) => {
    const training = content.incomingCourses.find((c) => c.slug === params.slug);

    if (!training) notFound();

    return (
        <NextLayout>
            <Breadcrumb
                pageTitle={`${training.title} ${training.subtitle ?? ""}`.trim()}
                crumbs={[
                    { label: "Courses", href: "/courses" },
                    { label: "Incoming Courses", href: "/courses/incoming-courses" },
                    { label: `${training.title} ${training.subtitle ?? ""}`.trim() },
                ]}
            />
            <IncomingTrainingDetails training={training} />
        </NextLayout>
    );
};

export default page;
