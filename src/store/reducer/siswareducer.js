import { actionTypes } from "../actionTypes";

const initialState = {
  siswa: [],
  loading: false,
  error: null,
  message: "",
};

// Reducer untuk create siswa
export const createSiswaReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.CREATE_SISWA_REQUEST:
      return { ...state, loading: true };
    case actionTypes.CREATE_SISWA_SUCCESS:
      return {
        ...state,
        loading: false,
        siswa: action.payload.siswa,
        message: action.payload.message,
      };
    case actionTypes.CREATE_SISWA_FAILED:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
      };
    default:
      return state;
  }
};

// Reducer untuk mendapatkan daftar siswa
export const getSiswaReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_SISWA_REQUEST:
      return { ...state, loading: true };
    case actionTypes.GET_SISWA_SUCCESS:
      return {
        ...state,
        loading: false,
        siswa: action.payload.siswa,
        message: action.payload.message,
      };
    case actionTypes.GET_SISWA_FAILED:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
      };
    default:
      return state;
  }
};

// Reducer untuk mendapatkan siswa berdasarkan ID (edit)
export const getSiswaByIdReducer = (state = { siswa: {} }, action) => {
  switch (action.type) {
    case actionTypes.GET_SISWA_BY_ID_REQUEST:
      return { ...state, loading: true };
    case actionTypes.GET_SISWA_BY_ID_SUCCESS:
      return {
        ...state,
        loading: false,
        siswa: action.payload.siswa,
        message: action.payload.message,
      };
    case actionTypes.GET_SISWA_BY_ID_FAILED:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
      };
    default:
      return state;
  }
};

// Reducer untuk menghapus siswa
export const deleteSiswaReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.DELETE_SISWA_REQUEST:
      return { ...state, loading: true };
    case actionTypes.DELETE_SISWA_SUCCESS:
      return {
        ...state,
        loading: false,
        siswa: state.siswa.filter((item) => item.id !== action.payload.id),
        message: action.payload.message,
      };
    case actionTypes.DELETE_SISWA_FAILED:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
      };
    default:
      return state;
  }
};

// Reducer untuk memperbarui data siswa
export const updateSiswaReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.UPDATE_SISWA_REQUEST:
      return { 
        ...state, 
        loading: true, 
        error: null, // Pastikan error di-reset saat request dimulai
        message: null // Pastikan pesan di-reset saat request dimulai
      };

    case actionTypes.UPDATE_SISWA_SUCCESS:
      return {
        ...state,
        loading: false,
        siswa: state.siswa.map((item) =>
          item.id === action.payload.siswa.id ? action.payload.siswa : item
        ),
        message: action.payload.message, // Menyimpan pesan sukses
        error: null, // Reset error jika sukses
      };

    case actionTypes.UPDATE_SISWA_FAILED:
      return {
        ...state,
        loading: false,
        error: action.payload.error, // Menyimpan pesan error
        message: null, // Reset pesan sukses jika gagal
      };

    default:
      return state;
  }
};

