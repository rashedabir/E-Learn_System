import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Navbar from "../navbar/Navbar";
import { useStyles } from "./styles";


function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box >
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);
  const classes = useStyles();
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Navbar>
      <Box className={classes.root}>
        <Box className={classes.root2}>
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
            centered
            indicatorColor="secondary"
            textColor="secondary"
            variant="fullWidth"
            scrollButtons="auto"
          >
            <Tab label="Item One" {...a11yProps(0)} />
            <Tab label="Item Two" {...a11yProps(1)} />
          </Tabs>
        </Box>
        <TabPanel value={value} index={0}>
          item 1
        </TabPanel>
        <TabPanel value={value} index={1}>
          item 2
        </TabPanel>
      </Box>
    </Navbar>
  );
}
