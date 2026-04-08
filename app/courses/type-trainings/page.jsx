import Breadcrumb from "@/components/Breadcrumb";
import TypeTrainings from "@/components/courses/TypeTrainings";
import NextLayout from "@/layouts/NextLayout";



const page = () => {
    return (
        <NextLayout>
            <Breadcrumb
                pageTitle="Type Trainings"
                crumbs={[
                    { label: "Courses", href: "/courses" },
                    { label: "Type Trainings" },
                ]}
            />
            <TypeTrainings />
        </NextLayout>
    );
};

export default page;