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
export const getProductList = (): Promise<Product[]> => {
  const productList: Product[] = [
    {
      id: 0,
      title: '拍拍',
      sku: 'HW0110',
      price: 300,
      availableStock: 3,
      featureImage: `${process.env.PUBLIC_PATH}/img/pic01.jpg`,
    },
    {
      id: 1,
      title: '花花',
      sku: 'HW0109',
      price: 200,
      availableStock: 2,
      featureImage: `${process.env.PUBLIC_PATH}/img/pic02.jpg`,
    },
    {
      id: 2,
      title: '腿腿',
      sku: 'HW0111',
      price: 100,
      availableStock: 4,
      featureImage: `${process.env.PUBLIC_PATH}/img/pic03.jpg`,
    },
  ];
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(productList);
    }, 350);
  });
};
