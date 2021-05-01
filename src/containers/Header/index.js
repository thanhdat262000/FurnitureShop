import React from "react";
import Navlink from "../../components/Navlink/Navlink";
import useStyles from "./styles";
const Header = (props) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.content}>
        <div>
          <img src="/img/logo.png" alt="logo" />
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
      </div>
    </div>
  );
};

export default Header;
