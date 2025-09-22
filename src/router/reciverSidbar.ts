import ReciverInCommingParcel from "@/pages/reciver/ReciverInCommingParcel";
import Createpercel from "@/pages/sender/Createpercel";

export const reciverSidebar = [
  {
    title: "reciver",
    url: "#",
    items: [
      {
        title: "Project Structure",
        url: "/receiver/cparcel",
        Component: Createpercel,
      },
      {
        title: "Incomming parcel",
        url: "/receiver/incomming",
        Component: ReciverInCommingParcel,
      },
    ],
  },
];
