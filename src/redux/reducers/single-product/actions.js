import { setIsLoading, setProduct } from "./slice";
import axios from "axios";

export const fetchSingleProduct = (productId) => async (dispatch) => {
  try {
    dispatch(setIsLoading(true));
    const response = await axios.get(
      `https://akk-api-eb96d31d9900.herokuapp.com/api/products/${productId}`
    );
    dispatch(setProduct(response.data.data.data));
    dispatch(setIsLoading(false));
  } catch (error) {
    console.log(error);
  }
};
