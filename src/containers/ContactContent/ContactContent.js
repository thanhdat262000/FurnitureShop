import {
  MailOutlineRounded,
  PermPhoneMsgOutlined,
  HomeWorkOutlined,
} from "@material-ui/icons";
import React from "react";
import ContactCard from "../../components/ContactCard/ContactCard";
import ContactForm from "../../components/ContactForm/ContactForm";
import useStyles from "./styles";

function ContactContent(props) {
  const classes = useStyles();
  const listContacts = [
    {
      icon: <PermPhoneMsgOutlined />,
      contactInfo: "(+84) 966 998 657",
      content: "Call us any time from 08:00 till 17:00 Mon-Fri",
    },
    {
      icon: <MailOutlineRounded />,
      contactInfo: "furniture@gmail.com",
      content: "Email us anytime, we usually response in 24 hours",
    },
    {
      icon: <HomeWorkOutlined />,
      contactInfo: "Hiep Hòa, Bac Giang",
      content: "Schedule your meeting before your visit",
    },
  ];
  return (
    <div className={classes.root}>
      <div className={classes.container}>
        <div className={classes.cardContainer}>
          {listContacts.map((contact, index) => (
            <ContactCard
              key={index}
              icon={contact.icon}
              contactInfo={contact.contactInfo}
              content={contact.content}
            />
          ))}
        </div>
        <div>
          <ContactForm />
        </div>
      </div>
    </div>
  );
}

export default ContactContent;
