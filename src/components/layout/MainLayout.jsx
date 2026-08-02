import React from 'react';
import { Outlet } from 'react-router-dom';
import { Navbar } from '../common/Navbar';
import { Footer } from '../common/Footer';
import { CelebrationModal } from '../common/CelebrationModal';


export const MainLayout = () => {
  return (
    <div className="min-h-screen flex flex-col bg-slate-900 text-slate-100 font-sans">
      <Navbar />
      <main className="flex-1">
        <Outlet />
      </main>


      <Footer />
      <CelebrationModal />
    </div>
  );
};
