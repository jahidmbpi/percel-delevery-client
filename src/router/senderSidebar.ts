import Createpercel from "@/pages/sender/Createpercel";
import ManagePercel from "@/pages/sender/ManagePercel";
import StatusLog from "@/pages/sender/StatusLog";

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
      {
        title: "percel-status",
        url: "/sender/status-log",
        Component: StatusLog,
      },
    ],
  },
];
