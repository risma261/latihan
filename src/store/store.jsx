import { applyMiddleware, createStore } from "redux";
import thunkMiddleware from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

//
import { logger } from "./middlewares";
// reducer biasa
import rootReducer from "./reducers";

// merubah export menjadi nama varible lain dengan as
import {
  storeDenganLocalStorage as rootReducerWithPersist,
  toolkitStore
} from "./reducers";

export default function reduxStore(preloadedState) {
  const middlewares = [logger, thunkMiddleware];
  const middlewareEnhancer = applyMiddleware(...middlewares);

  /* 
  ini dari devtool 
  install di chrome : https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd
  */
  const composedEnhancers = composeWithDevTools(middlewareEnhancer);

  /* tanpa persist */
  const store = createStore(rootReducer, preloadedState, composedEnhancers);

  /* dengan persist */
  // const store = createStore(
  //   rootReducerWithPersist,
  //   preloadedState,
  //   composedEnhancers
  // );

  return store;
}

// hanya denga toolkit
export function reduxToolkitStore(preloadedState) {
  return toolkitStore;
}
