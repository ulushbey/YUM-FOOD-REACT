import { Product } from "lib/types/product";
import axios from "axios";
import { serverApi } from "lib/config";
type iGET_PRODUCTS_PROPS = {
  category: string;
  page: number;
  order: string;
};
export const GET_PRODUCTS = async (option: iGET_PRODUCTS_PROPS) => {
  const { category, page, order } = option;
  try {
    let url = `${serverApi}/product/all?order=${order}&page=${page}&limit=${8}&productCollection=${category}`;
    const result = await axios.get(url);
    return result.data;
  } catch (err: any) {
    console.log("err: ", err.message);
  }
};

// public async getProduct(productId: string): Promise<Product> {
// 	try {
// 		const url = `${this.path}/product/${productId}`
// 		const result = await axios.get(url, { withCredentials: true })
// 		console.log("getProduct", result)
// 		return result.data
// 	} catch (err) {
// 		console.log("Error, getProduct:", err)
// 		throw err
// 	}
// }
