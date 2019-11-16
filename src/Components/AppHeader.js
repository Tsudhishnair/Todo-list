import React, { Component } from "react";
import IconButton from "@material-ui/core/IconButton";
import SearchIcon from "@material-ui/icons/Search";
import AddRoundedIcon from "@material-ui/icons/AddRounded";
import InputBase from "@material-ui/core/InputBase";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import NotificationsActiveRoundedIcon from "@material-ui/icons/NotificationsActiveRounded";
import SettingsRoundedIcon from "@material-ui/icons/SettingsRounded";
import "../Styles/todo.css";

class AppHeader extends Component {
  render() {
    return (
      <div className="appbar">
        <Container className="appbar-container">
          <Grid container justify="space-evenly" alignItems="center">
            <Grid item alignItems="center">
              <span className="Logo"> TodoApp</span>
            </Grid>
            <Grid item>
              <IconButton type="submit" aria-label="search">
                <SearchIcon className="header-icon"/>
              </IconButton>
              <InputBase
                placeholder="Search here your todos"
                className="header-icon"
                inputProps={{ "aria-label": "search google maps" }}
              />{" "}
            </Grid>
            <Grid item>
              <span>
                <IconButton type="submit" aria-label="search">
                  <AddRoundedIcon className="header-icon" />
                </IconButton>
              </span>
              <span>
                <IconButton type="submit" aria-label="search">
                  <NotificationsActiveRoundedIcon className="header-icon" />
                </IconButton>
              </span>
              <span>
                <IconButton type="submit" aria-label="search">
                  <SettingsRoundedIcon className="header-icon" />
                </IconButton>
              </span>
            </Grid>
          </Grid>
        </Container>
      </div>
    );
  }
}
export default AppHeader;
