export type TCatagory = {
  _id: string;
  catagoryName: string;
  slug: string;
  image: string;
};

export type TInputs = {
  _id: string;
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
export type TProducts = {
  _id: string;
  productName: string;
  image: string[];
  category: TCatagory;
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
