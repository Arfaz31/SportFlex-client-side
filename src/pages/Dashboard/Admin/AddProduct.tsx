import { useGetAllCatagoryQuery } from "@/redux/features/Catagory/CatagoryApi";
import { useAddProductPostMutation } from "@/redux/features/product/productApi";
import { TCatagory, TInputs } from "@/type/Type";
import { useForm, SubmitHandler } from "react-hook-form";
import { toast } from "sonner";

const AddProduct = () => {
  const [addProductPost, { error, isSuccess }] = useAddProductPostMutation();
  const { data: categoriesData } = useGetAllCatagoryQuery("");
  const { register, handleSubmit, setValue, reset } = useForm<TInputs>();
  const onSubmit: SubmitHandler<TInputs> = (data) => {
    // Parse image, size, and color fields from comma-separated strings to arrays
    const parseStringToArray = (str?: string) =>
      str?.split(",").map((item) => item.trim()) || [];

    const option = {
      ...data,
      price: Number(data.price),
      discount: Number(data.discount),
      image: parseStringToArray(data.image as unknown as string),
      size: parseStringToArray(data.size as unknown as string),
      color: parseStringToArray(data.color as unknown as string),
      stockQuantity: Number(data.stockQuantity),
      availability: Boolean(data.availability),
      category: data.category,
    };

    addProductPost(option);
    if (isSuccess) {
      toast.success("Product is created successfylly");
    } else {
      console.log(error);
    }
    reset();
  };
  if (error) {
    console.log(error);
  }
  return (
    <div>
      <div className=" p-5">
        <div className="bg-[#1a2c52]  rounded-md  p-2">
          <div className=" bg-[#14274e]  p-4 rounded-md w-full ">
            <div className=" h-[470px] w-full rounded-lg">
              <div className="border-b h-[50px] ">
                <h1 className="xl:text-3xl text-2xl font-semibold">
                  Create Product Here
                </h1>
              </div>
              <div className="relative  mt-3 ">
                <div className="flex justify-between flex-col"></div>
                <div className="bg-white bg-opacity-10 border border-gray-300 border-t-0 border-opacity-10 w-full rounded-lg backdrop-blur-md shadow-2xl backdrop-filter  absolute top-0 z-10 ">
                  <div className="p-10">
                    <form onSubmit={handleSubmit(onSubmit)}>
                      <div>
                        <div className="grid grid-cols-2 gap-10">
                          <div>
                            <input
                              type="text"
                              placeholder="Product name"
                              {...register("productName", { required: true })}
                              className="border-b bg-transparent focus:outline-none w-full  h-12 px-10"
                            />
                          </div>
                          <div>
                            <input
                              type="text"
                              placeholder="Image"
                              {...register("image", { required: true })}
                              className="border-b bg-transparent focus:outline-none w-full  h-12 px-10"
                            />
                          </div>
                        </div>

                        <div className="grid grid-cols-2 gap-10">
                          <div>
                            <select
                              {...register("category", { required: true })}
                              className="border-b bg-transparent focus:outline-none w-full h-12 px-10 text-gray-400"
                              onChange={(e) =>
                                setValue("category", e.target.value)
                              } // Directly update the form value
                            >
                              {categoriesData?.data?.map(
                                (category: TCatagory) => (
                                  <option
                                    key={category._id}
                                    value={category.catagoryName}
                                  >
                                    {category.catagoryName}
                                  </option>
                                )
                              )}
                            </select>
                          </div>
                          <div>
                            <input
                              type="text"
                              placeholder="price"
                              {...register("price", { required: true })}
                              className="border-b bg-transparent focus:outline-none w-full  h-12 px-10"
                            />
                          </div>
                        </div>

                        <div className="grid grid-cols-2 gap-10">
                          <div>
                            <input
                              type="text"
                              placeholder="Brand"
                              {...register("brand", { required: true })}
                              className="border-b bg-transparent focus:outline-none w-full  h-12 px-10"
                            />
                          </div>
                          <div>
                            <input
                              type="text"
                              placeholder="Description"
                              {...register("description", { required: true })}
                              className="border-b bg-transparent focus:outline-none w-full  h-12 px-10"
                            />
                          </div>
                        </div>

                        <div className="grid grid-cols-2 gap-10">
                          <div>
                            <input
                              type="text"
                              placeholder="Color"
                              {...register("color")}
                              className="border-b bg-transparent focus:outline-none w-full  h-12 px-10"
                            />
                          </div>
                          <div>
                            <input
                              type="text"
                              placeholder="Size"
                              {...register("size")}
                              className="border-b bg-transparent focus:outline-none w-full  h-12 px-10"
                            />
                          </div>
                        </div>

                        <div className="grid grid-cols-2 gap-10">
                          <div>
                            <input
                              type="number"
                              placeholder="Discount"
                              {...register("discount")}
                              className="border-b bg-transparent focus:outline-none w-full  h-12 px-10"
                            />
                          </div>
                          <div>
                            <input
                              type="text"
                              placeholder="Discount Ending Date"
                              {...register("discountEndingTime")}
                              className="border-b bg-transparent focus:outline-none w-full  h-12 px-10"
                            />
                          </div>
                        </div>

                        <div className="grid grid-cols-2 gap-10">
                          <div>
                            <input
                              type="number"
                              placeholder="Quantity"
                              {...register("stockQuantity", { required: true })}
                              className="border-b bg-transparent focus:outline-none w-full  h-12 px-10"
                            />
                          </div>
                          <div>
                            <input
                              type="text"
                              placeholder="Availability"
                              {...register("availability", { required: true })}
                              className="border-b bg-transparent focus:outline-none w-full  h-12 px-10"
                            />
                          </div>
                        </div>
                      </div>
                      <button
                        type="submit"
                        className="w-full h-14 border rounded-sm mt-10 text-white  text-xl  flex justify-center items-center gap-2 shadow-sm hover:-translate-y-2 duration-500 hover:bg-gradient-to-r from-[#00cde5] to-[#10798b] hover:border-none"
                      >
                        Create Product
                      </button>
                    </form>
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

export default AddProduct;
