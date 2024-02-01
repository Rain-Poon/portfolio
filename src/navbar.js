import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { grey } from "@mui/material/colors";
import logo from "./myLogo.png";
import { withTheme } from "@emotion/react";
import { Route, Routes, Link } from "react-router-dom";
import Skills from "./skills.tsx";
import App from "./App";
import About from "./AboutMe";
import Contacts from "./Contacts";

const theme = createTheme({
  palette: {
    primary: {
      main: grey[50],
    },
  },
});

const pages = ["About me", "Skills", "Contact me", "3D Modeling"];

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <>
      <Routes>
        <Route path="/about me" element={<About />} />
        <Route path="/contact me" element={<Contacts />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/3d modeling" element={<App />} />
      </Routes>
      <ThemeProvider theme={theme}>
        <AppBar
          position="static"
          sx={{ backgroundColor: "transparent", boxShadow: 5 }}
        >
          <Container maxWidth="false">
            <Toolbar disableGutters>
              <Link to={`/`}>
                <img src={logo} style={{ maxHeight: 40, marginRight: 20 }} />
              </Link>

              <Typography
                variant="h6"
                noWrap
                component="a"
                href="/"
                sx={{
                  mr: 2,
                  display: { xs: "none", md: "flex" },
                  fontFamily: "monospace",
                  fontWeight: 700,
                  letterSpacing: ".05rem",
                  color: "inherit",
                  textDecoration: "none",
                }}
              >
                Rain's Portfolio
              </Typography>

              {/* App bar for mobile phone */}
              <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
                <IconButton
                  size="large"
                  aria-label="account of current user"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  onClick={handleOpenNavMenu}
                  color="inherit"
                >
                  <MenuIcon />
                </IconButton>
                <Menu
                  id="menu-appbar"
                  anchorEl={anchorElNav}
                  anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "left",
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "left",
                  }}
                  open={Boolean(anchorElNav)}
                  onClose={handleCloseNavMenu}
                  sx={{
                    display: { xs: "block", md: "none" }
                  }}
                >
                  {pages.map((page) => (
                    <MenuItem key={page} onClick={handleCloseNavMenu}>
                      <Link to={`/${page.toLowerCase()}`}>
                        <Typography textAlign="center">{page}</Typography>
                      </Link>
                    </MenuItem>
                  ))}
                </Menu>
              </Box>

              {/* App bar with normal size */}
              <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
                {pages.map((page) => (
                  <Link to={`/${page.toLowerCase()}`}>
                    <Button
                      key={page}
                      onClick={handleCloseNavMenu}
                      sx={{
                        my: 2,
                        color: "black",
                        display: "block",
                        mr: 3,
                        ml: 3,
                      }}
                    >
                      {page}
                    </Button>
                  </Link>
                ))}
              </Box>
            </Toolbar>
          </Container>
        </AppBar>
      </ThemeProvider>
    </>
  );
}
export default ResponsiveAppBar;
