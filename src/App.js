import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import client from './apollo-client';
import { ApolloProvider } from '@apollo/client';
import HomePage from "./HomePage";
import Login from "./component/Login";

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <Routes>
          <Route exact path='/' element={<Login />} />
          <Route path='/HomePage' element={<HomePage />} />
        </Routes>
      </Router>
    </ApolloProvider>
  );
}

export default App;
