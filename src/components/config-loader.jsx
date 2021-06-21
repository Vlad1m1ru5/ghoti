import {
  adminActionTypes,
  useAdminDispatch,
} from "@/components/admin-provider";
import React, { useEffect } from "react";

export default function ConfigLoader({ loadConfig, children }) {
  const adminDispatch = useAdminDispatch();

  useEffect(() => {
    async function dispatchAdmin() {
      const { admin } = await loadConfig();

      if (admin !== null) {
        adminDispatch({ type: adminActionTypes.setAdmin, payload: admin });
      }
    }

    dispatchAdmin();
  }, []);

  return <>{children}</>;
}
