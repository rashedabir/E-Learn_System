import { Grid } from '@mui/material';
import React from 'react';
import { useStyle } from "./styles";

const Profile = () => {
    const classes = useStyle();
    return (
        <div className={classes.root}>
            <Grid container spacing={2}>
                <Grid className={classes.profileleft} item xs={3}>
                    <img className={classes.imag} src="https://media.istockphoto.com/photos/millennial-male-team-leader-organize-virtual-workshop-with-employees-picture-id1300972574?b=1&k=20&m=1300972574&s=170667a&w=0&h=2nBGC7tr0kWIU8zRQ3dMg-C5JLo9H2sNUuDjQ5mlYfo=" alt="" />
                    <h4>Name : Sohag Rah</h4>
                </Grid>
                <Grid className={classes.profileright} item xs={9}>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. At illum, natus hic nisi iure possimus. Recusandae repellat facilis est rem molestias sequi nobis impedit, corporis minus at nostrum aliquid! Dignissimos.
                </Grid>
            </Grid>
        </div>
    );
};

export default Profile;