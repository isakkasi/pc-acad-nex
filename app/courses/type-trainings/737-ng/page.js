import Breadcrumb from "@/components/Breadcrumb";
import TypeTrainingDetails from "@/components/courses/TypeTrainingDetails";
import NextLayout from "@/layouts/NextLayout";
import content from "@/data/content.json";

const training = content.typeTrainings.find((t) => t.id === 5);

const page = () => {
    return (
        <NextLayout>
            <Breadcrumb
                pageTitle={`${training.title} ${training.subtitle}`}
                crumbs={[
                    { label: "Courses", href: "/courses" },
                    { label: "Type Trainings", href: "/courses/type-trainings" },
                    { label: `${training.title} ${training.subtitle}` },
                ]}
            />
            <TypeTrainingDetails training={training} />
        </NextLayout>
    );
};

export default page;
