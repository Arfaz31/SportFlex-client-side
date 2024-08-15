import * as React from "react";
import about from "@/assets/about.jpg";
import Container from "@/components/shared/Container";
import aboutUs from "@/assets/aboutUs.jpg";
import { Handshake } from "lucide-react";
import {
  FaFacebookF,
  FaInstagram,
  FaPeopleGroup,
  FaShieldHalved,
  FaSkype,
  FaSquareXTwitter,
  FaTruckFast,
} from "react-icons/fa6";

import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import v1 from "@/assets/about/v1.jpg";
import v2 from "@/assets/about/v3.jpg";
import v3 from "@/assets/about/v4.jpg";
import m1 from "@/assets/about/m1.jpg";
import m2 from "@/assets/about/m6.jpg";
import m3 from "@/assets/about/m7.jpg";
import team1 from "@/assets/teamMember/team-1.jpg";
import team2 from "@/assets/teamMember/team-2.jpg";
import team3 from "@/assets/teamMember/team-3.jpg";
import team5 from "@/assets/teamMember/team-5.jpg";
import team6 from "@/assets/teamMember/team-6.jpg";
import team8 from "@/assets/teamMember/team-8.jpg";
import us from "@/assets/teamMember/us3.jpg";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import XlClientReviews from "@/components/shared/ResponsiveClientReviews.tsx/XlClientReviews";
import MdClientReviews from "@/components/shared/ResponsiveClientReviews.tsx/MdClientReviews";
const About = () => {
  const plugin = React.useRef(
    Autoplay({ delay: 3000, stopOnInteraction: true })
  );
  const teamMemberData = [
    {
      id: 1,
      image: (className: string) => (
        <img src={team1} alt="team member" className={className} />
      ),

      name: "Anselm Hannemen",
      role: "Supervisor",
    },
    {
      id: 2,
      image: (className: string) => (
        <img src={team2} alt="team member" className={className} />
      ),

      name: "Emily Johnson",
      role: "Product Manager",
    },
    {
      id: 3,
      image: (className: string) => (
        <img src={team3} alt="team member" className={className} />
      ),

      name: "Sarah Williams",
      role: "Supervisor",
    },
    {
      id: 4,
      image: (className: string) => (
        <img src={team5} alt="team member" className={className} />
      ),

      name: "Sarah Williams",
      role: "Supervisor",
    },
    {
      id: 5,
      image: (className: string) => (
        <img src={team6} alt="team member" className={className} />
      ),

      name: "Sarah Williams",
      role: "Supervisor",
    },
    {
      id: 6,
      image: (className: string) => (
        <img src={team8} alt="team member" className={className} />
      ),

      name: "Sarah Williams",
      role: "Supervisor",
    },
  ];

  return (
    <div>
      <div className="relative">
        <img
          className="object-cover md:h-[500px] h-[400px] w-full"
          src={about}
          alt=""
        />
        <div className="bg-black opacity-45 md:h-[500px] h-[400px] w-full absolute top-0 z-1"></div>
        <div className="flex items-center gap-3 absolute md:top-64 top-48 xl:left-[40%] lg:left-[32%] md:left-[30%] left-[16%]">
          <span className="bg-[#00cde5] w-16 h-1"></span>
          <h1 className="lg:text-4xl text-2xl text-white font-bold ">
            ABOUT US
          </h1>
          <span className="bg-[#00cde5] w-16 h-1"></span>
        </div>
      </div>
      <Container className="md:mb-12 mb-0 lg:mt-24 mt-20 xl:px-0 px-6">
        <div className=" flex lg:flex-row flex-col xl:gap-24 lg:gap-20 gap-12 ">
          <div className=" relative lg:w-full md:w-[720px] sm:w-[400px] w-full mx-auto">
            <div className="bg-gradient-to-b from-[#00cde5] to-[#10798b] xl:h-[550px] xl:w-[500px] lg:h-[530px] lg:w-[420px] md:w-[450px] md:h-[450px] sm:w-[320px] sm:h-[320px] w-[280px] h-[280px] rounded-r-full rounded-b-full lg:mx-0 mx-auto"></div>

            <img
              className="xl:h-[550px] xl:w-[500px] lg:h-[530px] lg:w-[420px] md:w-[450px] md:h-[450px] sm:w-[320px] sm:h-[320px] w-[280px] h-[280px] object-cover rounded-r-full rounded-b-full absolute top-0 lg:left-8 md:left-[170px]  sm:left-16 left-12"
              src={aboutUs}
              alt=""
            />
          </div>

          <div className="xl:space-y-4 space-y-3">
            <div className="flex gap-3 items-center">
              <span className="bg-[#00cde5] w-2 xl:h-6 h-5"></span>
              <p className="xl:text-xl text-lg font-bold ">
                WELCOME TO SPORTFLEX
              </p>
            </div>
            <p className="xl:text-4xl lg:text-3xl text-2xl font-bold leading-none lg:w-[450px] w-full">
              We cover all the sports goods for you
            </p>
            <p className="md:text-base text-sm text-[#82828a] xl:pt-4 pt-3">
              SportFlex is your trusted sports gear destination in Banani,
              Dhaka. We offer top-quality equipment from leading global brands
              for athletes and fitness enthusiasts. Whether you’re into
              football, cricket, tennis, or fitness, our wide selection ensures
              you’ll find what you need to perform at your best.
              <br />
              Our knowledgeable team is here to provide expert advice and
              exceptional service, making every visit to SportFlex a positive
              experience. Elevate your game with SportFlex—where passion for
              sports meets quality gear.
            </p>

            <div className="flex  gap-4 pt-4 pb-7">
              <span className="inline-block bg-gradient-to-t from-[#00cde5] to-[#10798b] rounded-lg p-2 lg:w-16 lg:h-16 md:w-14 md:h-14 h:16 w-16">
                <Handshake className="text-white lg:w-12 lg:h-12 md:w-10 md:h-10 h-12 w-12 " />
              </span>
              <div>
                <p className="lg:text-xl text-lg font-bold">Stay with us</p>
                <p className="text-[#82828a] md:text-base text-sm">
                  We are always here to provide you best goods
                </p>
              </div>
            </div>

            <Link to={`/contact`}>
              <Button className="bg-gradient-to-r from-[#00cde5] to-[#10798b]  md:text-lg text-base  text-white   lg:w-[140px] w-[130px] lg:h-[55px] h-[50px]">
                Contact Us
              </Button>
            </Link>
          </div>
        </div>

        <div className="flex md:flex-row flex-col lg:gap-16 gap-10 lg:my-24 md:my-16 my-12">
          <div className="lg:pt-24  pt-10 md:w-[60%] w-full">
            <div className="flex gap-3 items-center">
              <span className="bg-[#00cde5] w-2 xl:h-8 lg:h-7 h-6"></span>
              <p className="xl:text-4xl lg:text-3xl text-2xl font-bold ">
                OUR VISION
              </p>
            </div>
            <p className="text-[#82828a] md:text-base text-sm pt-6">
              Our vision is to become the leading sports retailer in Bangladesh,
              known for our commitment to quality, customer satisfaction, and
              community engagement. We strive to foster a culture of passion for
              sports and fitness, helping individuals of all ages and abilities
              achieve their goals and live healthier, more active lives.
            </p>
          </div>
          <div className="flex lg:gap-4 gap-3">
            <img
              className="w-full  xl:h-[480px] lg:h-[420px] h-[350px]  object-cover  rounded-lg"
              src={v1}
              alt=""
            />
            <div className="grid grid-rows-2 lg:gap-4 gap-3">
              <img
                className="w-full  xl:h-[230px] lg:h-[200px] h-[165px]  object-cover rounded-lg"
                src={v2}
                alt=""
              />
              <img
                className="w-full xl:h-[230px] lg:h-[200px] h-[165px] object-cover rounded-lg"
                src={v3}
                alt=""
              />
            </div>
          </div>
        </div>

        <div className="flex md:flex-row flex-col lg:gap-16 gap-10 lg:my-24 md:my-20 my-20 ">
          <div className="flex gap-4">
            <div className="grid grid-rows-2 gap-4">
              <img
                className="w-full   xl:h-[230px] lg:h-[200px] h-[165px] object-cover rounded-lg"
                src={m2}
                alt=""
              />
              <img
                className="w-full  xl:h-[230px] lg:h-[200px] h-[165px] object-cover rounded-lg"
                src={m3}
                alt=""
              />
            </div>
            <img
              className="w-full xl:h-[480px] lg:h-[420px] h-[350px] object-cover  rounded-lg"
              src={m1}
              alt=""
            />
          </div>
          <div className="lg:pt-24 md:pt-10 pt-0 md:w-[60%] w-full">
            <div className="flex gap-3 items-center">
              <span className="bg-[#00cde5] w-2 xl:h-8 lg:h-7 h-6"></span>
              <p className="xl:text-4xl lg:text-3xl text-2xl font-bold ">
                OUR MISSION
              </p>
            </div>
            <p className="text-[#82828a] md:text-base text-sm pt-6">
              At SportFlex, our mission is to empower athletes and fitness
              enthusiasts with top-quality sports gear that enhances performance
              and inspires a healthy, active lifestyle. We are dedicated to
              providing exceptional service, expert advice, and the latest
              innovations in sports equipment, ensuring our customers have
              everything they need to excel in their pursuits.
            </p>
          </div>
        </div>

        <div>
          <h1 className="xl:text-4xl lg:text-3xl text-2xl font-bold text-center">
            Meet our best professional
          </h1>
          <div className="flex items-center gap-3 xl:w-[435px] lg:w-[350px] w-[285px] mx-auto md:mb-10 mb-4">
            <span className="bg-[#00cde5] xl:w-14 lg:w-10 w-8 h-2"></span>
            <h1 className="xl:text-4xl lg:text-3xl text-2xl font-bold text-center">
              Team Members
            </h1>
            <span className="bg-[#00cde5] xl:w-14 lg:w-10 w-8 h-2"></span>
          </div>

          <div>
            <Carousel
              opts={{
                align: "start",
              }}
              className="w-full "
              plugins={[plugin.current]}
              onMouseEnter={plugin.current.stop}
              onMouseLeave={plugin.current.reset}
            >
              <CarouselContent>
                {teamMemberData.map((member) => (
                  <CarouselItem
                    key={member.id}
                    className="md:basis-1/2 lg:basis-1/3"
                  >
                    <div className="p-1">
                      <Card className="border-none ">
                        <CardContent className="flex flex-col relative aspect-square items-center justify-center p-6">
                          <div>
                            {member.image(
                              "xl:w-[320px] xl:h-[362px] lg:w-[250px] lg:h-[284px] md:w-[305px] md:h-[345px] sm:w-[325px] sm:h-[385px] w-[272px] h-[330px]"
                            )}
                          </div>

                          <div className=" bg-white shadow-xl border-r-2  xl:w-[320px] xl:h-[120px] lg:w-[250px] lg:h-[110px] md:w-[305px] md:h-[120px] sm:w-[325px] sm:h-[120px]  w-[272px] h-[110px] border-[#00cde5]  border-b-2 relative">
                            <div className="absolute xl:bottom-[100px] lg:bottom-[90px] md:bottom-[100px] sm:bottom-[100px] bottom-[90px]  left-1/2 transform -translate-x-1/2 flex gap-5 items-center justify-center ">
                              <span className="inline-block bg-[#00cde5] rounded-full p-2 cursor-pointer hover:bg-[#10798b]">
                                <FaFacebookF className="text-white w-6 h-6" />
                              </span>
                              <span className="inline-block bg-[#00cde5] rounded-full p-2 cursor-pointer hover:bg-[#10798b]">
                                <FaInstagram className="text-white w-6 h-6" />
                              </span>
                              <span className="inline-block bg-[#00cde5] rounded-full p-2 cursor-pointer hover:bg-[#10798b]">
                                <FaSquareXTwitter className="text-white w-6 h-6" />
                              </span>
                              <span className="inline-block bg-[#00cde5] rounded-full p-2 cursor-pointer hover:bg-[#10798b]">
                                <FaSkype className="text-white w-6 h-6" />
                              </span>
                            </div>

                            <p className="xl:text-xl lg:text-lg font-bold text-center xl:pt-10 lg:pt-8 pt-10">
                              {member.name}
                            </p>
                            <p className="text-base text-center text-[#82828a]">
                              {member.role}
                            </p>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="absolute left-0 top-1/2 transform -translate-y-1/2 text-white bg-black bg-opacity-50 p-2 rounded-full cursor-pointer hover:bg-opacity-75 transition-opacity duration-300">
                &#9664;
              </CarouselPrevious>
              <CarouselNext className="absolute right-0 top-1/2  transform -translate-y-1/2 text-white bg-black bg-opacity-50 p-2 rounded-full cursor-pointer hover:bg-opacity-75 transition-opacity duration-300">
                &#9654;
              </CarouselNext>
            </Carousel>
          </div>
        </div>

        <div className="flex lg:flex-row flex-col xl:gap-24 lg:gap-6 gap-12 mt-24">
          <div>
            <div className="space-y-5">
              <div className="flex gap-3 items-center">
                <span className="bg-[#00cde5] w-2 h-5"></span>
                <p className="text-lg font-bold text-[#82828a]">
                  Why Choose Us
                </p>
              </div>
              <p className="xl:text-4xl lg:text-3xl text-2xl font-bold leading-none lg:w-[450px] w-full">
                We inspire & help our customers
              </p>
              <div className="flex items-center  gap-4 py-3">
                <span className="inline-block bg-gradient-to-t from-[#00cde5] to-[#10798b] rounded-lg p-2 ">
                  <FaTruckFast className="text-white w-14 h-14" />
                </span>
                <div>
                  <p className="text-lg font-bold">Shipping & Returns</p>
                  <p className="text-[#82828a] md:text-base text-sm">
                    Fast shipping, easy returns—shop confidently with SportFlex
                    for all your gear needs.
                  </p>
                </div>
              </div>
              <div className="flex items-center  gap-4 pb-3">
                <span className="inline-block bg-gradient-to-t from-[#00cde5] to-[#10798b] rounded-lg p-2 ">
                  <FaShieldHalved className="text-white w-14 h-14" />
                </span>
                <div>
                  <p className="text-lg font-bold">Secure Shopping</p>
                  <p className="text-[#82828a] md:text-base text-sm">
                    Shop confidently—SportFlex secures transactions and fully
                    protects your information.
                  </p>
                </div>
              </div>
              <div className="flex items-center  gap-4">
                <span className="inline-block bg-gradient-to-t from-[#00cde5] to-[#10798b] rounded-lg p-2 ">
                  <FaPeopleGroup className="text-white w-14 h-14" />
                </span>

                <div>
                  <p className="text-lg font-bold">Affiliates</p>
                  <p className="text-[#82828a] md:text-base text-sm">
                    Partner with SportFlex—join our affiliate program and earn
                    commissions promoting top gear.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="xl:mr-8 lg:mr-10 mr-0">
            <div className="relative lg:w-full md:w-[730px] sm:w-[400px] w-full mx-auto">
              <div className="bg-gradient-to-b from-[#10798b] to-[#00cde5] xl:h-[550px] xl:w-[585px] lg:h-[440px] lg:w-[420px] md:w-[450px] md:h-[450px] sm:w-[320px] sm:h-[320px] w-[280px] h-[280px] rounded-l-full rounded-b-full lg:mx-0 mx-auto"></div>

              <img
                className="xl:h-[550px] xl:w-[585px] lg:h-[440px] lg:w-[430px] md:w-[450px] md:h-[450px] sm:w-[320px] sm:h-[320px] w-[280px] h-[280px] object-cover rounded-l-full rounded-b-full absolute top-0 lg:left-8 md:left-28  sm:left-3 -left-1"
                src={us}
                alt=""
              />
            </div>
          </div>
        </div>
      </Container>
      <div className="mb-16">
        <div className="lg:block hidden">
          <XlClientReviews />
        </div>
        <div className="lg:hidden block">
          <MdClientReviews />
        </div>
      </div>
    </div>
  );
};

export default About;
