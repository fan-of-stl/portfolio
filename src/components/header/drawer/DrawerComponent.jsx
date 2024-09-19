import { Drawer, List, ListItem, ListItemText } from '@mui/material';
import React from 'react';

const DrawerComponent = ({ list, isOpen, toggledrawer }) => {
  const handleItemClick = (index) => {
    const sectionId = list[index].toLowerCase(); // Use the list item to dynamically get section id
    const section = document.getElementById(sectionId); // Find section by id
    if (section) {
      section.scrollIntoView({ behavior: "smooth" }); // Scroll to the section
      toggledrawer(); // Close the drawer after item is clicked
    }
    toggledrawer(); // Close the drawer after item is clicked
  };

  return (
    <React.Fragment>
      <Drawer open={isOpen} onClick={toggledrawer}>
        <List>
          {list.map((ele, index) => (
            <ListItem
              button
              key={ele}
              onClick={() => handleItemClick(index)} // Handle click with scrolling logic
            >
              <ListItemText>{ele}</ListItemText>
            </ListItem>
          ))}
        </List>
      </Drawer>
    </React.Fragment>
  );
};

export default DrawerComponent;
