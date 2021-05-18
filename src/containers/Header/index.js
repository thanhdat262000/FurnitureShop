import React, { useState } from "react";
import MenuIcon from "@material-ui/icons/Menu";
import Navlink from "../../components/Navlink/Navlink";
import { IconButton } from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
import useStyles from "./styles";
import CustomDrawer from "../../components/Drawer/CustomDrawer";
const Header = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDesignMenuOpen, setDesignMenu] = useState(false);
  const [isConstructionMenuOpen, setConstructionMenu] = useState(false);
  const classes = useStyles({ open: isOpen });
  const handleMenu = () => {
    setIsOpen(!isOpen);
  };
  const handleDesignMenu = () => {
    setDesignMenu(!isDesignMenuOpen);
  };
  const handleConstructionMenu = () => {
    setConstructionMenu(!isConstructionMenuOpen);
  };
  const listMenu = [
    { title: "trang chủ", link: "" },
    { title: "giới thiệu", link: "about" },
    {
      title: "thiết kế",
      expand: true,
      listSubMenu: [
        "thiết kế nội thất biệt thự",
        "thiết kế nội thất chung cư",
        "thiết kế nội thất khách sạn",
        "thiết kế nội thất nhà phố",
      ],
      link: "design",
    },
    {
      title: "thi công",
      expand: true,
      listSubMenu: [
        "thi công nội thất biệt thự",
        "thi công nội thất chung cư",
        "thi công nội thất khách sạn",
        "thi công nội thất nhà phố",
      ],
      link: "construction",
    },
    { title: "tin tức", link: "news" },
    { title: "liên hệ", link: "contact" },
  ];
  // const listMenu = {
  //   design: [
  //     "THIẾT KẾ NỘI THẤT BIỆT THỰ",
  //     "THIẾT KẾ NỘI THẤT KHÁCH SẠN",
  //     "THIẾT KẾ NỘI THẤT CHUNG CƯ",
  //     "THIẾT KẾ NỘI THẤT NHÀ PHỐ",
  //   ],
  //   contruction: [
  //     "THI CÔNG NỘI THẤT BIỆT THỰ",
  //     "THI CÔNG NỘI THẤT KHÁCH SẠN",
  //     "THI CÔNG NỘI THẤT CHUNG CƯ",
  //     "THI CÔNG NỘI THẤT NHÀ PHỐ",
  //   ],
  // };
  return (
    <div className={classes.root}>
      <div className={classes.content}>
        <div className={classes.logo}>
          <img src="/img/logo1.png" alt="logo" />
        </div>
        <CustomDrawer
          isOpen={isOpen}
          isDesignMenuOpen={isDesignMenuOpen}
          handleMenu={handleMenu}
          handleDesignMenu={handleDesignMenu}
          isConstructionMenuOpen={isConstructionMenuOpen}
          handleConstructionMenu={handleConstructionMenu}
          listMenu={listMenu}
        />
        <div className={classes.navLink}>
          {listMenu.map((menu, index) =>
            menu.expand ? (
              <Navlink
                key={index}
                title={menu.title}
                expand={menu.expand}
                listMenu={menu.listSubMenu}
                link={menu.link}
              />
            ) : (
              <Navlink key={index} title={menu.title} link={menu.link} />
            )
          )}
        </div>
        <IconButton className={classes.menuIcon} onClick={handleMenu}>
          {isOpen ? <CloseIcon /> : <MenuIcon />}
        </IconButton>
      </div>
    </div>
  );
};

export default Header;
