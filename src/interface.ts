export interface ProductInfoType {
  product_category: string | undefined;
  product_brand: string | undefined;
  product_name: string | undefined;
  product_model: string | undefined;
  product_price: number | undefined;
  product_link: string | undefined;
  product_img_url: string | undefined;
  source: string | undefined
}

export interface Website {
  productInfo: ProductInfoType;
}

export interface ItemCardType {
  source: string,
  img_url: string,
  product_link: string,
  price: string,
  name: string,
  kwh_per_year: string,
  certified: string,
  cost_per_year: string
}

export interface ItemCardCollectionType {
  product_collection: {
    product_list_1: ItemCardType[],
    product_list_2: ItemCardType[],
    product_list_3: ItemCardType[]
  }
  
}

// let RankedItems = {
//   product_list: [
//     {
//       source: undefined,
//       product_img_url: undefined,
//       product_link: undefined,
//       product_price: undefined,
//       product_name: undefined,
//       product_kwhPerYear: undefined,
//       product_energyStarCert: undefined,
//       product_costPerYear: undefined
//     },
//     {
//       source: undefined,
//       product_img_url: undefined,
//       product_link: undefined,
//       product_price: undefined,
//       product_name: undefined,
//       product_kwhPerYear: undefined,
//       product_energyStarCert: undefined,
//       product_costPerYear: undefined
//     },
//     {
//       source: undefined,
//       product_img_url: undefined,
//       product_link: undefined,
//       product_price: undefined,
//       product_name: undefined,
//       product_kwhPerYear: undefined,
//       product_energyStarCert: undefined,
//       product_costPerYear: undefined
//     },
//     {
//       source: undefined,
//       product_img_url: undefined,
//       product_link: undefined,
//       product_price: undefined,
//       product_name: undefined,
//       product_kwhPerYear: undefined,
//       product_energyStarCert: undefined,
//       product_costPerYear: undefined
//     },
//     {
//       source: undefined,
//       product_img_url: undefined,
//       product_link: undefined,
//       product_price: undefined,
//       product_name: undefined,
//       product_kwhPerYear: undefined,
//       product_energyStarCert: undefined,
//       product_costPerYear: undefined
//     },
//   ]
// }