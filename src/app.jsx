import { AdminProvider } from "@/components/AdminProvider";
import HelloMessage from "@/components/HelloMessage";
import React from "react";

export default function App() {
  return (
    <AdminProvider>
      <HelloMessage />
    </AdminProvider>
  );
}
