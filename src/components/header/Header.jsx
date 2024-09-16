import {
  AppBar,
  Tab,
  Tabs,
  Toolbar,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import React, { useState } from "react";
import DrawerComponent from "./drawer/DrawerComponent";
import { Menu } from "@mui/icons-material";

const navItems = [
  "Intro",
  "Experience",
  "Skills",
  "Projects",
  "Education",
  "Services",
  "Contact",
];

const Header = () => {
  const [value, setValue] = useState(0);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));

  const handleChange = (e, value) =>
    setValue((prevValue) => (prevValue === value ? null : value));

  const toggleDrawer = () => setIsDrawerOpen((prevValue) => !prevValue);

  return (
    <React.Fragment>
      <AppBar sx={{ background: "transparent", color: "black" }}>
        <Toolbar>
          <DrawerComponent
            list={navItems}
            isOpen={isDrawerOpen}
            toggledrawer={toggleDrawer}
          />
          <Typography
            sx={{
              fontSize: "1.25rem",
              fontWeight: "700",
              lineHeight: "1.75rem",
            }}
          >
            AK
          </Typography>

          {!isMatch && (
            <Tabs
              sx={{ marginLeft: "auto" }}
              textColor="inherit"
              value={value}
              onChange={handleChange}
              indicatorColor="secondary"
            >
              {navItems.map((item) => (
                <Tab label={item} sx={{ fontWeight: "400" }} key={item} />
              ))}
            </Tabs>
          )}

          {isMatch && (
            <Menu onClick={toggleDrawer} sx={{ marginLeft: "auto" }} />
          )}
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
};

export default Header;
