import Link from "next/link";

import {
  LeftOutlined,
  OrderedListOutlined,
  UnorderedListOutlined,
} from "@ant-design/icons";

const Navbar = () => (
  <nav className="navbar">
    <Link href="/admin">
      <a className="navbar-brand">
        <LeftOutlined /> Go back
      </a>
    </Link>
    
  </nav>
);

export default Navbar;
