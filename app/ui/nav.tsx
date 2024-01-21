'use client'

import React, { useContext } from "react";
import {
  Navbar,
  Collapse,
  Typography,
  IconButton,
} from "../materialTailwind";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { useRouter } from "next/navigation";
import { commonContext } from "../commonContext";
 
function NavList() {

  const router = useRouter()
  
  return (
    <ul className="my-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <Typography
        as="li"
        variant="small"
        color="white"
        className="p-1 font-medium" placeholder={undefined}      >
        <p onClick={() => {
          router.push('/workbench')
        }} className="flex items-center hover:text-red-500 hover:cursor-pointer transition-colors">
          Home
        </p>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="white"
        className="p-1 font-medium" placeholder={undefined}      >
        <p onClick={() => {
          router.push('/workbench/zookeeper')
        }} className="flex items-center hover:text-red-500 hover:cursor-pointer transition-colors">
          Zookeeper
        </p>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="white"
        className="p-1 font-medium" placeholder={undefined}      >
        <p onClick={() => {
          router.push('/workbench/market')
        }} className="flex items-center hover:text-red-500 hover:cursor-pointer transition-colors">
          Market
        </p>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="white"
        className="p-1 font-medium" placeholder={undefined}      >
        <p onClick={() => {
          router.push('/workbench/randomCats')
        }} className="flex items-center hover:text-red-500 hover:cursor-pointer transition-colors">
          Recommand
        </p>
      </Typography>
    </ul>
  );
}
 
export function NavbarSimple() {

  const router = useRouter()

  const {commanderDna} = useContext(commonContext)

  const [openNav, setOpenNav] = React.useState(false);
 
  const handleWindowResize = () =>
    window.innerWidth >= 960 && setOpenNav(false);
 
  React.useEffect(() => {
    window.addEventListener("resize", handleWindowResize);
 
    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);
 
  return (
    <Navbar className="mx-auto max-w-screen-xl px-6 py-3" color="orange" placeholder={undefined}>
      <div className="flex items-center justify-between text-white">
        <div className="flex">
        <Typography
            variant="h6"
            className="mr-4 cursor-pointer py-1.5"
            onClick={() => {
              router.push('/');
            } } placeholder={undefined}        >
          HashCatWeb3.0
        </Typography>
        <img
      className="h-10 w-10 rounded-full object-cover object-center"
      src={`https://robohash.org/${commanderDna}?set=set5`}
      alt="commander header"
    />        </div>
        <div className="hidden lg:block">
          <NavList />
        </div>
        <IconButton
          variant="text"
          className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
          ripple={false}
          onClick={() => setOpenNav(!openNav)} placeholder={undefined}        >
          {openNav ? (
            <XMarkIcon className="h-6 w-6" strokeWidth={2} />
          ) : (
            <Bars3Icon className="h-6 w-6" strokeWidth={2} />
          )}
        </IconButton>
      </div>
      <Collapse open={openNav}>
        <NavList />
      </Collapse>
    </Navbar>
  );
}