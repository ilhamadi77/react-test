import type { MenuProps } from "antd";
import { Menu } from "antd";
import { useState } from "react";
import { Link } from "react-router-dom";

const items: MenuProps["items"] = [
  {
    label: <Link to={"/home/technology"}>Technology</Link>,
    key: "technology",
  },
  {
    label: <Link to={"/home/tesla"}>Tesla</Link>,
    key: "tesla",
  },
  {
    label: <Link to={"/home/playstation"}>Playstation</Link>,
    key: "playstation",
  },
  {
    label: <Link to={"/home/netflix"}>Netflix</Link>,
    key: "netflix",
  },

  {
    label: <Link to={"/home/gaming"}>Gaming</Link>,
    key: "gaming",
  },
];

const Navbar: React.FC = () => {
  const [current, setCurrent] = useState("technology");

  const onClick: MenuProps["onClick"] = (e) => {
    console.log("click ", e);
    setCurrent(e.key);
  };

  return (
    <Menu
      style={{
        display: "flex",
        justifyContent: "space-between",
      }}
      onClick={onClick}
      selectedKeys={[current]}
      mode="horizontal"
      items={items}
    />
  );
};

export default Navbar;
