//app/admin/page.tsx
import dynamic from "next/dynamic";
import { redirect } from "next/navigation";
// import { getIsAdmin } from "@/lib/admin";

import { isAdmin } from "@/lib/admin";
// import App  from "./app";
// const App = dynamic(() => import("./app"), { ssr: false });
import DynamicAdminPage from "./DynamicAdminPage";

const AdminPage = async () => {

  if (!isAdmin()) {
    redirect("/");
  }

  return ( 
    <DynamicAdminPage />
  );
};
 
export default AdminPage;