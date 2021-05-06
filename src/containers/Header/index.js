import React, { useState } from "react";
import MenuIcon from "@material-ui/icons/Menu";
import Navlink from "../../components/Navlink/Navlink";
import useStyles from "./styles";
import { IconButton } from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
const Header = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const classes = useStyles({ open: isOpen });
  const handleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className={classes.root}>
      <div className={classes.content}>
        <div className={classes.logo}>
          <img src="/img/logo1.png" alt="logo" />
        </div>
        <div className={classes.navLink}>
          <Navlink title="TRANG CHỦ" />
          <Navlink title="GIỚI THIỆU" />
          <Navlink title="SẢN PHẨM" />
          <Navlink title="THIẾT KẾ NỘI THẤT" />
          <Navlink title="THIẾT KẾ KIẾN TRÚC" />
          <Navlink title="CHẤT LIỆU" />
          <Navlink title="TIN TỨC" />
          <Navlink title="LIÊN HỆ" />
        </div>
        <IconButton className={classes.menuIcon} onClick={handleMenu}>
          {isOpen ? <CloseIcon /> : <MenuIcon />}
        </IconButton>
      </div>
    </div>
  );
};

export default Header;
