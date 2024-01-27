import React from "react";
import TextField from "@mui/material/TextField";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";

function OutlinedSearchField() {
  return (
    <TextField
      id="outlined-basic"
      variant="outlined"
      InputProps={{
        startAdornment: <SearchRoundedIcon />,
        classes: { root: "h-10 w-80" },
      }}
      classes={{ root: "bg-gray-50 " }}
      placeholder="Search"
    />
  );
}

export default OutlinedSearchField;
