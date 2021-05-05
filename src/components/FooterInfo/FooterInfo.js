import { Typography } from "@material-ui/core";
import React from "react";
import Divider from "@material-ui/core/Divider";
import NavigateNextOutlinedIcon from "@material-ui/icons/NavigateNextOutlined";
import useStyles from "./styles";
function FooterInfo({ intro, title, contact, links }) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.container}>
        <Typography className={classes.title}>{title}</Typography>
        <Divider className={classes.dividerColor} />
        {intro && (
          <Typography variant="caption" className={classes.navLinkContainer}>
            {intro}
          </Typography>
        )}
        {contact && (
          <div className={classes.navLinkContainer}>
            <div>
              <Typography variant="caption">Phone: {contact.phone}</Typography>{" "}
            </div>
            <div>
              <Typography variant="caption">Email: {contact.email}</Typography>{" "}
            </div>
            <div>
              <Typography variant="caption">
                Địa chỉ: {contact.address}
              </Typography>{" "}
            </div>
          </div>
        )}
        {links && (
          <div className={classes.navLinkContainer}>
            {links.map((link, index) => (
              <div className={classes.navLink} key={index}>
                <NavigateNextOutlinedIcon />
                <Typography variant="caption">{link}</Typography>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default FooterInfo;
