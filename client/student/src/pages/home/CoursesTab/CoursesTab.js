import * as React from 'react';
import { useStyle } from "./styles";
import { Container } from '@mui/material';
import CarouselCards from "../CarouselCards/CarouselCards"

import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';

const CoursesTab = () => {
    const classes = useStyle();
    const [value, setValue] = React.useState('1');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <div className={classes.root}>
            <Container>
                <TabContext value={value}>
                    <Box sx={{ borderBottom: 1, borderColor: 'white', }}>
                        <TabList variant="scrollable" className={classes.tabcontainer} onChange={handleChange}>
                            <Tab label="Item One" value="1" />
                            <Tab label="Item Two" value="2" />
                            <Tab label="Item Three" value="3" />
                            <Tab label="Item Four" value="4" />
                            <Tab label="Item Five" value="5" />
                            <Tab label="Item Six" value="6" />
                            <Tab label="Item Seven" value="7" />
                        </TabList>
                    </Box>
                    <TabPanel value="1">
                        <CarouselCards></CarouselCards>
                    </TabPanel>
                    <TabPanel value="2">
                        <CarouselCards></CarouselCards>
                    </TabPanel>
                    <TabPanel value="3">
                        <CarouselCards></CarouselCards>
                    </TabPanel>
                    <TabPanel value="4">
                        <CarouselCards></CarouselCards>
                    </TabPanel>
                    <TabPanel value="5">
                        <CarouselCards></CarouselCards>
                    </TabPanel>
                    <TabPanel value="6">
                        <CarouselCards></CarouselCards>
                    </TabPanel>
                    <TabPanel value="7">
                        <CarouselCards></CarouselCards>
                    </TabPanel>
                </TabContext>
            </Container>
        </div >
    );
};

export default CoursesTab;