"use client";
import { TiThMenuOutline } from "react-icons/ti";
import Image from "next/image";
import { useState } from "react";
import Link from "next/link";
import { CiSearch } from "react-icons/ci";
import * as components from "@/components";
import { sidebarFooter, sidebarLinks } from "@/utils/appdata";
import { usePathname } from "next/navigation";
import { FiLogOut } from "react-icons/fi";
import { useCookies } from "next-client-cookies";
import { useRouter } from "next/navigation";

const MobileNavigation = () => {
  const [isActive, setIsActive] = useState();
  const pathname = usePathname();
  const cookies = useCookies();
  const userData = cookies.get("studentData");
  const router = useRouter();

  const handleLogOutUser = () => {
    router.push("/login");
    cookies.remove("studentData"), cookies.remove("studentToken");
  };
  return (
    <nav className="lg:hidden w-full py-3 fixed right-0 left-0 top-0 shadow-md bg-white z-10">
      <section className="w-[90%] mx-auto flex justify-between">
        <div className="flex items-center gap-2">
          <figure className="m-0 p-0 w-[40px] h-[40px] overflow-hidden rounded-[50%] relative">
            <Image fill src="/images/Avatar.png" alt="avatar" />
          </figure>

          <div className="w-fit">
            <h3 className="text-sm font-semibold">
              {userData && JSON.parse(userData).firstName}
            </h3>
            <p className="text-sm">{userData && JSON.parse(userData).email}</p>
          </div>
        </div>

        <button
          className="text-2xl text-buttonColor"
          onClick={() => setIsActive(!isActive)}
        >
          <TiThMenuOutline />
        </button>
      </section>

      <section
        className={`fixed top-[70px] left-0 bottom-0 bg-buttonColor max-w-[280px] w-full transition-all translate-x-[-500px] ${
          isActive && "translate-x-[0px] z-[2]"
        }`}
      >
        <section className="h-full w-full p-4 overflow-y-auto flex flex-col justify-between">
          <div className="mt-10">
            <components.InputWithLeftIcon className="w-full mb-5 max-w-[240px] bg-customGray600 overflow-hidden rounded-lg h-[44px] flex items-center px-3 text-white">
              <CiSearch />
            </components.InputWithLeftIcon>

            <div className="mt-4">
              <ul className="flex flex-col">
                {sidebarLinks.map((link, index) => (
                  <li
                    key={index}
                    className={`flex items-center gap-3 p-2 text-white font-semibold text-base capitalize mt-1 ${
                      pathname === link.url && "bg-fontColor rounded-md"
                    }`}
                  >
                    <span className="text-lg">{link.icon()}</span>
                    <Link href={link.url}>{link.pathname}</Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-10">
            <ul className="flex flex-col">
              {sidebarFooter.map((link, index) => (
                <li
                  key={index}
                  className={`flex items-center gap-3 p-2 text-white font-semibold text-base capitalize mt-1 ${
                    pathname === link.url && "bg-fontColor rounded-md"
                  }`}
                >
                  <span className="text-2xl">{link.icon()}</span>
                  <Link href={link.url}>{link.pathname}</Link>
                </li>
              ))}
            </ul>

            <div className="mt-6 border-t border-t-customGray600 text-white flex gap-3 pt-2">
              <button
                className="text-lg text-customGray400"
                onClick={handleLogOutUser}
              >
                <FiLogOut />
              </button>
              <div className="w-fit">
                <h3 className="text-sm font-semibold">Logout</h3>
              </div>
            </div>
          </div>
        </section>
      </section>
    </nav>
  );
};

export default MobileNavigation;
