import { setIsLoading, setProduct, setReview, setInputValues, setError } from "./slice";
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

export const fetchReviews = (productId) => async (dispatch) => {
  try {
    dispatch(setIsLoading(true));
    const response = await axios.get(
      `https://akk-api-eb96d31d9900.herokuapp.com/api/products/${productId}/reviews`
    );
    dispatch(setReview(response.data.data.data));
    dispatch(setIsLoading(false));
  } catch (error) {
    console.log(error);
  }
};

export const createReview = (productId, review) => async (dispatch) => {
  try {
    dispatch(setIsLoading(true));
    const response = await axios.post(
      `https://akk-api-eb96d31d9900.herokuapp.com/api/products/${productId}/reviews`,
      review,
     
    );
    dispatch(setInputValues(response.data.data.data))
    dispatch(setIsLoading(false));
  } catch (error) {
    setError(error.message)
    console.log(error);
  }
};
