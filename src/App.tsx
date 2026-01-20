import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ThankYouPage from './pages/ThankYouPage';

const App: React.FC = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Navigate to="/grupo-whats" replace />} />
                <Route path="/grupo-whats" element={<HomePage />} />
                <Route path="/obrigado-whats" element={<ThankYouPage />} />
            </Routes>
        </BrowserRouter>
    );
};

export default App;
