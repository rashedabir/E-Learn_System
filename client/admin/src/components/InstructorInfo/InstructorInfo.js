import * as React from "react";
import pic from "../../assets/images/mypic.jpg";
import {
  MenuItem,
  FormControl,
  Select,
  InputLabel,
  Grid,
  Button,
  TableContainer,
  TableHead,
  TableRow,
  TableCell,
  Table,
  Typography,
} from "@mui/material";
import SaveAltIcon from "@mui/icons-material/SaveAlt";
import Navbar from "../navbar/Navbar";
import { useStyles } from "./styles";
import { Item } from "./styles";

export default function InstructorInfo() {
  const [status, setStatus] = React.useState("");

  const handleChange = (event) => {
    setStatus(event.target.value);
  };

  const classes = useStyles();
  return (
    <Navbar>
      <Grid container spacing={3} padding={2}>
        <Grid item sm={12} md={3} className={classes.items}>
          <Item>
            <div>
              <img src={pic} alt="" className={classes.image} />
            </div>
          </Item>
        </Grid>

        <Grid item sm={12} md={7} className={classes.items}>
          <Item>
            <h2 className={classes.heading}>Instructor Profile</h2>
            <TableContainer>
              <Table className={classes.table} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell>
                      <Typography variant="h6">User Name</Typography>
                    </TableCell>
                    <TableCell>
                      <Typography>Intesarul</Typography>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>
                      <Typography variant="h6">Name</Typography>
                    </TableCell>
                    <TableCell>
                      <Typography>Intesarul Haque</Typography>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>
                      <Typography variant="h6">Mobile</Typography>
                    </TableCell>
                    <TableCell>
                      <Typography>01834266766</Typography>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>
                      <Typography variant="h6">Address</Typography>
                    </TableCell>
                    <TableCell>
                      <Typography>Dhaka</Typography>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>
                      <Typography variant="h6">Status</Typography>
                    </TableCell>
                    <TableCell>
                      <Typography>Available</Typography>
                    </TableCell>
                  </TableRow>
                </TableHead>
              </Table>
            </TableContainer>
          </Item>
        </Grid>

        <Grid item sm={12} md={2} className={classes.items}>
          <Item>
            <FormControl fullWidth className={classes.form}>
              <InputLabel id="demo-simple-select-label">Status</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={status}
                label="Status"
                onChange={handleChange}
              >
                <MenuItem value={10}>Available</MenuItem>
                <MenuItem value={20}>Occupied</MenuItem>
                <MenuItem value={30}>Other</MenuItem>
              </Select>
              <Button variant="contained" type="submit" color="secondary">
                <SaveAltIcon className={classes.icon} /> Update
              </Button>
            </FormControl>
          </Item>
        </Grid>
      </Grid>
    </Navbar>
  );
}
