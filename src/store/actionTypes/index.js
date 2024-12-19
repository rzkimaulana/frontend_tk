import { siswaActionTypes } from "./siswaActionType";    
import { loginActionTypes } from "./authActionType";

export const actionTypes = {
    ...siswaActionTypes,
  }

export const authActionTypes = {
    ...loginActionTypes,
  }