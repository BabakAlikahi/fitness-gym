import { useEffect, useState } from "react";

import { NAVBAR_DUMMY_DATA } from "../../data/navbar-data";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/16/solid";

import NavbarItem from "./NavbarItem";
import Logo from "../../assets/images/logo.png";
import useMediaQuery from "../../hooks/useMediaQuery";

type Props = {
  isTopOfPage: boolean;
};

function Navbar({ isTopOfPage }: Props) {
  const data = NAVBAR_DUMMY_DATA;
  const [isMenuToggle, setIsMenuToggle] = useState<boolean>(false);
  const isAboveMediumSize = useMediaQuery("(min-width:1060px)");
  const navbarBg = !isTopOfPage ? "bg-orange-300" : "";
  useEffect(() => {
    if (isAboveMediumSize) {
      setIsMenuToggle(false);
    }
  }, [isAboveMediumSize]);
console.log(isTopOfPage);

  return (
    <nav
      className={`fixed left-0 top-0 flex w-full justify-between px-6 py-4 lg:px-14 ${navbarBg}`}
    >
      <div className="flex items-center gap-16">
        <div>
          <img src={Logo} alt="this is logo of app" />
        </div>
        {isAboveMediumSize && (
          <ul className="flex items-center gap-8 text-sm">
            {data.map((data) => (
              <NavbarItem key={data.id} itemData={data} />
            ))}
          </ul>
        )}
      </div>
      <div className="flex items-center gap-8">
        {isAboveMediumSize ? (
          <>
            <p className="capitalize">signIn</p>
            <button
              className="rounded-lg bg-orange-300 px-6 py-2 capitalize text-white"
              type="button"
            >
              become a member
            </button>
          </>
        ) : (
          <>
            <button
              onClick={() => {
                setIsMenuToggle(!isMenuToggle);
              }}
              className="rounded-full bg-orange-300 p-2"
            >
              <Bars3Icon className="h-6 w-6 text-white" />
            </button>
          </>
        )}
      </div>

      {!isAboveMediumSize && isMenuToggle && (
        // mobile menu
        <div className="fixed bottom-0 right-0 h-full w-[300px] bg-orange-200 p-2 drop-shadow-xl">
          <div className="flex justify-end">
            <button
              onClick={() => {
                setIsMenuToggle(false);
              }}
            >
              <XMarkIcon className="h-6 w-6 text-gray-500" />
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
