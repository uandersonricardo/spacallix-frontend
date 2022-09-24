import React, { Fragment } from "react";

import { Menu, Transition } from "@headlessui/react";
import { TbRocket } from "react-icons/tb";
import { Link } from "wouter";

const menu = [
  {
    label: "Próximo lançamento",
    to: "/next"
  },
  {
    label: "Último lançamento",
    to: "/latest"
  },
  {
    label: "Próximos lançamentos",
    to: "/upcoming"
  },
  {
    label: "Lançamentos passados",
    to: "/past"
  }
];

const HeaderDropdown: React.FC = () => {
  return (
    <Menu as="div" className="relative inline-block text-left">
      <Menu.Button className="flex p-2 text-lg items-center justify-center bg-gradient-to-tl from-pink-600 to-purple-600 text-white/75 hover:text-white rounded-lg hover:opacity-100 transition duration-200">
        <TbRocket />
      </Menu.Button>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="px-1 py-1 ">
            {menu.map(item => (
              <Link to={item.to} key={item.to}>
                <a>
                  <Menu.Item>
                    {({ active }) => (
                      <button
                        className={`${
                          active ? "bg-gray-200 text-black" : "text-gray-900"
                        } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                      >
                        {item.label}
                      </button>
                    )}
                  </Menu.Item>
                </a>
              </Link>
            ))}
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
};

export default HeaderDropdown;
