import * as React from "react";
import { styled } from "@mui/material/styles";
import { makeStyles } from "@mui/styles";
import pic from "../assets/images/mypic.jpg";
import {
  Typography,
  MenuItem,
  FormControl,
  Select,
  InputLabel,
  TextField,
  Paper,
  Grid,
  Box,
  Button,
  TableContainer,
  TableHead,
  TableRow,
  TableCell,
  Table,
} from "@mui/material";
import SaveAltIcon from "@mui/icons-material/SaveAlt";

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));
const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: "10px",
    fontSize: "20px",
  },
  form: {
    height: "200px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-evenly",
  },
}));

export default function InstructorInfo() {
  const [status, setStatus] = React.useState("");

  const handleChange = (event) => {
    setStatus(event.target.value);
  };

  const classes = useStyles();
  return (
    <Grid container spacing={3} padding={1}>
      <Grid item sm={12} md={3}>
        <Item>
          <div>
            <img src={pic} alt="" style={{ width: "200px" }} />
          </div>
        </Item>
      </Grid>

      <Grid item sm={12} md={7}>
        <Item>
          <TableContainer>
            <Table className={classes.table} aria-label="simple table" >
              <TableHead>
                <TableRow>
                  <TableCell>
                    <h3>Name</h3>
                  </TableCell>
                  <TableCell>Intesarul Haque</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <h3>Designation</h3>
                  </TableCell>
                  <TableCell>Course Instructor</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <h3>Stack</h3>
                  </TableCell>
                  <TableCell>React,Node JS,MongoDb </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <h3>Status</h3>
                  </TableCell>
                  <TableCell>Available</TableCell>
                </TableRow>
              </TableHead>
            </Table>
          </TableContainer>
        </Item>
      </Grid>

      <Grid item sm={12} md={2}>
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
            <TextField
              id="outlined-basic"
              label="update status"
              variant="outlined"
            />
            <Button variant="contained" type="submit" color="secondary">
              <SaveAltIcon className={classes.icon} /> save
            </Button>
          </FormControl>
        </Item>
      </Grid>
    </Grid>
  );
}
