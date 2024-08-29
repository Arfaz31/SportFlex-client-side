import { useGetAllCatagoryQuery } from "@/redux/features/Catagory/CatagoryApi";
import { useAddProductPostMutation } from "@/redux/features/product/productApi";
import { TCatagory, TInputs } from "@/type/Type";
import { useForm, SubmitHandler } from "react-hook-form";
import { toast } from "sonner";

const AddProduct = () => {
  const [addProductPost, { error }] = useAddProductPostMutation();
  const { data: categoriesData } = useGetAllCatagoryQuery("");
  const {
    register,
    handleSubmit,
    setValue,
    reset,
    formState: { errors },
  } = useForm<TInputs>();
  const onSubmit: SubmitHandler<TInputs> = async (data) => {
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

    try {
      // Call the mutation and wait for it to complete
      await addProductPost(option).unwrap(); // .unwrap() returns a promise that resolves on success or rejects on error
      toast.success("Product is created successfully");
      reset();
    } catch (error) {
      toast.error("Failed to create product");
    }
  };
  if (error) {
    console.log(error);
  }
  return (
    <div>
      <div className=" p-5">
        <div className="bg-[#1a2c52]  rounded-md  p-2">
          <div className=" bg-[#14274e]  p-4 rounded-md w-full ">
            <div className=" h-[560px] w-full rounded-lg">
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
                              {...register("productName", {
                                required: "Product name is required",
                              })}
                              aria-invalid={
                                errors.productName ? "true" : "false"
                              }
                              className="border-b bg-transparent focus:outline-none w-full  h-12 px-10"
                            />
                            {errors.productName && (
                              <p className="text-red-500" role="alert">
                                {errors.productName.message}
                              </p>
                            )}
                          </div>
                          <div>
                            <input
                              type="text"
                              placeholder="Image"
                              {...register("image", {
                                required: "Image is required",
                              })}
                              aria-invalid={errors.image ? "true" : "false"}
                              className="border-b bg-transparent focus:outline-none w-full  h-12 px-10"
                            />
                            {errors.image && (
                              <p className="text-red-500" role="alert">
                                {errors.image.message}
                              </p>
                            )}
                          </div>
                        </div>

                        <div className="grid grid-cols-2 gap-10">
                          <div>
                            <select
                              {...register("category", {
                                required: "Category is required",
                              })}
                              aria-invalid={errors.category ? "true" : "false"}
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
                            {errors.category && (
                              <p className="text-red-500" role="alert">
                                {errors.category.message}
                              </p>
                            )}
                          </div>
                          <div>
                            <input
                              type="text"
                              placeholder="price"
                              {...register("price", {
                                required: "Price is required",
                              })}
                              aria-invalid={errors.price ? "true" : "false"}
                              className="border-b bg-transparent focus:outline-none w-full  h-12 px-10"
                            />
                            {errors.price && (
                              <p className="text-red-500" role="alert">
                                {errors.price.message}
                              </p>
                            )}
                          </div>
                        </div>

                        <div className="grid grid-cols-2 gap-10">
                          <div>
                            <input
                              type="text"
                              placeholder="Brand"
                              {...register("brand", {
                                required: "Brand is required",
                              })}
                              aria-invalid={errors.brand ? "true" : "false"}
                              className="border-b bg-transparent focus:outline-none w-full  h-12 px-10"
                            />
                            {errors.brand && (
                              <p className="text-red-500" role="alert">
                                {errors.brand.message}
                              </p>
                            )}
                          </div>
                          <div>
                            <input
                              type="text"
                              placeholder="Description"
                              {...register("description", {
                                required: "Description is required",
                              })}
                              aria-invalid={
                                errors.description ? "true" : "false"
                              }
                              className="border-b bg-transparent focus:outline-none w-full  h-12 px-10"
                            />
                            {errors.description && (
                              <p className="text-red-500" role="alert">
                                {errors.description.message}
                              </p>
                            )}
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
                              {...register("stockQuantity", {
                                required: "Stock-Quantity is required",
                              })}
                              aria-invalid={
                                errors.stockQuantity ? "true" : "false"
                              }
                              className="border-b bg-transparent focus:outline-none w-full  h-12 px-10"
                            />
                            {errors.stockQuantity && (
                              <p className="text-red-500" role="alert">
                                {errors.stockQuantity.message}
                              </p>
                            )}
                          </div>
                          <div>
                            <input
                              type="text"
                              placeholder="Availability"
                              {...register("availability", {
                                required: "Availability is required",
                              })}
                              aria-invalid={
                                errors.availability ? "true" : "false"
                              }
                              className="border-b bg-transparent focus:outline-none w-full  h-12 px-10"
                            />
                            {errors.availability && (
                              <p className="text-red-500" role="alert">
                                {errors.availability.message}
                              </p>
                            )}
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
