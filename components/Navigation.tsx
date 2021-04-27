import React, { useState } from "react";
import { IoMenu } from "react-icons/io5"
import Image from "next/image"
interface Props {
  //boolean to always open ddm (for presentation)
  forceOpen?: boolean;
  label?: string;
  withDivider?: boolean;
  icon?: JSX.Element;
  items: DDMItem[];
  withBackground?: boolean;
}

export interface DDMItem {
  icon?: JSX.Element;
  label: string;
  desc?: string;
  link?: string;
}


const Navigation = (props: Props) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <nav className="relative flex flex-row flex-wrap items-center justify-between px-2 py-3 bg-green-500">
        <div className="container px-4 md:px-24 mx-auto flex flex-wrap items-center justify-items-start">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">

            <a
              className="text-sm font-bold leading-relaxed inline-block mr-4 py-1 whitespace-nowrap text-white"
              href="/"
            >
              <div className="flex flex-row">
                <div className="px-2 py-1">Train Name Generator</div>
              </div>
            </a>
            <button
              className="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setIsOpen(!isOpen)}
            >
              <IoMenu />
            </button>
          </div>
          <div
            className={
              "lg:flex flex-grow items-center" + (isOpen ? " flex" : " hidden")
            }
            id="example-navbar-danger"
          >
            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
              {
                props.items.map((item, index) => {
                  return (
                    <li key={index} className="nav-item">
                      <a
                        className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                        href={item.link}
                        title={item.desc}
                      >
                        <span className="ml-2">{item.label}</span>
                      </a>
                    </li>
                  )
                })
              }
            </ul>
          </div>
        </div>
      </nav >
    </>
  );
};
export default Navigation;
