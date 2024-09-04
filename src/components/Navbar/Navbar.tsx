import { NAVBAR_DUMMY_DATA } from "../../data/navbar-data";

import NavbarItem from "./NavbarItem";
import Logo from "../../assets/images/logo.png";

function Navbar() {
  const data = NAVBAR_DUMMY_DATA;
  return (
    <nav className="fixed left-0 top-0 flex w-full justify-between px-14 py-4">
      <div className="flex items-center gap-16">
        <div>
          <img src={Logo} alt="this is logo of app" />
        </div>
        <ul className="flex items-center gap-8 text-sm">
          {data.map((data) => (
            <NavbarItem key={data.id} itemData={data} />
          ))}
        </ul>
      </div>
      <div className="flex items-center gap-8">
        <p className="capitalize">signIn</p>
        <button
          className="rounded-lg bg-yellow-100 px-6 py-2 capitalize"
          type="button"
        >
          become a member
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
