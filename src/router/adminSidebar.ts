import Manageuser from "@/pages/admin/user/Manageuser";
import Createpercel from "@/pages/sender/Createpercel";

export const adminSidebar = [
  {
    title: "admin",
    url: "#",
    items: [
      {
        title: "Manage User",
        url: "/admin/user",
        Component: Manageuser,
      },
      {
        title: "Project Structure",
        url: "/admin/percel",
        Component: Createpercel,
      },
    ],
  },
];
