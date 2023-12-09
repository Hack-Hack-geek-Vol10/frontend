import React, { useState } from "react";
import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Collapse,
  Divider,
} from "@mui/material";
import { ExpandLess, ExpandMore, StarBorder } from "@mui/icons-material";

const NestedList: React.FC = () => {
  const [open, setOpen] = useState<{ [key: string]: boolean }>({});

  const handleClick = (name: string) => {
    setOpen((prevOpen) => ({ ...prevOpen, [name]: !prevOpen[name] }));
  };

  return (
    <List
      sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
      component='nav'
      aria-labelledby='nested-list-subheader'
    >
      <ListItem button onClick={() => handleClick("item1")}>
        <ListItemIcon>
          {/* Replace with the icon of your choice */}
          {open["item1"] ? <ExpandLess /> : <ExpandMore />}
        </ListItemIcon>
        <ListItemText primary='ホーム' />
      </ListItem>

      {/* 以下展開内容 */}
      <Collapse in={open["item1"]} timeout='auto' unmountOnExit>
        <List component='div' disablePadding>
          <ListItem
            button
            sx={{ pl: 4 }}
            onClick={() => handleClick("item1-1")}
          >
            <ListItemIcon>
              {open["item1-1"] ? <ExpandLess /> : <ExpandMore />}
            </ListItemIcon>
            <ListItemText primary='サブアイテム1' />
          </ListItem>
          {/* Add more sub-items here */}
        </List>
      </Collapse>
      <Divider />
    </List>
  );
};

export default NestedList;
