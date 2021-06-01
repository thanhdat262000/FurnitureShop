import { Typography } from "@material-ui/core";
import { MailOutline } from "@material-ui/icons";
import React from "react";

function styles(props) {
  return (
    <div>
      <div>
        <MailOutline />
        <Typography>thanhdat@gmail.com</Typography>
        <Typography>
          Email us any time, we usually reply in 24 hours.
        </Typography>
      </div>
    </div>
  );
}

export default styles;
