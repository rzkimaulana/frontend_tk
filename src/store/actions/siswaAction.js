import axios from "axios";
import { actionTypes } from "../actionTypes";
import { URL_API_SISWA } from "../../utils/constant";

// Gunakan URL_API dari constants
const URL_API = URL_API_SISWA;


// Fungsi untuk membuat data siswa
export const createSiswa = (params) => {
  return async (dispatch) => {
    dispatch({ type: actionTypes.CREATE_SISWA_REQUEST });

    try {
      const response = await axios.post(`${URL_API}/siswa`, params);
      const { message, siswa } = response.data;
      const status = true;

      dispatch({
        type: actionTypes.CREATE_SISWA_SUCCESS,
        payload: { message, siswa },
      });

      return { status, message, siswa };
    } catch (err) {
      const { message, error } = err.response ? err.response.data : {};
      const status = false;

      dispatch({
        type: actionTypes.CREATE_SISWA_FAILED,
        payload: { message, error },
      });

      return { status, message, error };
    }
  };
};

// Fungsi untuk mendapatkan daftar siswa
export const getsiswa = () => {
  return async (dispatch) => {
    dispatch({ type: actionTypes.GET_SISWA_REQUEST });

    try {
      const response = await axios.get(`${URL_API}/siswa`);
      const { message, siswa } = response.data;
      const status = true;

      dispatch({
        type: actionTypes.GET_SISWA_SUCCESS,
        payload: { message, siswa },
      });

      return { status, message, siswa };
    } catch (err) {
      const { message, error } = err.response ? err.response.data : {};
      const status = false;

      dispatch({
        type: actionTypes.GET_SISWA_FAILED,
        payload: { message, error },
      });

      return { status, message, error };
    }
  };
};

// Fungsi untuk mendapatkan data siswa berdasarkan ID
export const getSiswaById = (id) => {
  return async (dispatch) => {
    dispatch({ type: actionTypes.GET_SISWA_REQUEST });

    try {
      const response = await axios.get(`${URL_API}/${id}`);
      const { message, siswa } = response.data;
      const status = true;

      dispatch({
        type: actionTypes.GET_SISWA_SUCCESS,
        payload: { message, siswa },
      });

      return { status, message, siswa };
    } catch (err) {
      const { message, error } = err.response ? err.response.data : {};
      const status = false;

      dispatch({
        type: actionTypes.GET_SISWA_FAILED,
        payload: { message, error },
      });

      return { status, message, error };
    }
  };
};

// Fungsi untuk menghapus data siswa
export const deleteSiswa = (id) => {
  return async (dispatch) => {
    dispatch({ type: actionTypes.DELETE_SISWA_REQUEST });

    try {
      const response = await axios.delete(`${URL_API}/${id}`);
      const { message } = response.data;
      const status = true;

      dispatch({
        type: actionTypes.DELETE_SISWA_SUCCESS,
        payload: { message, id },
      });

      return { status, message };
    } catch (err) {
      const { message, error } = err.response ? err.response.data : {};
      const status = false;

      dispatch({
        type: actionTypes.DELETE_SISWA_FAILED,
        payload: { message, error },
      });

      return { status, message, error };
    }
  };
};

// Fungsi untuk memperbarui data siswa
export const updateSiswa = (id, params) => {
  return async (dispatch) => {
    dispatch({ type: actionTypes.UPDATE_SISWA_REQUEST });

    try {
      const response = await axios.put(`${URL_API}/${id}`, params);
      const { message, siswa } = response.data;
      const status = true;

      dispatch({
        type: actionTypes.UPDATE_SISWA_SUCCESS,
        payload: { message, siswa },
      });

      return { status, message, siswa };
    } catch (err) {
      const { message, error } = err.response ? err.response.data : {};
      const status = false;

      dispatch({
        type: actionTypes.UPDATE_SISWA_FAILED,
        payload: { message, error },
      });

      return { status, message, error };
    }
  };
};
