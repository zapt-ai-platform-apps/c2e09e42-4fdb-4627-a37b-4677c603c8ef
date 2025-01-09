import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import TabNavigation from './components/TabNavigation';
import Planning from './pages/Planning';
import Management from './pages/Management';
import Accounting from './pages/Accounting';

export default function App(){
    return (
        <div className="min-h-screen h-full flex flex-col">
            <TabNavigation />
            <div className="flex-grow h-full p-4">
                <Routes>
                    <Route path="/" element={<Navigate to="/planning" />} />
                    <Route path="/planning" element={<Planning />} />
                    <Route path="/management" element={<Management />} />
                    <Route path="/accounting" element={<Accounting />} />
                </Routes>
            </div>
        </div>
    )
}