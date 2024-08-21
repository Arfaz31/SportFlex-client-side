import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { SubmitHandler, useForm } from "react-hook-form";
import { toast } from "sonner";
type QusInput = {
  name: string;
  email: string;
  phone: string;
  message: string;
};
const AskQuestion = () => {
  const { register, handleSubmit, reset } = useForm<QusInput>();
  const onSubmit: SubmitHandler<QusInput> = async (data) => {
    try {
      console.log(data);

      if (data) {
        toast.success("Your message is submitted successfully");
      }
    } catch (err) {
      toast.error("Failed to send message");
      console.log(err);
    } finally {
      reset();
    }
  };

  return (
    <div>
      <Dialog>
        <DialogTrigger asChild>
          <p className="hover:text-[#00cde5] cursor-pointer">Ask A Question</p>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle className="text-xl font-bold">
              ASK A QUESTION
            </DialogTitle>
            <DialogDescription>
              Please enter the details of your request. A member of our support
              staff will respond as soon as possible.
            </DialogDescription>
          </DialogHeader>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="space-y-5 py-4">
              <input
                type="text"
                placeholder="Name"
                {...register("name", { required: true })}
                className="w-full h-12 pl-4 border border-[#00cde5]"
              />
              <input
                type="text"
                placeholder="Your Email"
                {...register("email", { required: true })}
                className="w-full h-12 pl-4 border border-[#00cde5]"
              />
              <input
                type="text"
                placeholder="Phone Number"
                {...register("phone", { required: true })}
                className="w-full h-12 pl-4 border border-[#00cde5]"
              />
              <textarea
                placeholder="Type Your Message Here"
                {...register("message", { required: true })}
                className="w-full h-32 pl-4 border border-[#00cde5] pt-2"
              />
            </div>
            <DialogFooter>
              <Button
                className="bg-gradient-to-r from-[#00cde5] to-[#10798b] text-white cursor-pointer flex items-center justify-center"
                type="submit"
              >
                Save changes
              </Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default AskQuestion;
