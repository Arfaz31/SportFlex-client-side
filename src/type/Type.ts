export type TInputs = {
  _id?: string;
  productName: string;
  image: string[];
  category: string;
  price: number;
  brand: string;
  description: string;
  size?: string[];
  color?: string[];
  discount?: number;
  discountEndingTime?: string;
  stockQuantity: number;
  availability: boolean;
};

export type TCatagory = {
  _id: string;
  catagoryName: string;
  slug: string;
  image: string;
};
