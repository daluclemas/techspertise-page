"use client";
import * as components from "@/components";
import { sidebarFooter, sidebarLinks } from "@/utils/appdata";
import { CiSearch } from "react-icons/ci";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { FiLogOut } from "react-icons/fi";
import { useCookies } from "next-client-cookies";
import { useRouter } from "next/navigation";

const Sidebar = () => {
  const pathname = usePathname();
  const cookies = useCookies();
  const userData = cookies.get("studentData");
  const router = useRouter();
  const handleLogOutUser = () => {
    router.push("/login");
    cookies.remove("studentData"), cookies.remove("studentToken");
  };
  return (
    <aside className="fixed top-0 left-0 max-w-[280px] bottom-0 w-full hidden lg:block">
      <section className="h-full w-full p-6 overflow-y-auto flex flex-col justify-between">
        <div className="mt-10">
          <components.InputWithLeftIcon className="w-full mb-5 max-w-[240px] bg-customGray600 overflow-hidden rounded-lg h-[44px] flex items-center px-3 text-white">
            <CiSearch />
          </components.InputWithLeftIcon>

          <div className="mt-6">
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

        <div className="mt-16">
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

          <div className="mt-6 border-t border-t-customGray600 py-2 text-white flex justify-between gap-1">
            <div className="flex items-center gap-2">
              <figure className="m-0 p-0 w-[40px] h-[40px] overflow-hidden rounded-[50%] relative">
                <Image fill src="/images/Avatar.png" alt="avatar" />
              </figure>

              <div className="w-fit">
                <h3 className="text-sm font-semibold">
                  {userData && JSON.parse(userData).firstName}
                </h3>
                <p className="text-sm">
                  {userData && JSON.parse(userData).email}
                </p>
              </div>
            </div>

            <button
              className="text-lg text-customGray400"
              onClick={handleLogOutUser}
            >
              <FiLogOut />
            </button>
          </div>
        </div>
      </section>
    </aside>
  );
};

export default Sidebar;
