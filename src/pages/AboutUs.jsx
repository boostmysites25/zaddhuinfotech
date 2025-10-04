import banner from "../assets/videos/aboutus.mp4";
import CountUp from "react-countup";
import aboutUsImg from "../assets/images/about-us.png";
import SubHeading from "../components/common/SubHeading";
import { Link } from "react-router-dom";
import ourVisionImg from "../assets/images/our vision.png";
import ourMissionImg from "../assets/images/our mission.png";
import whyWeExistImg from "../assets/images/why we exist.png";
import OurCoreValues from "../components/website/OurCoreValues";
import { lazy } from "react";
import { FaArrowRightLong } from "react-icons/fa6";
const PageBanner = lazy(() => import("../components/website/PageBanner"));

const AboutUs = () => {
  return (
    <div className="mt-[4.5rem]">
      <PageBanner
        banner={banner}
        title="About Us"
        links={[{ title: "Home", url: "/" }, { title: "About Us" }]}
      />
      <section className="py-14 relative min-h-screen flex items-center bg-tertiary/40">
        <div className="wrapper grid lg:grid-cols-[40%_1fr] items-center gap-10 text-grayClr z-10 relative">
          <div data-aos="fade-up" className="flex justify-start">
            <img
              loading="lazy"
              src={aboutUsImg}
              className="object-contain sm:scale-110 w-full aspect-square max-h-[60vh] lg:aspect-auto"
              alt=""
            />
          </div>
          <div className="space-y-4">
            <SubHeading heading="Who We Are" className="text-white" />
            <h2 data-aos="fade-up" className="text1 capitalize">
              Your Trusted Partner in{" "}
              <span className="text-stroke-gray text-stroke-white">
                Digital Transformation
              </span>
            </h2>
            <p data-aos="fade-up" className="desc text-white/70">
              TechFlow Solutions is a leading technology company dedicated to
              transforming businesses through innovative digital solutions. We
              specialize in creating custom web applications, mobile apps, and
              AI-powered systems that drive growth and efficiency.
              <br />
              Our team of experienced developers and designers work closely with
              clients to understand their unique challenges and deliver solutions
              that exceed expectations. We believe in building long-term
              partnerships that help businesses thrive in the digital age.
              thrive in a constantly evolving digital world.
            </p>
            <div
              data-aos="fade-up"
              className="grid sm:grid-cols-2 gap-7 py-4 text-white/70"
            >
              <div className="flex items-center gap-2">
                <div className="w-[1rem] h-[1rem] rounded-full bg-white"></div>
                <p className="capitalize">Cutting-Edge Technology</p>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-[1rem] h-[1rem] rounded-full bg-white"></div>
                <p className="capitalize">Client-Focused Approach</p>
              </div>
            </div>
            <div
              data-aos="fade-up"
              className="grid sm:grid-cols-2 md:grid-cols-4 gap-7"
            >
              {[
                { number: 150, suffix: "+", title: "Projects Delivered" },
                { number: 100, suffix: "+", title: "Happy Clients" },
                { number: 5, suffix: "+", title: "Years Experience" },
                { number: 99, suffix: "%", title: "Client Satisfaction" },
              ].map((item) => (
                <div
                  key={item.title}
                  className="flex flex-col items-start text-center gap-2"
                >
                  <span className="text2">
                    <CountUp
                      end={item.number}
                      suffix={item.suffix}
                      enableScrollSpy
                      scrollSpyOnce
                      duration={2}
                    />
                  </span>
                  <p className="uppercase text-sm text-white/70">
                    {item.title}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section className="bg-[#F0F0F0] text-black">
        <div
          data-aos="fade-up"
          className="wrapper py-8 px-3 grid md:grid-cols-[45%_1fr] gap-7 md:gap-16"
        >
          <img
            loading="lazy"
            src={ourVisionImg}
            className="object-contain aspect-video h-full w-full rounded-md"
            alt=""
          />
          <div className="space-y-6">
            <SubHeading heading="Our Vision" className="text-primary" />
            <p className="desc">
              To be the leading technology partner that transforms businesses
              through innovative digital solutions. We envision a future where
              technology seamlessly integrates with business operations, creating
              opportunities for growth, efficiency, and success. Our goal is to
              empower every client with cutting-edge solutions that drive
              measurable results and sustainable competitive advantages.
            </p>
            <div>
              <Link
                to="/contact"
                className="btn-fullrounded flex items-center gap-2 bg-primary text-white hover:bg-primary/80 w-fit capitalize"
              >
                get in touch <FaArrowRightLong className="mt-[.15rem]" />
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section className="wrapper pt-14">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-7 md:gap-16">
          <div data-aos="fade-up" className="space-y-4">
            <h3 className="text2 text-primary">
              Our <br /> Mission
            </h3>
            <img
              loading="lazy"
              src={ourMissionImg}
              className="md:hidden block object-cover aspect-[6/4] h-fit w-full rounded-sm"
              alt="Our Vision"
            />
            <p className="desc !text-white">
              Our mission is to deliver exceptional technology solutions that
              drive business success and growth. We are committed to providing
              innovative web applications, mobile solutions, and AI-powered systems
              that help our clients achieve their goals. Through collaboration,
              expertise, and dedication to quality, we transform ideas into
              powerful digital assets that make a real difference in the
              marketplace. We believe in building lasting partnerships that
              support our clients' long-term success and growth.
              create enduring impact and lasting value for our clients and
              communities.
            </p>
          </div>
          <img
            loading="lazy"
            data-aos="fade-up"
            src={ourMissionImg}
            className="hidden md:block object-cover aspect-[6/4] h-full w-full rounded-xl"
            alt="Our Vision"
          />
        </div>
      </section>
      <OurCoreValues />
      <section className="pt-7 wrapper space-y-5">
        <div className="grid md:grid-cols-2 gap-7 md:gap-14">
          <div className="flex flex-col overflow-hidden rounded-xl">
            <img
              loading="lazy"
              src={whyWeExistImg}
              alt="Why we exist"
              className="aspect-[6/4] w-full object-cover h-full"
            />
          </div>
          <div className="space-y-3">
            <h2 className="text2 text-primary">Why We Exist</h2>
            <p className="desc">
              In today's rapidly evolving digital landscape, businesses need
              reliable technology partners who understand their unique challenges
              and can deliver solutions that drive real results. TechFlow Solutions
              exists to bridge the gap between innovative ideas and successful
              digital implementations. <br /> <br /> We provide comprehensive
              technology services including custom web development, mobile app
              creation, and AI-powered solutions that help businesses stay
              competitive and grow in the digital marketplace. Our expertise
              ensures that every project delivers measurable value and long-term
              success.
            </p>
          </div>
        </div>
        <p className="desc">
          Our commitment to quality, innovation, and client success makes us
          more than just a service provider. We are a strategic partner in your
          digital transformation journey, ensuring that you're always equipped
          to tackle the challenges of tomorrow. <br />
          Our Philosophy: We believe that technology should be a catalyst for
          growth, a bridge to new opportunities, and a foundation for sustainable
          success. With this in mind, we craft every solution with innovation,
          scalability, and performance at its core. Our approach ensures that
          businesses can embrace digital transformation confidently, knowing they
          have a reliable technology partner by their side.
        </p>
      </section>
    </div>
  );
};

export default AboutUs;
