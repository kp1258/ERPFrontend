import React from "react";

import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Drawer from "@material-ui/core/Drawer";
import Toolbar from "@material-ui/core/Toolbar";
import Divider from "@material-ui/core/Divider";
import List from "@material-ui/core/List";
import Typography from "@material-ui/core/Typography";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import { makeStyles } from "@material-ui/core/styles";
import "./index.css";

const drawerWidth = 240;
const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    backgroundColor: "gray",
  },
  drawerPaper: {
    width: drawerWidth,
    backgroundColor: "gray",
  },
  drawerContainer: {
    overflow: "auto",
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  listItem: {
    backgroundColor: "gray",
  },
}));

const NavMenu = (props) => {
  const classes = useStyles();
  return (
    <>
      <div classNam={classes.root}>
        <Drawer
          className={classes.drawer}
          variant="permanent"
          classes={{
            paper: classes.drawerPaper,
          }}
        >
          <Toolbar />
          <div className={classes.drawerContainer}>
            {props.options.map((option) => (
              <Accordion key={option.id} className={classes.listItem}>
                <AccordionSummary
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Typography className={classes.heading}>
                    {option.sectionName}
                  </Typography>
                </AccordionSummary>
                <Divider />
                <AccordionDetails>
                  <List>
                    {option.subsections.map((subsection) => (
                      <ListItem
                        key={subsection.id}
                        button
                        component="a"
                        href={subsection.ref}
                      >
                        <ListItemText>{subsection.name}</ListItemText>
                      </ListItem>
                    ))}
                  </List>
                </AccordionDetails>
              </Accordion>
            ))}
          </div>
        </Drawer>
      </div>
    </>
  );
};

export default NavMenu;
