import { configureStore } from "@reduxjs/toolkit";
import {counter as counterReducer} from "./counter";
import { AddToList } from "./AddtoList";

export default configureStore({reducer:{counter:counterReducer.reducer,MyList:AddToList.reducer}})