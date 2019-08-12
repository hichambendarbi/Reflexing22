import { createStore } from "redux";
import RootReducer from "./reducers";

const Store = createStore(RootReducer);

export default Store;
