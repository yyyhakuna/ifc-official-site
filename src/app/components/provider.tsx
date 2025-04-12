import { SidebarProvider } from "@/components/ui/sidebar";
import React from "react";

const Provider = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return <SidebarProvider>{children}</SidebarProvider>;
};

export default Provider;
