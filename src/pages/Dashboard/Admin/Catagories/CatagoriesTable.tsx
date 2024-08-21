import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useGetAllCatagoryQuery } from "@/redux/features/Catagory/CatagoryApi";
import { TCatagory } from "@/type/Type";
import { Trash2 } from "lucide-react";
import Lottie from "lottie-react";
import spinner from "@/assets/pIR8Sd9Ib1.json";

const CatagoriesTable = () => {
  const { data, isLoading } = useGetAllCatagoryQuery("");

  const handleDelete = (id: string) => {
    console.log(id);
  };

  return (
    <div className="overflow-x-auto">
      <Table className="p-4 rounded-md w-full ">
        <TableHeader>
          <TableRow>
            <TableHead className="text-white font-bold text-lg">
              Image
            </TableHead>
            <TableHead className="text-white font-bold text-lg">Slug</TableHead>
            <TableHead className="text-white font-bold text-lg">
              Category Name
            </TableHead>
            <TableHead className="text-white font-bold text-lg">
              Delete
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {isLoading ? (
            <TableRow>
              <TableCell colSpan={5}>
                <div className="flex items-center justify-center h-[500px] w-full">
                  <Lottie animationData={spinner} loop={true} />
                </div>
              </TableCell>
            </TableRow>
          ) : (
            data?.data?.map((item: TCatagory) => (
              <TableRow key={item._id}>
                <TableCell>
                  <img
                    src={item.image}
                    className="w-12 h-12 rounded-xl"
                    alt=""
                  />
                </TableCell>
                <TableCell>{item.slug}</TableCell>
                <TableCell>{item.catagoryName}</TableCell>
                <TableCell className="flex items-center gap-2">
                  <button onClick={() => handleDelete(item._id)}>
                    <div className="bg-red-500 text-white p-1 rounded-lg">
                      <Trash2 />
                    </div>
                  </button>
                </TableCell>
              </TableRow>
            ))
          )}
        </TableBody>
      </Table>
    </div>
  );
};

export default CatagoriesTable;
