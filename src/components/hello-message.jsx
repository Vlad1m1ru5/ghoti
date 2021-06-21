import { useAdminState } from "@/components/admin-provider";
import React from "react";

export default function HelloMessage() {
  const admin = useAdminState();
  const isAdmin = admin?.username && admin?.password;

  return <p>Hello{isAdmin && <span>, admin</span>}!</p>;
}
