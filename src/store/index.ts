import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import { colorReducer } from "./ColorReducer";

const rootReducer = combineReducers({
  color: colorReducer
});

export type RootState = ReturnType<typeof rootReducer>;

export const store = createStore(rootReducer, applyMiddleware(thunk));
