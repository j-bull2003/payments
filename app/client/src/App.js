import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Layout from './components/layout';
import AccountPage from './pages/AccountPage';
import ServiceStatusPage from './pages/ServiceStatusPage';

const App = () => (
  <Routes>
    <Route path='/' element={<Layout />}>
      <Route index element={<AccountPage />} />
      <Route path='accounts' element={<AccountPage />} />
      <Route path='service_status' element={<ServiceStatusPage />} />
    </Route>
  </Routes>
);

export default App;
