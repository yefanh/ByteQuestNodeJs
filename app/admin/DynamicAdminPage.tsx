//bytequest/app/admin/DynamicAdminPage.tsx
"use client";

import dynamic from "next/dynamic";

const App = dynamic(() => import("./app"), { ssr: false });

const DynamicAdminPage = () => {
  return <App />;
};

export default DynamicAdminPage;
