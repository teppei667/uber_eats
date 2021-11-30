import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

// components
import { Restaurants } from './containers/Restaurants.jsx';
import { Foods } from './containers/Foods.jsx';
import { Orders } from './containers/Orders.jsx';

function App() {
  return (
    <Router>
      <Routes>
        //店舗一覧ページ
        <Route
          exact
          path="/restaurants"
          element={<Restaurants />} />  
        
        <Route
          exact
          path="/orders"
          element={<Orders />} /> 
        <Route
          exact
          path="/restaurants/:restaurantsId/foods"
          render={({ match }) =>
            <Foods
              match={match} />
            }
        />
      </Routes>
    </Router>
  )
}

export default App;
