import {
  List,
  ListItem,
  ListItemText,
  Paper,
  Typography,
} from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import clsx from "clsx";
import React, { useState } from "react";
import { useLocation } from "react-router";
import { CSSTransition } from "react-transition-group";
import useStyles from "./styles";

function Navlink({ title, listMenu, expand, link }) {
  const classes = useStyles();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const handleHover = () => {
    setIsMenuOpen(true);
  };
  const handleClose = () => {
    setIsMenuOpen(false);
  };
  const { pathname } = useLocation();
  return (
    <div
      className={clsx({
        [classes.root]: true,
        [classes.onMenuClick]: pathname === link,
      })}
      onMouseLeave={handleClose}
    >
      <a href={link} onMouseEnter={handleHover} className={classes.link}>
        <div className={classes.titleContainer}>
          <Typography className={classes.title}>{title}</Typography>
          {expand && <ExpandMoreIcon className={classes.expandIcon} />}
        </div>
        <div className={classes.liner} id="liner"></div>
      </a>
      {expand && (
        <CSSTransition
          in={isMenuOpen}
          timeout={300}
          unmountOnExit
          classNames={{
            enter: classes.menuEnter,
            enterActive: classes.menuEnterActive,
            exit: classes.menuExit,
            exitActive: classes.menuExitActive,
          }}
        >
          <Paper className={classes.menu}>
            <List>
              {listMenu &&
                listMenu.map((menu, index) => (
                  <ListItem
                    className={clsx({
                      [classes.menuItem]: true,
                      [classes.onSubMenuClick]: menu.link === pathname,
                    })}
                    button
                    component="a"
                    href={menu.link}
                    key={index}
                  >
                    <ListItemText>{menu.title}</ListItemText>{" "}
                  </ListItem>
                ))}
            </List>
          </Paper>
        </CSSTransition>
      )}
    </div>
  );
}

export default Navlink;
