/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { LandingPage } from './screens/LandingPage';
import { AuthPage } from './screens/AuthPage';
import { Dashboard } from './screens/Dashboard';
import { Marketplace } from './screens/Marketplace';
import { HistoryPage } from './screens/HistoryPage';
import { AdminDashboard } from './screens/AdminDashboard';
import { BookingPage } from './screens/BookingPage';
import { ShaderBackground } from './components/ui/ShaderBackground';

export default function App() {
  return (
    <Router>
      <div className="relative min-h-screen overflow-x-hidden">
        <ShaderBackground />
        {/* Global semi-transparent overlay to ensure text readability */}
        <div className="fixed inset-0 bg-black/20 pointer-events-none z-[-5]" />
        
        <div className="relative z-10">
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/auth" element={<AuthPage />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/market" element={<Marketplace />} />
            <Route path="/history" element={<HistoryPage />} />
            <Route path="/admin" element={<AdminDashboard />} />
            <Route path="/sessions" element={<BookingPage />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}


