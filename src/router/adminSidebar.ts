import ManageAdminPercel from "@/pages/admin/PARCEL/ManageAdminPercel";
import Manageuser from "@/pages/admin/user/Manageuser";

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
        title: "Manage Parcel",
        url: "/admin/manage-parcel",
        Component: ManageAdminPercel,
      },
    ],
  },
];
