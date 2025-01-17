"use client";

import Link from "next/link";
import clsx from "clsx";
import {
  IoCloseOutline,
  IoLogInOutline,
  IoLogOutOutline,
  IoPeopleOutline,
  IoPersonOutline,
  IoSearchOutline,
  IoShirtOutline,
  IoTicketOutline,
} from "react-icons/io5";

import { useUIStore } from "@/store";
import SidebarLink, { SidebarLinksProps } from "./SidebarLink";

const menuLinks: SidebarLinksProps[] = [
  {
    title: "Profile",
    path: "/",
    icon: <IoPersonOutline size={30} />,
  },
  {
    title: "Ordenes",
    path: "/",
    icon: <IoTicketOutline size={30} />,
  },
  {
    title: "Ingresar",
    path: "/",
    icon: <IoLogInOutline size={30} />,
  },
  {
    title: "Salir",
    path: "/",
    icon: <IoLogOutOutline size={30} />,
  },
  {
    title: "Productos",
    path: "/",
    icon: <IoShirtOutline size={30} />,
  },
  {
    title: "Ordenes",
    path: "/",
    icon: <IoTicketOutline size={30} />,
  },
  {
    title: "Usuarios",
    path: "/",
    icon: <IoPeopleOutline size={30} />,
  },
];

export const Sidebar = () => {
  const isSideMenuOpen = useUIStore((state) => state.isSideMenuOpen);
  const closeMenu = useUIStore((state) => state.closeSideMenu);

  return (
    <div>
      {isSideMenuOpen && (
        <div>
          {/* Background black */}
          <div className="fixed top-0 left-0 w-screen h-screen z-10 bg-black opacity-30" />
          {/* Background blur */}
          <div
            onClick={closeMenu}
            className="fade-in fixed top-0 left-0 w-screen h-screen z-10 backdrop-filter backdrop-blur-sm"
          />
        </div>
      )}

      {/* Sidemenu */}
      <nav
        className={clsx(
          "fixed p-5 right-0 top-0 w-[500px] h-screen bg-white z-20 shadow-2xl transform transition-all duration-300",
          {
            "translate-x-full": !isSideMenuOpen,
          }
        )}
      >
        <IoCloseOutline
          size={50}
          className="absolute top-5 right-5 cursor-pointer"
          onClick={() => closeMenu()}
        />

        {/* Input */}
        <div className="relative mt-14">
          <IoSearchOutline size={20} className="absolute top-2 left-2" />
          <input
            type="text"
            placeholder="Buscar"
            className="w-full bg-gray-50 rounded pl-10 py-1 pr-10 border-b-2 text-xl border-gray-200 focus:outline-none focus:border-blue-500"
          />
        </div>

        {/* Menú */}
        {menuLinks.map((link, index) => (
          <SidebarLink key={index} {...link} />
        ))}
      </nav>
    </div>
  );
};
