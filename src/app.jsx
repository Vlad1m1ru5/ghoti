import { AdminProvider } from "@/components/admin-provider";
import ConfigLoader from "@/components/config-loader";
import HelloMessage from "@/components/hello-message";
import Api from "@/api";
import React from "react";

export default function App() {
  const api = new Api();

  return (
    <AdminProvider>
      <ConfigLoader fetchConfig={api.fetchConfig}>
        <HelloMessage />
      </ConfigLoader>
    </AdminProvider>
  );
}
