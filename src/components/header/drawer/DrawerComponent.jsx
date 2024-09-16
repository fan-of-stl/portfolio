import { Drawer, List, ListItemText } from '@mui/material'
import React from 'react'

const DrawerComponent = ({list, isOpen, toggledrawer}) => {
  return (
    <React.Fragment>
        <Drawer open={isOpen} onClick={toggledrawer}>
            <List>
                {list.map(ele => <ListItemText key={ele}>{ele}</ListItemText>)}
            </List>
        </Drawer>
    </React.Fragment>
  )
}

export default DrawerComponent