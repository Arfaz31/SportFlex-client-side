import contact from "@/assets/contact.jpg";
import Container from "@/components/shared/Container";
import { Mail, MapPin, Phone } from "lucide-react";
import fb from "@/assets/icon/fb.png";
import insta from "@/assets/icon/insta.png";
import twitter from "@/assets/icon/twit.png";
import youtube from "@/assets/icon/tube.png";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import NewsletterBannner from "@/components/shared/NewsletterBannner";
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
        <div className="flex items-center gap-3 absolute md:top-64 top-48 xl:left-[40%] lg:left-[32%] md:left-[30%] sm:left-[15%] left-[8%]">
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
              <Input type="text" placeholder="Your First Name" />
              <Input type="text" placeholder="Your Last Name" />
            </div>
            <div className="flex gap-3 pb-6">
              <Input type="text" placeholder="Phone Number" />
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
        <div>
          <NewsletterBannner />
        </div>
      </Container>
    </div>
  );
};

export default Contact;
