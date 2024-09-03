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
import { toast } from "sonner";
import Lottie from "lottie-react";
import spinner from "@/assets/pIR8Sd9Ib1.json";
import { SubmitHandler, useForm } from "react-hook-form";
import { SquarePen } from "lucide-react";
import { useUpdateProductMutation } from "@/redux/api/product/productApi";
import { TProducts } from "@/type/Type";

type TpropId = {
  _id: string;
};

const UpdateProductModal = ({ _id }: TpropId) => {
  const [updateProduct, { isLoading, error }] = useUpdateProductMutation();
  const { register, handleSubmit, reset } = useForm<TProducts>();
  const onSubmit: SubmitHandler<TProducts> = async (data) => {
    const parseStringToArray = (str?: string) =>
      str?.split(",").map((item) => item.trim()) || [];

    const availability = (data.availability as unknown as string) === "true";
    //Using as unknown as an intermediate step avoids potential errors by allowing the first cast to a generic type (unknown), which can then safely be cast to string.

    const payload: Partial<TProducts> = {
      ...(data.productName && { productName: data.productName }),
      ...(data.description && { description: data.description }),
      ...(data.price && { price: Number(data.price) }),
      ...(data.discount && { discount: Number(data.discount) }),
      ...(data.stockQuantity && { stockQuantity: Number(data.stockQuantity) }),
      ...(data.size && {
        size: parseStringToArray(data.size as unknown as string),
      }),
      ...(data.availability !== undefined &&
        data.availability !== null && { availability }),
    };

    const options = {
      id: _id,
      data: payload,
    };
    console.log(options);
    try {
      const result = await updateProduct(options).unwrap();
      console.log(result);

      if (result) {
        toast.success("Product is updated successfully");
      }
    } catch (err) {
      toast.error("Failed to update product");
      console.log(err);
    } finally {
      reset();
    }
  };

  if (error) {
    console.log(error);
  }
  return (
    <div>
      <div>
        <Dialog>
          <DialogTrigger asChild>
            <button className="bg-blue-600 text-white p-1 rounded-lg">
              <SquarePen />
            </button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[450px]">
            <DialogHeader>
              <DialogTitle>Update Product</DialogTitle>
              <DialogDescription>
                Update your product here. Click save when you're done.
              </DialogDescription>
            </DialogHeader>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className=" space-y-4 py-4">
                <div className="flex flex-col  gap-2">
                  <label>Product Name</label>
                  <input
                    type="text"
                    placeholder="Product name"
                    {...register("productName")}
                    className={`w-full  h-12 pl-4 border border-[#00cde5]`}
                  />
                </div>
                <div className="flex flex-col  gap-2">
                  <label>Price</label>
                  <input
                    type="text"
                    placeholder="price"
                    {...register("price")}
                    className="w-full  h-12 pl-4 border border-[#00cde5]"
                  />
                </div>
                <div className="flex flex-col  gap-2">
                  <label>Description</label>
                  <input
                    type="text"
                    placeholder="Description"
                    {...register("description")}
                    className={`w-full  h-12 pl-4 border border-[#00cde5] form-control`}
                  />
                </div>
                <div className="flex items-center gap-3">
                  <div className="flex flex-col  gap-2 w-full">
                    <label>Size</label>
                    <input
                      type="text"
                      placeholder="Size"
                      {...register("size")}
                      className={`w-full  h-12 pl-4 border border-[#00cde5] form-control`}
                    />
                  </div>
                  <div className="flex flex-col  gap-2 w-full">
                    <label>Availability</label>

                    <select
                      {...register("availability")}
                      className={`w-full  h-12 pl-4 border border-[#00cde5] form-control`}
                    >
                      <option value="true">True</option>
                      <option value="false">False</option>
                    </select>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="flex flex-col  gap-2">
                    <label>Discount</label>
                    <input
                      type="text"
                      placeholder="Discount"
                      {...register("discount")}
                      className={`w-full  h-12 pl-4 border border-[#00cde5] form-control`}
                    />
                  </div>
                  <div className="flex flex-col  gap-2">
                    <label>Stock Quantity</label>
                    <input
                      type="text"
                      placeholder="Stock Quantity"
                      {...register("stockQuantity")}
                      className={`w-full  h-12 pl-4 border border-[#00cde5] form-control`}
                    />
                  </div>
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
  );
};

export default UpdateProductModal;
