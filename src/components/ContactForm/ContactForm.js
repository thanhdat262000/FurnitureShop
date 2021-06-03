import { TextField, Typography } from "@material-ui/core";
import React from "react";
import { Controller, useForm } from "react-hook-form";
import TopTitle from "../TopTitle/TopTitle";
import useStyles from "./styles";
function ContactForm(props) {
  const classes = useStyles();
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  const listInput = [
    { name: "name", label: "Name" },
    { name: "address", label: "Address" },
    {
      name: "number",
      label: "Number",
      rule: { min: 16, max: 99 },
    },
    {
      name: "email ",
      label: "Email",
      rule: {
        pattern: {
          value:
            /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
          message: "Invalid email",
        },
      },
    },
    { name: "content", label: "You want to say..." },
  ];
  return (
    <div className={classes.root}>
      <div className={classes.container}>
        <TopTitle title="CONTACT US" />
        <Typography variant="h4" className={classes.mainTitle}>
          Creative project? Let's have a productive talk.
        </Typography>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className={classes.formContainer}
        >
          {listInput.map((input, index) => (
            <Controller
              key={index}
              name={input.name}
              control={control}
              defaultValue=""
              rules={{ required: true, ...input.rule }}
              render={({ field }) => (
                <TextField
                  {...field}
                  size="small"
                  type={input.name === "number" ? "number" : "text"}
                  error={errors[input.name] !== undefined}
                  variant="outlined"
                  label={input.label}
                  margin="dense"
                  multiline={input.name === "content"}
                  rows={5}
                  helperText={
                    errors[input.name]?.type === "required"
                      ? "This field is required"
                      : errors[input.name]?.type === "pattern"
                      ? "Invalid email"
                      : ""
                  }
                />
              )}
            />
          ))}
          <button type="submit" className={classes.submitButton}>
            <Typography>Send</Typography>
          </button>
        </form>
      </div>
    </div>
  );
}

export default ContactForm;
