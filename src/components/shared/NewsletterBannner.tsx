import banner from "@/assets/newsBanner.jpg";
import Container from "./Container";
import { toast } from "sonner";
import { useState } from "react";
const NewsletterBannner = () => {
  const [email, setEmail] = useState("");

  const handleSubscribe = () => {
    if (email) {
      toast.success("Your email is subscribed");
      setEmail("");
    } else {
      toast.error("Please enter a valid email");
    }
  };
  return (
    <Container>
      <div className="relative mb-12">
        <img
          className="object-cover w-full xl:h-[500px] h-[450px] rounded-lg"
          src={banner}
          alt=""
        />
        <div className="bg-[#0a5e6d] opacity-55 absolute h-[450px] w-full top-0 lg:hidden block rounded-lg"></div>
        <div className="absolute lg:top-32 md:top-28 top-32 lg:left-[55%] md:left-[50%]  left-0 md:px-0 px-2 space-y-2 lg:w-[45%] md:w-[45%] w-full mx-auto">
          <p className=" xl:text-lg text-base   text-white lg:text-start text-center">
            Want to offer regularly ?
          </p>
          <p className="font-bold xl:text-3xl lg:text-2xl text-xl text-white tracking-wide lg:text-start text-center">
            Subscribe Our Newsletter <br /> for Get Daily Update
          </p>
          <div className="flex w-full max-w-sm items-center xl:pt-[18px] pt-[10px] md:mx-0 mx-auto">
            <input
              type="email"
              placeholder="Enter Your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="p-2 w-full border border-[#222] rounded-l focus:outline-none focus:border-[#1abfdc]"
            />

            <button
              className="bg-[#10798b] px-4 py-2 h-full text-white rounded-r border border-[#222] -ml-px"
              type="submit"
              onClick={handleSubscribe}
            >
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default NewsletterBannner;
