import React from "react";
import { Card } from "@mui/material";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

export default function CardComponent({ user }) {
  const { id, name, email } = user;
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 200 }}
        image={"https://robohash.org/" + id + "?set=set2&size=180x180"}
        title="green iguana"
      />
      <CardContent style={{ backgroundColor: "#757de8" }}>
        <Typography gutterBottom variant="h5" component="div" color="wheat">
          {name}
        </Typography>
        <Typography variant="body2" color="white">
          {name} works at {user.company.name} and stays at {user.address.city},
          his email is {email}, mobile number {user.phone}
        </Typography>
      </CardContent>
    </Card>
  );
}
