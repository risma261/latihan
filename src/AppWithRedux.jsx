import "./App.css";
import Home from "./pages/HomeWithRedux";
// sebisa mungkin import global css di component paling luar, disini itu index.js

/* dibawah ini kita mengkonfigurasi redux */
import { Provider } from "react-redux";
import reduxStore from "./store/store";

const rdxStore = reduxStore();
function App() {
  return (
    <Provider store={rdxStore}>
      <div className='outer-box'>
        <Home />
      </div>
    </Provider>
  );
}

export default App;
