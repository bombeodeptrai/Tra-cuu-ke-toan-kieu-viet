import React from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from './Header';
import { Sidebar } from './Sidebar';
import { MobileNav } from './MobileNav';
import { motion, AnimatePresence } from 'framer-motion';

export function AppLayout() {
  return (
    <div className="flex min-h-screen w-full flex-col bg-background">
      <div className="hidden md:flex w-64 flex-col fixed inset-y-0 z-50">
        <Sidebar />
      </div>
      
      <div className="md:pl-64 flex flex-col flex-1 min-h-screen">
        <Header />
        <main className="flex-1 w-full max-w-7xl mx-auto p-4 md:p-6 lg:p-8 pb-20 md:pb-8 flex flex-col relative">
          <AnimatePresence mode="wait">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="flex-1 flex flex-col w-full h-full"
            >
              <Outlet />
            </motion.div>
          </AnimatePresence>
        </main>
      </div>
      
      <div className="md:hidden">
        <MobileNav />
      </div>
    </div>
  );
}
