import Breadcrumb from "@/components/Breadcrumb";
// import TypeTrainingCard from "@/components/courses/TypeTrainingCard";
import NextLayout from "@/layouts/NextLayout";
import content from "@/data/content.json";
import TypeTrainingDetails from "@/components/courses/TypeTrainingDetails";

const training = content.typeTrainings.find((t) => t.id === 1);

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
