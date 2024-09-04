import { NavbarTypes } from "../../types/navbar-type";

import AnchorLink from "react-anchor-link-smooth-scroll";

function NavbarItem({ itemData }: { itemData: NavbarTypes }) {
  return (
    <li className="transition duration-500 hover:text-red-300">
      <AnchorLink href={itemData.path}>{itemData.title}</AnchorLink>
    </li>
  );
}

export default NavbarItem;
