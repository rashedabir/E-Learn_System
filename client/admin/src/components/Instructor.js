import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { makeStyles } from "@mui/styles";
import { Button } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "./navbar/Navbar";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: "20px 150px",
  },
}));
function createData(name, status) {
  return { name, status };
}

const rows = [
  createData("Tomal", "Available"),
  createData("Rashed", "Available"),
  createData("Sohag", "Available"),
  createData("Tania", "Occupied"),
];

export default function Instructor({ title }) {
  const classes = useStyles();
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/instructorInfo");
  };
  return (
    <Navbar>
      <div className={classes.root}>
        <TableContainer component={Paper}>
          <h2
            style={{
              color: "black",
              display: "flex",
              justifyContent: "center",
            }}
          >
            {title} Instructor Table
          </h2>
          <Table sx={{ minWidth: "650px" }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell align="left">Name</TableCell>
                <TableCell align="right">Status</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow
                  key={row.name}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {row.name}
                  </TableCell>
                  <TableCell align="right">
                    <Button
                      color="secondary"
                      onClick={() => {
                        handleClick();
                      }}
                    >
                      {row.status}
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </Navbar>
  );
}
