import React from "react";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
import {
  Drawer,
  List,
  ListItem,
  ListItemText,
  Collapse,
} from "@material-ui/core";
import clsx from "clsx";
import useStyles from "./styles";
function CustomDrawer({
  isDesignMenuOpen,
  isOpen,
  handleDesignMenu,
  handleMenu,
  isConstructionMenuOpen,
  handleConstructionMenu,
  listMenu,
}) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Drawer
        className={classes.drawer}
        anchor="right"
        open={isOpen}
        onClose={handleMenu}
      >
        <List>
          {listMenu.map((menu, index) =>
            menu.expand ? (
              <div key={index}>
                <ListItem
                  className={clsx(classes.link, classes.linkText)}
                  button
                  onClick={
                    menu.title === "thiết kế"
                      ? handleDesignMenu
                      : handleConstructionMenu
                  }
                >
                  <ListItemText>
                    <a href={`/${menu.link}`} className={classes.linkText}>
                      {menu.title}
                    </a>
                  </ListItemText>
                  {menu.title === "thiết kế" ? (
                    isDesignMenuOpen ? (
                      <ExpandLess />
                    ) : (
                      <ExpandMore />
                    )
                  ) : isConstructionMenuOpen ? (
                    <ExpandLess />
                  ) : (
                    <ExpandMore />
                  )}
                </ListItem>
                <Collapse
                  in={
                    menu.title === "thiết kế"
                      ? isDesignMenuOpen
                      : isConstructionMenuOpen
                  }
                  unmountOnExit
                >
                  <List disablePadding className={classes.nested}>
                    {menu.listSubMenu.map((subMenu, index) => (
                      <ListItem className={classes.link} key={index}>
                        <ListItemText>{subMenu}</ListItemText>
                      </ListItem>
                    ))}
                  </List>
                </Collapse>{" "}
              </div>
            ) : (
              <ListItem
                key={index}
                className={clsx(classes.link, classes.linkText)}
                component="a"
                href={`/${menu.link}`}
              >
                <ListItemText>{menu.title}</ListItemText>
              </ListItem>
            )
          )}
          {/* <ListItem className={classes.link} component="a" href="/">
            <ListItemText>TRANG CHỦ</ListItemText>
          </ListItem>
          <ListItem>
            <ListItemText>GIỚI THIỆU</ListItemText>
          </ListItem>
          <ListItem button onClick={handleDesignMenu}>
            <ListItemText>THIẾT KẾ</ListItemText>
            {isDesignMenuOpen ? <ExpandLess /> : <ExpandMore />}
          </ListItem>
          <Collapse in={isDesignMenuOpen} unmountOnExit>
            <List disablePadding className={classes.nested}>
              <ListItem>
                <ListItemText>THIẾT KẾ NỘI THẤT BIỆT THỰ</ListItemText>
              </ListItem>
              <ListItem>
                <ListItemText>THIẾT KẾ NỘI THẤT KHÁCH SẠN</ListItemText>
              </ListItem>
              <ListItem>
                <ListItemText>THIẾT KẾ NỘI THẤT CHUNG CƯ</ListItemText>
              </ListItem>
              <ListItem>
                <ListItemText>THIẾT KẾ NỘI THẤT NHÀ PHỐ</ListItemText>
              </ListItem>
            </List>
          </Collapse>
          <ListItem button onClick={handleConstructionMenu}>
            <ListItemText>THI CÔNG</ListItemText>
            {isConstructionMenuOpen ? <ExpandLess /> : <ExpandMore />}
          </ListItem>
          <Collapse in={isConstructionMenuOpen} unmountOnExit>
            <List disablePadding className={classes.nested}>
              <ListItem>
                <ListItemText>THI CÔNG NỘI THẤT BIỆT THỰ</ListItemText>
              </ListItem>
              <ListItem>
                <ListItemText>THI CÔNG NỘI THẤT KHÁCH SẠN</ListItemText>
              </ListItem>
              <ListItem>
                <ListItemText>THI CÔNG NỘI THẤT CHUNG CƯ</ListItemText>
              </ListItem>
              <ListItem>
                <ListItemText>THI CÔNG NỘI THẤT NHÀ PHỐ</ListItemText>
              </ListItem>
            </List>
          </Collapse>
          <ListItem>
            <ListItemText>TIN TỨC</ListItemText>
          </ListItem>
          <ListItem>
            <ListItemText>LIÊN HỆ</ListItemText>
          </ListItem> */}
        </List>
      </Drawer>
    </div>
  );
}

export default CustomDrawer;
