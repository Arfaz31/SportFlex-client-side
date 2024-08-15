import logo from "@/assets/Sports.png";
import {
  File,
  LineChart,
  MessageSquarePlus,
  ShoppingBag,
  SquarePen,
  SquarePlus,
} from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const [activeLink, setActiveLink] = useState<string>("/admin-dashboard");

  const handleLinkClick = (link: string) => {
    setActiveLink(link);
  };
  return (
    <aside className=" ">
      <div>
        <div className="h-[59px]">
          <div className="pt-4 pl-2">
            <Link className="flex items-center gap-2  " to="/">
              <img className=" xl:w-[38px] w-[30px] " src={logo} alt="logo" />
              <span className=" xl:text-3xl text-2xl text-white  font-bold">
                SPORT<span className="text-[#00cde5]">FLEX</span>
              </span>
            </Link>
          </div>
        </div>
        <hr className="opacity-30" />
        <div className="p-2">
          <div className="mt-3">
            <h1 className="bg-[#052e60] text-zinc-200 px-5 pt-3 pb-3">Admin</h1>
            <ul className="flex flex-col gap-7 border border-[#113969] pl-5 pt-4 pb-4">
              <Link to="/admin-dashboard">
                <li
                  onClick={() => handleLinkClick("/admin-dashboard")}
                  className={`rounded-md text-sm flex items-center gap-2 ${
                    activeLink === "/admin-dashboard"
                      ? " text-[#e4e4e7]"
                      : "text-zinc-400"
                  }`}
                >
                  <span>
                    <LineChart />
                  </span>
                  Insight
                </li>
              </Link>
              <Link to="/admin-dashboard/create-product">
                <li
                  onClick={() =>
                    handleLinkClick("/admin-dashboard/create-product")
                  }
                  className={`rounded-md text-sm flex items-center gap-2 ${
                    activeLink === "/admin-dashboard/create-product"
                      ? " text-[#e4e4e7]"
                      : "text-zinc-400"
                  }`}
                >
                  <span>
                    <SquarePlus />
                  </span>
                  Add Product
                </li>
              </Link>
              <Link to="/admin-dashboard/all-products">
                <li
                  onClick={() =>
                    handleLinkClick("/admin-dashboard/all-products")
                  }
                  className={`rounded-md text-sm flex items-center gap-2 ${
                    activeLink === "/admin-dashboard/all-products"
                      ? " text-[#e4e4e7]"
                      : "text-zinc-400"
                  }`}
                >
                  <span>
                    <ShoppingBag />
                  </span>
                  ALL Products
                </li>
              </Link>
              <Link to="/admin-dashboard/manage-product">
                <li
                  onClick={() =>
                    handleLinkClick("/admin-dashboard/manage-product")
                  }
                  className={`rounded-md text-sm flex items-center gap-2 ${
                    activeLink === "/admin-dashboard/manage-product"
                      ? " text-[#e4e4e7]"
                      : "text-zinc-400"
                  }`}
                >
                  <span>
                    <SquarePen />
                  </span>
                  Manage Products
                </li>
              </Link>
              <Link to="/admin-dashboard/create-blogs">
                <li
                  onClick={() =>
                    handleLinkClick("/admin-dashboard/create-blogs")
                  }
                  className={`rounded-md text-sm flex items-center gap-2 ${
                    activeLink === "/admin-dashboard/create-blogs"
                      ? " text-[#e4e4e7]"
                      : "text-zinc-400"
                  }`}
                >
                  <span>
                    <MessageSquarePlus />
                  </span>
                  Add Blogs
                </li>
              </Link>
              <Link to="/admin-dashboard/all-blogs">
                <li
                  onClick={() => handleLinkClick("/admin-dashboard/blogs")}
                  className={`rounded-md text-sm flex items-center gap-2 ${
                    activeLink === "/admin-dashboard/blogs"
                      ? " text-[#e4e4e7]"
                      : "text-zinc-400"
                  }`}
                >
                  <span>
                    <File />
                  </span>
                  All Blogs
                </li>
              </Link>
            </ul>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
