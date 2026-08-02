import React from 'react';
import { Outlet } from 'react-router-dom';
import { Navbar } from '../common/Navbar';
import { DashboardSidebar } from '../dashboard/DashboardSidebar';
import { Footer } from '../common/Footer';
import { CelebrationModal } from '../common/CelebrationModal';

export const DashboardLayout = () => {
  return (
    <div className="min-h-screen flex flex-col bg-slate-900 text-slate-100 font-sans">
      <Navbar />
      <div className="flex-1 flex max-w-[1600px] w-full mx-auto">
        <DashboardSidebar />
        <main className="flex-1 p-4 sm:p-6 lg:p-8 overflow-y-auto">
          <Outlet />
        </main>
      </div>
      <Footer />
      <CelebrationModal />
    </div>
  );
};
