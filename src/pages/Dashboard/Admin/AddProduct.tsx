import { useForm, SubmitHandler } from "react-hook-form";

enum CategoryEnum {
  Football = "Football",
  Basketball = "Basketball",
  Volleyball = "Volleyball",
  Shoes = "Shoes",
  Cricket = "Cricket",
  Badminton = "Badminton",
  Hockey = "Hockey",
  Rugby = "Rugby",
  Bike = "Bike",
  Bag = "Bag",
  WomenWear = "WomenWear",
  MenWear = "MenWear",
}

interface Inputs {
  productName: string;
  image: string;
  category: CategoryEnum;
  price: string;
  brand: string;
  description: string;
  stockQuantity: number;
  availability: boolean;
}

const AddProduct = () => {
  const { register, handleSubmit } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);
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
                              className="border-b bg-transparent focus:outline-none w-full  h-12 px-10 text-gray-400"
                            >
                              <option value="Football">Football</option>
                              <option value="Basketball">Basketball</option>
                              <option value="Volleyball">Volleyball</option>
                              <option value="Shoes">Shoes</option>
                              <option value="Cricket">Cricket</option>
                              <option value="Badminton">Badminton</option>
                              <option value="Hockey">Hockey</option>
                              <option value="Rugby">Rugby</option>
                              <option value="Bike">Bike</option>
                              <option value="Bag">Bag</option>
                              <option value="WomenWear">WomenWear</option>
                              <option value="MenWear">MenWear</option>
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
