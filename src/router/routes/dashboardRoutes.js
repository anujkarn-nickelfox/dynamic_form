// Export all routes that should be in the side menu
import React from "react";
import HomeIcon from "@mui/icons-material/Dashboard";
import FormsIcon from "@mui/icons-material/Pages";
import SettingsIcon from "@mui/icons-material/Settings";

class MenuPath {
  constructor(title, icon, route, alias = null) {
    this.title = title;
    this.icon = icon;
    this.route = route;
    this.alias = alias || title.replace(" ", "_").toLowerCase();
  }
}

export const DashboardMenus = [
  new MenuPath("Dahboard", <HomeIcon />, "/u/dashboard"),
  new MenuPath("Forms", <FormsIcon />, "/u/forms"),
  new MenuPath("Settings", <SettingsIcon />, "/u/settings"),
];
