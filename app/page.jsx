"use client";
import "./globals.css";
import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Album from "./card";

export default function ButtonAppBar() {
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              ngeCare
            </Typography>
            <Link color="inherit" underline="none" href="#" margin={2}>
              About
            </Link>
            <Link color="inherit" underline="none" href="#" margin={2}>
              Beranda
            </Link>
            <Link color="inherit" underline="none" href="#" margin={2}>
              Login
            </Link>
            <Link color="inherit" underline="none" href="#" margin={2}>
              Register
            </Link>
          </Toolbar>
        </AppBar>
      </Box>
      <Album />
    </>
  );
}
