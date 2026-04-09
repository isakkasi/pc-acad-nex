import Breadcrumb from "@/components/Breadcrumb";
import OtherTrainings from "@/components/courses/OtherTrainings";
import NextLayout from "@/layouts/NextLayout";

const page = () => {
    return (
        <NextLayout>
            <Breadcrumb
                pageTitle="Online Trainings"
                crumbs={[
                    { label: "Courses", href: "/courses" },
                    { label: "Online Trainings" },
                ]}
            />
            <OtherTrainings />
        </NextLayout>
    );
};

export default page;