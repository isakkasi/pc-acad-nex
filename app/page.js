import FunFactCounter from "@/components/FunFactCounter";
import Home from "@/components/home/Home";
import News from "@/components/home/News";
import Testimonial from "@/components/home/Testimonial";
import Pricing from "@/components/home/Pricing";
import NextLayout from "@/layouts/NextLayout";
import Link from "next/link";
import IncomingCourses from "@/components/courses/IncomingCourses";
import About from "@/components/home/About";
import PopularServices from "@/components/home/PopularServices";
import Cta from "@/components/Cta";
import CtaVideo from "@/components/home/CtaVideo";
import Team from "@/components/home/Team";
import Statistics from "@/components/home/Statistics";
import CaseStudy from "@/components/home/CaseStudy";
const page = () => {
  return (
    <NextLayout header={1}>
      <Home />
      
      {/* Service Section Start */}
      {/* <Service /> */}

      {/* About Section Start */}
      {/* <About /> */}

      {/* Service Section Start */}
      {/* <PopularServices /> */}

      {/* Cta Video Section Start */}
      {/* <CtaVideo /> */}

      {/* Team Section Start */}
      {/* <Team /> */}

      {/* Funfact Section Start */}
      {/* <Statistics /> */}

      {/* Popular Case Study Section Start */}
      {/* <CaseStudy /> */}

      {/* Pricing Section Start */}
      {/* <Pricing /> */}
      
      {/* Testimonial Section Start */}
      {/* <Testimonial /> */}
      
      {/* News Section Start */}
      {/* <News /> */}
    </NextLayout>
  );
};
export default page;
