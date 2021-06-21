import { AdminProvider } from "@/components/admin-provider";
import ConfigLoader from "@/components/config-loader";
import HelloMessage from "@/components/hello-message";
import Api from "@/api";
import React from "react";

export default function App() {
  const api = new Api(process.env.API_CONFIG);

  return (
    <AdminProvider>
      <ConfigLoader loadConfig={api.fetchConfig}>
        <HelloMessage />
      </ConfigLoader>
    </AdminProvider>
  );
}
