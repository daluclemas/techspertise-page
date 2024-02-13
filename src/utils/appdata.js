import { RiHome3Line } from "react-icons/ri";
import { HiOutlineChartSquareBar } from "react-icons/hi";
import { FiUsers } from "react-icons/fi";
import { ImStack } from "react-icons/im";
import { HiOutlineSupport } from "react-icons/hi";
import { GoGear } from "react-icons/go";

export const sidebarLinks = [
  {
    url: "#",
    pathname: "home",
    icon: () => <RiHome3Line />,
  },

  {
    url: "#",
    pathname: "courses",
    icon: () => <HiOutlineChartSquareBar />,
  },

  {
    url: "/student",
    pathname: "students",
    icon: () => <FiUsers />,
  },
  {
    url: "#",
    pathname: "wallet",
    icon: () => <ImStack />,
  },
];

export const sidebarFooter = [
  {
    url: "#",
    pathname: "support",
    icon: () => <HiOutlineSupport />,
  },
  {
    url: "#",
    pathname: "settings",
    icon: () => <GoGear />,
  },
];

export const dashCard = [
  {
    total: "2,420",
    title: "total students",
  },
  {
    total: "1,210",
    title: "active students",
  },
];

export const tableData = [
  {
    name: "tunde owokoniran",
    course: "product design",
    date: "Jan 4, 2021",
    cohort: 1,
    status: false,
  },
  {
    name: "Olanrewaju Oluwagbemi",
    course: "web development",
    date: "Jan 4, 2022",
    cohort: 2,
    status: true,
  },
  {
    name: "Olakunke Isreal",
    course: "mobile development",
    date: "Jan 2, 2022",
    cohort: 1,
    status: false,
  },
  {
    name: "John Badmus",
    course: "digital marketing",
    date: "Jan 6, 2022",
    cohort: 1,
    status: false,
  },
  {
    name: "adeleke john",
    course: "product design",
    date: "Jan 8, 2022",
    cohort: 2,
    status: true,
  },

  {
    name: "judas iscariot",
    course: "web development",
    date: "Jan 6, 2022",
    cohort: 1,
    status: true,
  },
];
