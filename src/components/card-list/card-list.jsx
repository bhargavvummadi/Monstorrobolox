import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import CardComponent from "../card";

export default function CardList({ filteredList }) {
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={4}>
          {filteredList.map((obj) => {
            return (
              <Grid item xs={4} key={obj.id}>
                <CardComponent user={obj} />
              </Grid>
            );
          })}
        </Grid>
      </Box>
    </>
  );
}
