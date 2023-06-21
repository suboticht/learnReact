import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import routes from './routes'
import Layout from './layout';

function App() {
  return <Router>
  <Routes>
    {routes.map((route) => {
      const Page = route.component;
      return <Route 
        key={route.name}
        path={route.path} 
        element={ 
          <Layout title={route.name}>
            <Page/>
          </Layout>
       }
      />;
      })};
  </Routes>
</Router>;
}

export default App;
