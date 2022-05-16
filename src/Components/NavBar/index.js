import { AppBar, Box, Toolbar, Typography } from "@mui/material";
import { Search, SearchIconWrapper, StyledInputBase } from "./style";
import SearchIcon from "@mui/icons-material/Search";
import CameraIcon from "@mui/icons-material/Camera";
import PhotoLibraryIcon from "@mui/icons-material/PhotoLibrary";
export default function SearchAppBar({ handelChange }) {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <CameraIcon
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}
          >
            <PhotoLibraryIcon />
          </CameraIcon>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
          >
            Gallery Photo
          </Typography>
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ "aria-label": "search" }}
              onChange={handelChange}
            />
          </Search>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
