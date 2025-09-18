import Createpercel from "@/pages/sender/Createpercel";
import ManagePercel from "@/pages/sender/ManagePercel";

export const senderSidebar = [
  {
    title: "sender",
    url: "#",
    items: [
      {
        title: "create percel",
        url: "/sender/create",
        Component: Createpercel,
      },
      {
        title: "Manage Percel",
        url: "/sender/Manage-Percel",
        Component: ManagePercel,
      },
    ],
  },
];
