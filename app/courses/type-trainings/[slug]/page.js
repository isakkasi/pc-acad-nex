import Breadcrumb from "@/components/Breadcrumb";
import TypeTrainingDetails from "@/components/courses/TypeTrainingDetails";
import NextLayout from "@/layouts/NextLayout";
import content from "@/data/content.json";
import { notFound } from "next/navigation";

export function generateStaticParams() {
    return content.typeTrainings
        .filter((course) => course.slug)
        .map((course) => ({ slug: course.slug }));
}

const page = ({ params }) => {
    const training = content.typeTrainings.find((c) => c.slug === params.slug);

    if (!training) notFound();

    const pageTitle = `${training.title} ${training.subtitle ?? ""}`.trim();

    return (
        <NextLayout>
            <Breadcrumb
                pageTitle={pageTitle}
                crumbs={[
                    { label: "Courses", href: "/courses" },
                    { label: "Type Trainings", href: "/courses/type-trainings" },
                    { label: pageTitle },
                ]}
            />
            <TypeTrainingDetails training={training} />
        </NextLayout>
    );
};

export default page;
