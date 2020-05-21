import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import Link from "next/link";

const useStyles = makeStyles((theme) => ({
  dropdown: {
    position: "relative",
    display: "inlineBlock",
    "&:hover": {
      "& a": {
        display: "block",
      },
    },
  },
  dropdownContent: {
    position: "absolute",
    backgroundColor: "#f1f1f1",
    minWidth: "100%",
    boxShadow: "0px 8px 16px 0px rgba(0,0,0,0.2)",
    overflow: "auto",
    zIndex: 1,
    "& a": {
      color: "black",
      padding: "12px 16px",
      textDecoration: "none",
      display: "none",
      "&:hover": {
        backgroundColor: "#ddd",
      },
    },
  },
}));

export default function Dropdown() {
  const classes = useStyles();

  return (
    <>
      <div className={classes.dropdown}>
        <Button>Our Stories</Button>
        <div className={classes.dropdownContent}>
          <Button className={classes.dropdownTesto} href="#">
            Meet our Staff
          </Button>
          <Button className={classes.dropdownTesto} href="#">
            Meet our Students
          </Button>
        </div>
      </div>
    </>
  );
}
