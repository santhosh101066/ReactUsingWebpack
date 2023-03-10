import { configureStore } from "@reduxjs/toolkit";
import { counter as counterReducer } from "../reducer/counter";
import { AddToList } from "../reducer/AddtoList";
import {
  axiosCount,
  initializeAx,
  setError,
  statusState,
} from "../reducer/AxiosCounter";
import { api } from "../../../api";
import ClickOn from "../reducer/ActionReducer";

const store = configureStore({
  reducer: {
    counter: counterReducer.reducer,
    MyList: AddToList.reducer,
    AsyncApi: axiosCount.reducer,
    Action: ClickOn,
  },
});
export default store;

store.dispatch(statusState("loading"));
console.log(statusState("loading"));
api
  .get("counter")
  .then((res) => {
    store.dispatch(statusState("done"));
    store.dispatch(initializeAx(res.data[0].count));
  })
  .catch((err) => {
    store.dispatch(setError(err.message));
    store.dispatch(statusState("error"));
  });
