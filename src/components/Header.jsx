"use client";

import { Avatar, Dropdown, Navbar } from "flowbite-react";
import { useContext, useState } from "react";
import { FaSearch } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";
import ServiceCard from "../pages/ServiceCard";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [services, setServices] = useState([ServiceCard]); // Replace with your list of services
  const filteredServices = services.filter((service) =>
    service.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };
  console.log(user);
  const handleSignOut = () => {
    logOut().then().catch();
  };
  return (
    <header className="bg-slate-200 shadow-md">
      <div className="flex justify-between items-center max-w-6xl mx-auto p-3">
        <h1 className="font-bold text-sm sm:text-xl flex flex-wrap">
          <span className="text-slate-500 first-line:">Next</span>
          <span className="text-slate-700"> Dore</span>
        </h1>

        <form className="bg-slate-100 p-3 rounded-lg flex items-center">
          <input
            type="text"
            placeholder="Search..."
            className="bg-transparent border-none w-24 sm:w-64"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <FaSearch className="text-slate-600"></FaSearch>
        </form>
        <ul className="flex gap-4">
          <NavLink to="/">
            <li className="hidden sm:inline text-slate-700 hover:underline">
              Home
            </li>
          </NavLink>
          <NavLink to="/services">
            <li className="hidden sm:inline text-slate-700 hover:underline">
              Services
            </li>
          </NavLink>
          {/* <NavLink to="/login">
            <li className="hidden sm:inline text-slate-700 hover:underline">
              Login
            </li>
          </NavLink> */}
          {user ? (
            <li className="flex gap-2">
              <div>
                <li
                  onClick={toggleDropdown}
                  className="hidden sm:inline text-slate-700 hover:underline cursor-pointer"
                >
                  Dashboard
                  {isDropdownOpen && (
                    <div className="absolute right-0 mt-2 w-48 bg-white border rounded-md shadow-md z-10">
                      <div className="p-2">
                        <p className="text-sm font-semibold">
                          {user.displayName}
                        </p>
                        <p className="text-xs text-gray-600">{user.email}</p>
                      </div>
                      <div className="border-t p-2">
                        <NavLink to="/add-service">
                          <p className="cursor-pointer text-sm text-red-500">
                            Add Services
                          </p>
                        </NavLink>
                        <NavLink to="/my-schedules">
                          <p className="cursor-pointer text-sm text-red-500">
                            My Schedual
                          </p>
                        </NavLink>
                        <NavLink to="/manage-service">
                          <p className="cursor-pointer text-sm text-red-500">
                            Manage Service
                          </p>
                        </NavLink>

                        <p className="cursor-pointer text-sm text-red-500">
                          Logout
                        </p>
                      </div>
                    </div>
                  )}
                </li>
              </div>
              {/* <div className="relative group">
                <img
                  src={user.photoURL}
                  alt="User Profile"
                  className="h-10 w-10 rounded-full cursor-pointer group-hover:shadow-md"
                />
              </div> */}

              <Dropdown
                arrowIcon={false}
                inline
                label={
                  <Avatar alt="User settings" img={user.photoURL} rounded />
                }
              >
                <Dropdown.Header>
                  <span className="block text-sm">{user.displayName}</span>
                  <span className="block truncate text-sm font-medium">
                    {user.email}
                  </span>
                </Dropdown.Header>
                <Dropdown.Item>Dashboard</Dropdown.Item>
                <Dropdown.Item>Settings</Dropdown.Item>

                <Dropdown.Divider />
                <Dropdown.Item onClick={handleSignOut}>Sign out</Dropdown.Item>
              </Dropdown>
            </li>
          ) : (
            <NavLink to="/login">
              <li className="hidden sm:inline text-slate-700 hover:underline">
                Login
              </li>
            </NavLink>
          )}
        </ul>
      </div>
    </header>
  );
};

export default Header;
