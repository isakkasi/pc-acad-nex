import Breadcrumb from "@/components/Breadcrumb";
import Cta from "@/components/Cta";
import Faq from "@/components/Faq";
// import GrowBusiness from "@/components/GrowBusiness";
import Courses from "@/components/courses/Courses";
import NextLayout from "@/layouts/NextLayout";

const page = () => {
    return (
        <NextLayout>
            <Breadcrumb pageName="Courses" pageTitle="Courses & Trainings" />
            <Courses />
            <Cta />
            <Faq />
            {/* <GrowBusiness paddingTop={9} /> */}
        </NextLayout>
    );
};
export default page;
