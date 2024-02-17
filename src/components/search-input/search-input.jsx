import React from "react";
import { TextField } from "@mui/material";

export default function SearchInput({ handleChange }) {
  return (
    <>
      <TextField
        id="search-input"
        label="Filled"
        type="search"
        variant="filled"
        style={{ marginBottom: "5%" }}
        fullWidth
        autoComplete="Leanne"
        onChange={handleChange}></TextField>
    </>
  );
}
