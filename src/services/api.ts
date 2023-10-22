export const postData = (): Promise<boolean> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(true);
    }, 1500);
  });
};

export type Product = {
  id: number;
  title: string;
  sku: string;
  price: number;
  availableStock: number;
  featureImage: string;
};

const delay = (ms: number = 500) =>
  new Promise((resolve) => {
    window.setTimeout(resolve, ms);
  });

export const getProductList = async (): Promise<Product[]> => {
  await delay();
  return fetch(`${process.env.PUBLIC_PATH}/products.json`).then((res) => res.json());
};
