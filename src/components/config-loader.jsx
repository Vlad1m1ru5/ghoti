import {
  adminActionTypes,
  useAdminDispatch,
} from "@/components/admin-provider";
import React, { useEffect } from "react";

export default function ConfigLoader({ fetchConfig, children }) {
  const dispatch = useAdminDispatch();

  useEffect(() => {
    async function dispatchAdmin() {
      const { admin } = await fetchConfig();

      if (admin !== null) {
        dispatch({ type: adminActionTypes.setAdmin, payload: admin });
      }
    }

    dispatchAdmin();
  }, []);

  return <>{children}</>;
}
