import type { ComponentType } from "react";

export interface ISaidbar {
  title: string;
  items: {
    title: string;
    url: string;
    Component: ComponentType;
  }[];
}

export const genareteRoute = (sidebarItem: ISaidbar[]) => {
  return sidebarItem.flatMap((section) =>
    section.items.map((route) => ({
      path: route.url,
      Component: route.Component,
    }))
  );
};
