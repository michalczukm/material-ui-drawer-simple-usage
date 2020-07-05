import React, { useState } from "react";
import Drawer from "@material-ui/core/Drawer";
import Button from "@material-ui/core/Button";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";

export default () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = () => setIsOpen(!isOpen);

  return (
    <div>
      <Button onClick={toggleDrawer}>Open!</Button>
      <Drawer open={isOpen} onClose={toggleDrawer} anchor="left">
        <List>
          <ListItem button onClick={toggleDrawer}>
            <ListItemText primary="Inbox" />
          </ListItem>
          
          <ListItem button onClick={toggleDrawer}>
            <ListItemText primary="Another one" />
          </ListItem>
        </List>
      </Drawer>
    </div>
  );
}
