"use client";
import type { ReactNode } from "react";
import { useSelector } from "react-redux";
import Header from "../components/Header/Header";
import type { RootState } from "../services/store";

export default function AppShell({ children }: { children: ReactNode }) {
  const isLoggedIn = useSelector((state: RootState) => state.login.isLoggedIn);

  return (
    <div className="min-h-screen flex flex-col">
      {isLoggedIn && <Header />}
      <main>{children}</main>
    </div>
  );
}
