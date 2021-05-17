import React, { useState } from "react";
import MenuIcon from "@material-ui/icons/Menu";
import Navlink from "../../components/Navlink/Navlink";
import { IconButton, Menu } from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
import useStyles from "./styles";
const Header = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const classes = useStyles({ open: isOpen });
  const handleMenu = () => {
    setIsOpen(!isOpen);
  };
  const listMenu = {
    design: [
      "THIẾT KẾ NỘI THẤT BIỆT THỰ",
      "THIẾT KẾ NỘI THẤT KHÁCH SẠN",
      "THIẾT KẾ NỘI THẤT CHUNG CƯ",
      "THIẾT KẾ NỘI THẤT NHÀ PHỐ",
    ],
    contruction: [
      "THI CÔNG NỘI THẤT BIỆT THỰ",
      "THI CÔNG NỘI THẤT KHÁCH SẠN",
      "THI CÔNG NỘI THẤT CHUNG CƯ",
      "THI CÔNG NỘI THẤT NHÀ PHỐ",
    ],
  };
  return (
    <div className={classes.root}>
      <div className={classes.content}>
        <div className={classes.logo}>
          <img src="/img/logo1.png" alt="logo" />
        </div>
        <div className={classes.navLink}>
          <Navlink title="TRANG CHỦ" link="" />
          <Navlink title="GIỚI THIỆU" link="about" />
          <Navlink
            title="THIẾT KẾ"
            expand={true}
            listMenu={listMenu.design}
            link="design"
          />
          <Navlink
            title="THI CÔNG"
            expand={true}
            listMenu={listMenu.contruction}
            link="construction"
          />
          <Navlink title="TIN TỨC" link="news" />
          <Navlink title="LIÊN HỆ" link="contact" />
        </div>
        <IconButton className={classes.menuIcon} onClick={handleMenu}>
          {isOpen ? <CloseIcon /> : <MenuIcon />}
        </IconButton>
      </div>
    </div>
  );
};

export default Header;
