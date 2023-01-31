import { Product } from "@/types";

export const handlePriceFilter = (price: string[], product: Product) => {
  for (let i = 0; i < price.length; i++) {
    switch (price[i]) {
      case "0-Rs250":
        if (product.price > 0 && product.price <= 250) {
          return product;
        }
        break;
      case "Rs251-400":
        if (product.price > 251 && product.price <= 450) {
          return product;
        }
        break;
      case "Rs450+":
        if (product.price >= 450) {
          return product;
        }
        break;
      default:
        return product;
    }
  }
};

export const genericFilterHandler = (
  category: string[],
  product: Product,
  type: string
) => {
  for (let i = 0; i < category.length; i++) {
    if (product[type as keyof Product] === category[i]) {
      return product;
    }
  }
};

export const removeOptionFromFilter = (category: string[], value: string) => {
  let newArray = category.filter((category) => category !== value);
  return newArray;
};
