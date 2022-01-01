import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { Typography } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import { IconButton } from "@mui/material";
import rows from "../../fakeData/instructor.json";
import { useStyles } from "./styles";

export default function Instructor({ title }) {
  const classes = useStyles();
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/instructorInfo");
  };
  return (
    <div className={classes.root}>
      <TableContainer component={Paper}>
        <h2 className={classes.title}>{title} Instructor Table</h2>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="left">
                <Typography variant="h6">Name</Typography>
              </TableCell>
              <TableCell align="center">
                <Typography variant="h6">Status</Typography>
              </TableCell>
              <TableCell align="right">
                <Typography variant="h6">Action</Typography>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.name}>
                <TableCell>
                  <Typography>{row.name}</Typography>
                </TableCell>
                <TableCell align="center">
                  <Button
                    color="secondary"
                    onClick={() => {
                      handleClick();
                    }}
                  >
                    {row.status}
                  </Button>
                </TableCell>
                <TableCell align="right">
                  <IconButton
                    variant="contained"
                    color="default"
                    onClick={() => {}}
                  >
                    <EditIcon />
                  </IconButton>{" "}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
