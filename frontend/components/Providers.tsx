"use client";

import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { ToastContainer } from 'react-toastify';
import { store, persistor } from '../services/store';
import AppShell from '@/mainLayout/AppShell';

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <AppShell>
          {children}
        </AppShell>
        <ToastContainer />
      </PersistGate>
    </Provider>
  );
}
