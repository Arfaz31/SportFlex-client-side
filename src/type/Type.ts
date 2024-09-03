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

export type TShippingOrder = {
  productId: string;
  quantity: number;
};

export type TName = {
  firstName: string;
  lastName: string;
};

export type TOrder = {
  _id: string;
  name: TName;
  email: string;
  phone: string;
  address: string;
  totalPrice: number;
  order: TShippingOrder[];
  notes?: string;
};

export type TShippingOrderInfo = {
  productId: TProducts;
  quantity: number;
  selectedSize: string;
};
export type TGetOrder = {
  _id: string;
  name: TName;
  email: string;
  phone: string;
  address: string;
  totalPrice: number;
  order: TShippingOrderInfo[];
  notes?: string;
};
