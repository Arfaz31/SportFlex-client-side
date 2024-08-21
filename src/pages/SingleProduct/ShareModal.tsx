import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import fb from "@/assets/icon/fb.png";
import insta from "@/assets/icon/insta.png";
import twitter from "@/assets/icon/twit.png";
import { useState } from "react";

const ShareModal = () => {
  const [copied, setCopied] = useState(false);
  const link = "https://shorter.me/d_d2r";

  const handleCopy = () => {
    navigator.clipboard.writeText(link);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000); // Reset after 2 seconds
  };
  return (
    <div>
      <Dialog>
        <DialogTrigger asChild>
          <p className="hover:text-[#00cde5] cursor-pointer">Share</p>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <p className="text-lg font-bold pb-2">Copy Link</p>

          <div className="flex gap-2 items-center justify-center pb-2">
            <input
              type="text"
              value={link}
              readOnly
              className="w-full border p-2 rounded "
            />

            <Button
              className="bg-gradient-to-r from-[#00cde5] to-[#10798b] text-white"
              onClick={handleCopy}
            >
              {copied ? "Copied" : "Copy"}
            </Button>
          </div>

          <div className="grid gap-2"></div>

          <p className="text-lg font-bold pb-1">Share</p>
          <div className="flex space-x-3 cursor-pointer">
            <img className="xl:w-8 w-6" src={fb} alt="Facebook" />
            <img className="xl:w-8 w-6" src={insta} alt="Instagram" />
            <img className="xl:w-8 w-6" src={twitter} alt="Twitter" />
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default ShareModal;
