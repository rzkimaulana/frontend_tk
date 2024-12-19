import axios from "axios";
import { authActionTypes } from "../actionTypes";

const URL_API = import.meta.env.VITE_APP_URL_API_AUTH;


export const login = (email, password) => {
    return async (dispatch) => {
      // Dispatch request action
      dispatch({ type: authActionTypes.GET_LOGIN_REQUEST });
  
      try {
        // Melakukan request ke API login
        const response = await axios.post(`${URL_API}/login`, {
          email,
          password,
        });
  
        const { status, message, token } = response.data;
  
        // Menyimpan token ke localStorage
        localStorage.setItem("token", token);
  
        // Dispatch success action
        dispatch({
          type: authActionTypes.GET_LOGIN_SUCCESS,
          payload: { status, token, message },
        });
  
        return { success: true, message };
      } catch (error) {
        // Fallback jika error response tidak tersedia
        const errorMessage = error.response?.data?.errors || "Login gagal, coba lagi.";
        
        // Dispatch failed action
        dispatch({
          type: authActionTypes.GET_LOGIN_FAILED,
          payload: errorMessage,
        });
  
        return { success: false, message: errorMessage };
      }
    };
  };