import { createAsyncThunk } from "@reduxjs/toolkit";
import { goitApi } from "../../config/goitApi";
import { getBalance } from "../auth/operations";

export const getCategoriesThunk = createAsyncThunk(
  "transaction/getCategories",
  async (_, thunkAPI) => {
    try {
      const { data } = await goitApi.get("transaction-categories");
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const getSummaryThunk = createAsyncThunk(
  "transaction/getSummary",
  async (query, thunkAPI) => {
    try {
      const { month, year } = query;
      const { data } = await goitApi.get("transactions-summary", {
        params: {
          month,
          year,
        },
      });
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const getTransactionsThunk = createAsyncThunk(
  "transaction/getTransactions",
  async (_, thunkAPI) => {
    try {
      const { data } = await goitApi.get("transactions");
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const postTransactionThunk = createAsyncThunk(
  "transaction/postTransaction",
  async (body, thunkAPI) => {
    try {
      const { data } = await goitApi.post("transactions", body);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const patchTransactionThunk = createAsyncThunk(
  "transaction/patchTransaction",
  async (payload, thunkAPI) => {
    try {
      const { id, ...body } = payload;
      const { data } = await goitApi.patch(`transactions/${id}`, body);
      await thunkAPI.dispatch(getBalance());
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteTransactionThunk = createAsyncThunk(
  "transaction/deleteTransaction",
  async (id, thunkAPI) => {
    try {
      await goitApi.delete(`transactions/${id}`);
      await thunkAPI.dispatch(getBalance());
      return id;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
