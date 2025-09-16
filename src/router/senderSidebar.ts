import Createpercel from "@/pages/sender/Createpercel";

export const senderSidebar = [
  {
    title: "sender",
    url: "#",
    items: [
      {
        title: "Project Structure",
        url: "/sender/percel",
        Component: Createpercel,
      },
      {
        title: "create percel",
        url: "#",
        Component: Createpercel,
      },
    ],
  },
];
