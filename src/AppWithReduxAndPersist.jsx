import "./App.css";
import Home from "./pages/HomeWithRedux";
// sebisa mungkin import global css di component paling luar, disini itu index.js

/* dibawah ini kita mengkonfigurasi redux */
import { Provider } from "react-redux";
// persis wrappernya
import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";
import reduxStore, { reduxToolkitStore } from "./store/store";

const rdxStore = reduxToolkitStore();


const rdxPersistStore = persistStore(rdxStore);

function App() {
  return (
    <Provider store={rdxStore}>
      <PersistGate
        persistor={rdxPersistStore}
        loading={<div> bisa diisi denga loading global</div>}>
        <div className='outer-box'>
          <Home />
        </div>
      </PersistGate>
    </Provider>
  );
}

export default App;
