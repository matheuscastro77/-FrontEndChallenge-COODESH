import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ClientPage from './pages/ClientPage/ClientPage';
import ListClients from './pages/ListClients/ListClients';
import Home from './pages/Home/Home';

const RoutesApp = () => {

    return (

        <BrowserRouter>
            <Routes>
                <Route path="/" element ={<Home />} />
                <Route path="/clients" element={<ListClients />} />
                <Route path="/clients/:id" element={<ClientPage />} />
            </Routes>
        </BrowserRouter>
    )
    
}

export default RoutesApp