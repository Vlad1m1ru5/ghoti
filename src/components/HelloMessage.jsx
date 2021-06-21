import { useAdminContext } from "@/components/AdminProvider";
import React from "react";

export default function HelloMessage() {
  const admin = useAdminContext();

  return (
    <p>Hello{admin?.username && admin?.password && <span> , admin</span>}!</p>
  );
}
