import { adminSidebar } from "@/router/adminSidebar";
import { reciverSidebar } from "@/router/reciverSidbar";
import { senderSidebar } from "@/router/senderSidebar";

export const role = {
  SENDER: "SENDER",
  ADMIN: "ADMIN",
  RECEIVER: "RECEIVER",
};
export type Role = (typeof role)[keyof typeof role];

export const getSidbarItem = (userRole: Role) => {
  switch (userRole) {
    case role.ADMIN:
      return [...adminSidebar];

    case role.SENDER:
      return [...senderSidebar];
    case role.RECEIVER:
      return [...reciverSidebar];
    default:
      return [];
  }
};
