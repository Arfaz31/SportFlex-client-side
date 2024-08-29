import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { TProducts } from "@/type/Type";
import { Trash2 } from "lucide-react";
import Lottie from "lottie-react";
import spinner from "@/assets/pIR8Sd9Ib1.json";
import { useGetAllProductsQuery } from "@/redux/features/product/productApi";
import { useState } from "react";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
const ProductsTable = () => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const { data, isLoading } = useGetAllProductsQuery({ page: currentPage });

  const totalPages = data?.data?.totalPages || 1;
  const handlePageChange = (newPage: number) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setCurrentPage(newPage);
    }
  };
  const handleDelete = (_id: string) => {
    console.log(_id);
  };
  return (
    <div className="overflow-x-auto">
      <Table className="p-4 rounded-md w-full ">
        <TableHeader>
          <TableRow>
            <TableHead className="text-white font-bold text-lg">
              Image
            </TableHead>
            <TableHead className="text-white font-bold text-lg">
              Product Name
            </TableHead>
            <TableHead className="text-white font-bold text-lg">
              Price
            </TableHead>
            <TableHead className="text-white font-bold text-lg">
              Category
            </TableHead>
            <TableHead className="text-white font-bold text-lg">
              Brand
            </TableHead>
            <TableHead className="text-white font-bold text-lg">
              Stock Quantity
            </TableHead>
            <TableHead className="text-white font-bold text-lg">
              Avaiability
            </TableHead>

            <TableHead className="text-white font-bold text-lg">Edit</TableHead>
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
            data?.data?.products?.map((item: TProducts) => (
              <TableRow key={item._id}>
                <TableCell>
                  <img
                    src={item?.image[0]}
                    className="w-12 h-12 rounded-xl"
                    alt=""
                  />
                </TableCell>
                <TableCell>{item?.productName}</TableCell>
                <TableCell className="text-center">{item?.price}</TableCell>
                <TableCell>{item?.category?.catagoryName}</TableCell>
                <TableCell>{item?.brand}</TableCell>
                <TableCell className="text-center">
                  {item?.stockQuantity}
                </TableCell>
                <TableCell className="text-center">
                  {item?.availability ? "In Stock" : "Out of Stock"}
                </TableCell>

                <TableCell className="flex items-center gap-2">
                  <button onClick={() => handleDelete(item?._id)}>
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
      <div className="py-20">
        <Pagination>
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious
                href="#"
                onClick={(e) => {
                  if (currentPage === 1) {
                    e.preventDefault();
                  } else {
                    handlePageChange(currentPage - 1);
                  }
                }}
                className={
                  currentPage === 1 ? "cursor-not-allowed opacity-50" : ""
                }
              />
            </PaginationItem>

            {Array.from({ length: totalPages }).map((_, index) => (
              <PaginationItem key={index}>
                <PaginationLink
                  href="#"
                  isActive={currentPage === index + 1}
                  onClick={() => handlePageChange(index + 1)}
                  // className="bg-gradient-to-r from-[#00cde5] to-[#10798b] text-white"
                >
                  {index + 1}
                </PaginationLink>
              </PaginationItem>
            ))}

            <PaginationItem>
              <PaginationNext
                href="#"
                onClick={(e) => {
                  if (currentPage === totalPages) {
                    e.preventDefault();
                  } else {
                    handlePageChange(currentPage + 1);
                  }
                }}
                className={
                  currentPage === totalPages
                    ? "cursor-not-allowed opacity-50"
                    : ""
                }
              />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>
    </div>
  );
};

export default ProductsTable;
