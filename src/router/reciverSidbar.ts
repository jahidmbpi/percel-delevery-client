import PercelHistory from "@/pages/reciver/PercelHistory";
import ReciverInCommingParcel from "@/pages/reciver/ReciverInCommingParcel";

export const reciverSidebar = [
  {
    title: "reciver",
    url: "#",
    items: [
      {
        title: "Incomming parcel",
        url: "/receiver/incomming",
        Component: ReciverInCommingParcel,
      },
      {
        title: "Percel History",
        url: "/receiver/history",
        Component: PercelHistory,
      },
    ],
  },
];
