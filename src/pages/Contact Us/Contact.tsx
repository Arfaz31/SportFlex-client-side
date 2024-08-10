import contact from "@/assets/contact/contact3.jpg";
import Container from "@/components/shared/Container";
import { Mail, MapPin, Phone } from "lucide-react";
import fb from "@/assets/icon/fb.png";
import insta from "@/assets/icon/insta.png";
import twitter from "@/assets/icon/twit.png";
import youtube from "@/assets/icon/tube.png";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import banner from "@/assets/newsBanner.jpg";
const Contact = () => {
  return (
    <div>
      <div className="relative">
        <img
          className="object-cover md:h-[500px] h-[400px] w-full"
          src={contact}
          alt=""
        />
        <div className="bg-black opacity-45 md:h-[500px] h-[400px] w-full absolute top-0 z-1"></div>
        <div className="flex items-center gap-3 absolute md:top-64 top-48 xl:left-[40%] lg:left-[32%] md:left-[30%] left-[15%]">
          <span className="bg-[#00cde5] w-16 h-1"></span>
          <h1 className="lg:text-4xl text-2xl text-white font-bold ">
            CONTACT US
          </h1>
          <span className="bg-[#00cde5] w-16 h-1"></span>
        </div>
      </div>
      <Container className="px-6">
        <h1 className="xl:text-4xl lg:text-3xl text-2xl font-semibold mt-20 mb-4">
          Get In Touch
        </h1>
        <p className="text-base text-gray-500 lg:w-[60%] w-full mb-10">
          Whether you have a question, want to collaborate, or just want to say
          hi, we’d love to hear from you! Fill out the form below or reach out
          to us directly via email or phone.
        </p>
        <div className="grid lg:grid-cols-12 grid-rows-12 gap-8">
          <div className="bg-[#f5f5f5] lg:col-span-5 row-span-12 h-[400px] rounded-lg lg:p-14 p-10 space-y-1">
            <h2 className="text-xl font-semibold">Office Location</h2>
            <div className="flex space-x-2 text-base  pt-1 pb-4">
              <MapPin className="text-[#00cde5] h-6" />
              <p>No. 808 Belly Road, Dhaka, Bangladesh</p>
            </div>
            <h2 className="text-xl font-semibold">Phone No.</h2>
            <div className="flex space-x-2 text-base  pt-1 pb-4">
              <Phone className="text-[#00cde5] h-6" />
              <p>+880 1799-370138</p>
            </div>
            <h2 className="text-xl font-semibold">Email Address</h2>
            <div className="flex space-x-2 text-base pt-1 pb-4">
              <Mail className="text-[#00cde5] h-6" />
              <p>sportFlex@gmail.com</p>
            </div>
            <div className=" ">
              <h2 className="text-xl font-semibold">Follow Us</h2>
              <div className="flex space-x-3 cursor-pointer pt-1">
                <img className="xl:w-8 w-6" src={fb} alt="" />
                <img className="xl:w-8 w-6" src={insta} alt="" />
                <img className="xl:w-8 w-6" src={twitter} alt="" />
                <img className="xl:w-8 w-6" src={youtube} alt="" />
              </div>
            </div>
          </div>

          <div className="bg-white lg:col-span-7 row-span-12 shadow-2xl rounded-xl px-8 lg:pt-14 pt-6">
            <div className="flex gap-3 pb-6">
              <Input type="name" placeholder="Your First Name" />
              <Input type="name" placeholder="Your Last Name" />
            </div>
            <div className="flex gap-3 pb-6">
              <Input type="number" placeholder="Phone Number" />
              <Input type="email" placeholder="Email" />
            </div>
            <Textarea placeholder="Type your message here." />

            <Button className="  bg-gradient-to-r from-[#00cde5] to-[#10798b] text-base  text-white   w-[180px] h-[50px] font-semibold mt-8">
              Submit Now
            </Button>
          </div>
        </div>
        <div className="my-24">
          <div className="w-[100%]">
            <iframe
              className="w-full h-[600px] border-0 overflow-hidden m-0 p-0"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3650.6985228863114!2d90.40277637479328!3d23.793747587111838!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c70e61a8b299%3A0xabe4416ff6cd0e74!2s38%20Kemal%20Ataturk%20Ave%2C%20Dhaka%201213!5e0!3m2!1sen!2sbd!4v1723193964592!5m2!1sen!2sbd"
            >
              <a href="https://www.gps.ie/">gps devices</a>
            </iframe>
          </div>
        </div>
        <div className="relative mb-12">
          <img
            className="object-cover w-full xl:h-[500px] h-[450px] rounded-lg"
            src={banner}
            alt=""
          />
          <div className="bg-black opacity-50 absolute h-[450px] w-full top-0 lg:hidden block rounded-lg"></div>
          <div className="absolute lg:top-32 md:top-28 top-32 lg:left-[60%] md:left-[40%] left-[5%] space-y-2">
            <p className=" xl:text-lg text-base   text-white lg:text-start text-center">
              Want to offer regularly ?
            </p>
            <p className="font-bold xl:text-3xl lg:text-2xl text-xl text-white tracking-wide lg:text-start text-center">
              Subscribe Our Newsletter <br /> for Get Daily Update
            </p>
            <div className="flex w-full max-w-sm items-center xl:pt-[18px] pt-[10px]">
              <input
                type="email"
                placeholder="Enter Your Email"
                className="p-2 w-full border border-[#222] rounded-l focus:outline-none  focus:border-[#1abfdc]"
              />
              <button
                className="bg-[#10798b] px-4 py-2 h-full text-white rounded-r border border-[#222] -ml-px"
                type="submit"
              >
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Contact;
