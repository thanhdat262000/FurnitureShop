import React, { useState } from "react";
import { isMobile } from "react-device-detect";
import {
  List,
  ListItem,
  ListItemText,
  Paper,
  Typography,
} from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import useStyles from "./styles";
import { CSSTransition } from "react-transition-group";

function Navlink({ title, listMenu, expand, link }) {
  const classes = useStyles();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const handleHover = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <div className={classes.root} onMouseLeave={handleHover}>
      <a
        href={`/${link}`}
        onMouseEnter={handleHover}
        className={classes.link}
        onClick={isMobile && handleHover}
      >
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
                    className={classes.menuItem}
                    button
                    component="a"
                    href="#"
                    key={index}
                  >
                    <ListItemText>{menu}</ListItemText>{" "}
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
