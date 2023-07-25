import axios from "axios";
import { setIsLoading, setProducts } from "./slice";

export const fetchAllProducts = () => async (dispatch) => {
  try {
    dispatch(setIsLoading(true));
    const response = await axios.get(
      "https://akk-api-eb96d31d9900.herokuapp.com/api/products/"
    );
    dispatch(setProducts(response.data.data.data));
    dispatch(setIsLoading(false));
  } catch (error) {
    console.log(error);
  }
};
