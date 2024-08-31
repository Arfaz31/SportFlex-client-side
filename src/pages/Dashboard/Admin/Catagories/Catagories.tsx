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
import { useAddCatagoryMutation } from "@/redux/api/Catagory/CatagoryApi";

import { TCatagory } from "@/type/Type";
import { SubmitHandler, useForm } from "react-hook-form";
import { toast } from "sonner";
import Lottie from "lottie-react";
import spinner from "@/assets/pIR8Sd9Ib1.json";
import CatagoriesTable from "./CatagoriesTable";
const Catagories = () => {
  const [addCatagory, { error, isLoading }] = useAddCatagoryMutation();
  const { register, handleSubmit, reset } = useForm<TCatagory>();
  const onSubmit: SubmitHandler<TCatagory> = async (data) => {
    try {
      const result = await addCatagory(data).unwrap();
      console.log(result);

      if (result) {
        toast.success("Category is created successfully");
      }
    } catch (err) {
      toast.error("Failed to create category");
      console.log(err);
    } finally {
      reset();
    }
  };

  if (error) {
    console.log(error);
  }
  return (
    <div className="">
      <div className=" p-5  h-full overflow-auto">
        <div className="bg-[#1a2c52]  rounded-md  p-2 h-full">
          <div className=" bg-[#14274e]  p-4 rounded-md w-full h-full flex flex-col">
            <div className=" h-full w-full rounded-lg">
              <div className="border-b  h-[70px] flex justify-between items-center">
                <div>
                  <h1 className="xl:text-3xl text-2xl font-semibold">
                    Inventory Of Catagories
                  </h1>
                </div>
                <div className="pb-2">
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button className=" rounded-sm  text-white  text-xl   shadow-sm  duration-500 bg-gradient-to-r from-[#00cde5] to-[#10798b] ">
                        Create Catagory
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-[425px]">
                      <DialogHeader>
                        <DialogTitle>Create Product Catagory</DialogTitle>
                        <DialogDescription>
                          Make your catagory here. Click save when you're done.
                        </DialogDescription>
                      </DialogHeader>
                      <form onSubmit={handleSubmit(onSubmit)}>
                        <div className=" space-y-10 py-4">
                          <div className="flex flex-col  gap-2">
                            <label>Catagory Name</label>
                            <input
                              type="text"
                              placeholder="Catagory name"
                              {...register("catagoryName", { required: true })}
                              className={`w-full  h-12 pl-4 border border-[#00cde5]`}
                            />
                          </div>
                          <div className="flex flex-col  gap-2">
                            <label>Image</label>
                            <input
                              type="text"
                              placeholder="image"
                              {...register("image", { required: true })}
                              className="w-full  h-12 pl-4 border border-[#00cde5]"
                            />
                          </div>
                          <div className="flex flex-col  gap-2">
                            <label>Slug</label>
                            <input
                              type="text"
                              placeholder="slug"
                              {...register("slug", { required: true })}
                              className={`w-full  h-12 pl-4 border border-[#00cde5] form-control`}
                            />
                          </div>
                        </div>
                        <DialogFooter>
                          <Button
                            className={`${
                              isLoading
                                ? "bg-white border border-gray-500 w-32 h-14"
                                : "bg-gradient-to-r from-[#00cde5] to-[#10798b]"
                            } text-white cursor-pointer flex items-center justify-center`}
                            type="submit"
                          >
                            {isLoading ? (
                              <Lottie
                                animationData={spinner}
                                loop={true}
                                className="w-28 h-24"
                              />
                            ) : (
                              "Save changes"
                            )}
                          </Button>
                        </DialogFooter>
                      </form>
                    </DialogContent>
                  </Dialog>
                </div>
              </div>
              <div className="  mt-3 ">
                <div className="flex justify-between flex-col"></div>
                <div className="bg-white bg-opacity-10 border border-gray-300 border-t-0 border-opacity-10 w-full rounded-lg backdrop-blur-md shadow-2xl backdrop-filter  flex-1 overflow-auto ">
                  <div className="p-10 h-full">
                    <CatagoriesTable />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Catagories;
