import './App.css';

import Sidebar from './components/Layouts/Sidebar';
import Login from './components/Auth/Login';

import OverView from './components/Layouts/OverView';
import { Routes, Route } from 'react-router-dom'
import CoordinatorInsert from './components/admin/Coordinator/CoordinatorInsert';
import CoordinatorTable from './components/admin/Coordinator/CoordinatorTable';
import CoordinatorUpdate from './components/admin/Coordinator/CoordinatorUpdate';
import ProtectedRoute from './ProtectedRoutes';

import WorkersInsert from './components/admin/Workers/WorkersInsert';
import WorkerTable from './components/admin/Workers/WorkersTable';
import WorkersUpdate from './components/admin/Workers/WorkersUpdate';


import ProductInsert from './components/admin/Products/Erode/ProductInsert';
import ProductsTable from './components/admin/Products/Erode/ProductsTable';
import ProductUpdate from './components/admin/Products/Erode/ProductsUpdate';

import CproductInsert from './components/admin/Products/Coimbatore/ProductInsert';
import CproductsTable from './components/admin/Products/Coimbatore/ProductsTable';
import CproductUpdate from './components/admin/Products/Coimbatore/ProductsUpdate'

import NproductInsert from './components/admin/Products/Nammakal/ProductInsert'
import NproductsTable from './components/admin/Products/Nammakal/ProductsTable';
import NproductUpdate from './components/admin/Products/Nammakal/ProductsUpdate'

import PproductInsert from './components/admin/Products/Pollachi/ProductInsert'
import PproductsTable from './components/admin/Products/Pollachi/ProductsTable';
import PproductUpdate from './components/admin/Products/Pollachi/ProductsUpdate'

import TproductInsert from './components/admin/Products/Tiruppur/ProductInsert'
import TproductsTable from './components/admin/Products/Tiruppur/ProductsTable';
import TproductUpdate from './components/admin/Products/Tiruppur/ProductsUpdate'

import TrproductInsert from './components/admin/Products/Trichy/ProductInsert'
import TrproductsTable from './components/admin/Products/Trichy/ProductsTable';
import TrproductUpdate from './components/admin/Products/Trichy/ProductsUpdate'
import store from './store';
import { loadUser } from './actions/AuthAction';

import { useEffect } from 'react';

function App() {

  useEffect(()=>{
    store.dispatch(loadUser);
  })
  return (
    <div className="App">
      
      <Sidebar/>
      <Routes>
        <Route path='/' element={<OverView/>}/>
        <Route path='/admin/login' element={<Login/>}/>
        {/* Coordinator Routes */}
        <Route path='/admin/co' element={<ProtectedRoute><CoordinatorInsert/></ProtectedRoute>}/>
        <Route path='/admin/co/get' element={<ProtectedRoute><CoordinatorTable/></ProtectedRoute>}/>
        <Route path='/admin/co/update/:id' element={<CoordinatorUpdate/>}/>
  
        {/* Wrokers Routes */}
        <Route path='/admin/wo' element={<WorkersInsert/>}/>
        <Route path='/admin/wo/get' element={<WorkerTable/>}/>
        <Route path='/admin/wo/update/:id' element={<WorkersUpdate/>}/>

{/* Products Route for all districts 1st level routes*/}
        {/* District Routes */}
        {/* Erode District */}
        <Route path='/admin/di' element={<ProtectedRoute><ProductInsert/></ProtectedRoute>}/>
        <Route path='/admin/di/get' element={<ProductsTable/>}/>
        <Route path='/admin/di/update/:id' element={<ProductUpdate/>}/>

        {/* Coimbatore District */}
        <Route path='/admin/di/co' element={<CproductInsert/>}/>
        <Route path='/admin/di/co/get' element={<CproductsTable/>}/>
        <Route path='/admin/di/co/update/:id' element={<CproductUpdate/>}/>

        {/* Nammakal District */}
        <Route path='/admin/di/na' element={<NproductInsert/>}/>
        <Route path='/admin/di/na/get' element={<NproductsTable/>}/>
        <Route path='/admin/di/na/update/:id' element={<NproductUpdate/>}/>

        {/* Pollachi District */}
        <Route path='/admin/di/po' element={<PproductInsert/>}/>
        <Route path='/admin/di/po/get' element={<PproductsTable/>}/>
        <Route path='/admin/di/po/update/:id' element={<PproductUpdate/>}/>
        
        {/* Trichy District */}
        <Route path='/admin/di/tr' element={<TrproductInsert/>}/>
        <Route path='/admin/di/tr/get' element={<TrproductsTable/>}/>
        <Route path='/admin/di/tr/update/:id' element={<TrproductUpdate/>}/>

        {/* Tiruppur District */}
        <Route path='/admin/di/ti' element={<TproductInsert/>}/>
        <Route path='/admin/di/ti/get' element={<TproductsTable/>}/>
        <Route path='/admin/di/ti/update/:id' element={<TproductUpdate/>}/>        
      </Routes>

    </div>
  );
}

export default App;
