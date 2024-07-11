import ManchesterUK from "/src/assets/store-manchester-uk.jpeg";
import YorkshireUK from "/src/assets/store-yorkshire-uk.jpeg";
import HullUK from "/src/assets/store-hull-uk.jpeg";
import LeicesterUK from "/src/assets/store-leicester-uk.jpeg";
import Img from "/src/assets/images.jpeg";

export const links = [
  {
    icon: (
      <span className="bg-white/10 h-8 w-8 text-base flex rounded-full items-center justify-center text-purple-500">
        <ion-icon name="timer"></ion-icon>
      </span>
    ),
    title: "Dashboard",
    path: "/",
  },
  {
    icon: (
      <span className="bg-white/10 h-8 w-8 text-base flex rounded-full items-center justify-center text-orange-500">
        <ion-icon name="shirt"></ion-icon>
      </span>
    ),
    title: "Products",
    path: "/product",
  },
  {
    icon: (
      <span className="bg-white/10 h-8 w-8 text-base flex rounded-full items-center justify-center text-blue-500">
        <ion-icon name="locate"></ion-icon>
      </span>
    ),
    title: "Category",
    path: "/category",
  },
  {
    icon: (
      <span className="bg-white/10 h-8 w-8 text-base flex rounded-full items-center justify-center text-red-500">
        <ion-icon name="storefront"></ion-icon>
      </span>
    ),
    title: "Stores",
    path: "/store",
  },
  {
    icon: (
      <span className="bg-white/10 h-8 w-8 text-base flex rounded-full items-center justify-center text-purple-500">
        <ion-icon name="fitness"></ion-icon>
      </span>
    ),
    title: "Finances",
    path: "/finances",
  },
  {
    icon: (
      <span className="bg-white/10 h-8 w-8 text-base flex rounded-full items-center justify-center text-yellow-500">
        <ion-icon name="person"></ion-icon>
      </span>
    ),
    title: "Customer",
    path: "/customer",
  },

];
export const items = [
  {
    id: 1,
    qty: 741,
    span: "Qty",
    p: "NEW ITEMS",
  },
  {
    id: 2,
    qty: 123,
    span: "Qty",
    p: "NEW ORDERS",
  },
  {
    id: 3,
    qty: 12,
    span: "Qty",
    p: "NEW REFUNDS",
  },
  {
    id: 4,
    qty: 3,
    span: "Qty",
    p: "NEW MESSAGE",
  },
  {
    id: 5,
    qty: 1,
    span: "Qty",
    p: "NEW GROUP",
  },
  {
    id: 6,
    qty: 203,
    span: "Qty",
    p: "NEW FEEDBACK",
  },
];

export const topCategories = [
  {
    id: 1,
    icon: <ion-icon name="shirt"></ion-icon>,
    txt: "Bottoms",
    qyt: 49,
  },
  {
    id: 2,
    icon: <ion-icon name="bag-remove"></ion-icon>,
    txt: "Jeans",
    qyt: 49,
  },
  {
    id: 3,
    icon: <ion-icon name="glasses"></ion-icon>,
    txt: "Glasses",
    qyt: 49,
  },
  {
    id: 4,
    icon: <ion-icon name="shirt"></ion-icon>,
    txt: "Bottoms",
    qyt: 49,
  },
  {
    id: 5,
    icon: <ion-icon name="shirt"></ion-icon>,
    txt: "Bottoms",
    qyt: 49,
  },
  {
    id: 6,
    icon: <ion-icon name="shirt"></ion-icon>,
    txt: "Bottoms",
    qyt: 49,
  },
];
// stores
export const stores = [
  {
    id: 1,
    img: ManchesterUK,
    name: "Manchester UK Store",
  },
  {
    id: 2,
    img: YorkshireUK,
    name: "Yorkshire UK Store",
  },
  {
    id: 3,
    img: HullUK,
    name: "Hull UK Store",
  },
  {
    id: 4,
    img: LeicesterUK,
    name: "Leicester UK Store",
  },
];
// top categories

export const categories = [
  {
    id: 1,
    icon: <ion-icon name="shirt"></ion-icon>,
    txt: "Bottoms",
    qyt: 49,
  },
  {
    id: 2,
    icon: <ion-icon name="bag-remove"></ion-icon>,
    txt: "Jeans",
    qyt: 49,
  },
  {
    id: 3,
    icon: <ion-icon name="glasses"></ion-icon>,
    txt: "Glasses",
    qyt: 49,
  },
  {
    id: 4,
    icon: <ion-icon name="shirt"></ion-icon>,
    txt: "Bottoms",
    qyt: 49,
  },
  {
    id: 5,
    icon: <ion-icon name="shirt"></ion-icon>,
    txt: "Bottoms",
    qyt: 49,
  },
  {
    id: 6,
    icon: <ion-icon name="shirt"></ion-icon>,
    txt: "Bottoms",
    qyt: 49,
  },
  {
    id: 7,
    icon: <ion-icon name="shirt"></ion-icon>,
    txt: "Bottoms",
    qyt: 49,
  },
  {
    id: 8,
    icon: <ion-icon name="shirt"></ion-icon>,
    txt: "Bottoms",
    qyt: 49,
  },
];
// products

export const products = [
  {
    id: 1,
    img: Img,
    name: "Product 1",
    stockInfo: "12 in stock",
    category: "T-Shirt",
    location: "3 Store",
  },
  {
    id: 2,
    img: Img,
    name: "Product 2",
    stockInfo: "12 in stock",
    category: "T-Shirt",
    location: "3 Store",
  },
  {
    id: 3,
    img: Img,
    name: "Product 3",
    stockInfo: "12 in stock",
    category: "T-Shirt",
    location: "3 Store",
  },
];
