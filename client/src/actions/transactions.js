import * as api from "../api";
import { FETCH_ALL, CREATE, UPDATE, DELETE } from "../constants/actionTypes";

// Action Creators
export const getTransactions = () => async (dispatch) => {
  try {
    const { data } = await api.fetchTrans();
    dispatch({ type: FETCH_ALL, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const createTransaction = (trans) => async (dispatch) => {
  try {
    const { data } = await api.createTrans(trans);
    dispatch({ type: CREATE, payload: data });
  } catch (error) {
    console.log(error);
  }
};

// export const updatePost = (id, post) => async (dispatch) => {
//   try {
//     const { data } = await api.updatePost(id, post);
//     dispatch({ type: UPDATE, payload: data });
//   } catch (err) {
//     console.log(err);
//   }
// };

export const deleteTransaction = (id) => async (dispatch) => {
  try {
    await api.deleteTrans(id);

    dispatch({ type: DELETE, payload: id });
  } catch (error) {
    console.log(error);
  }
};
