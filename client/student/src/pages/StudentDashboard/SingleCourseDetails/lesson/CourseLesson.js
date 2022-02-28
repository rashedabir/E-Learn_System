import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import PauseCircleOutlineRoundedIcon from "@mui/icons-material/PauseCircleOutlineRounded";
import PlayCircleOutlineRoundedIcon from "@mui/icons-material/PlayCircleOutlineRounded";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Grid,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import ReactPlayer from "react-player";
import { useStyle } from "./styles";

const CourseLesson = ({ lessons }) => {
  const classes = useStyle();
  const [selectedIndex, setSelectedIndex] = useState("0");
  const [link, setLink] = useState("");
  const [title, setTitle] = useState("");

  const handleListItemClick = (event, index, src, name) => {
    setSelectedIndex(index);
    setLink(src);
    setTitle(name);
  };

  return (
    <div>
      <div className={classes.roots}>
        <Grid container spacing={4}>
          <Grid item xs={12} lg={6}>
            <ReactPlayer url={link} width="100%" controls playing />
            {selectedIndex === "0" ? (
              <Typography variant="h5" className={classes.title}>
                Select a Item to begin the Playlist
              </Typography>
            ) : (
              <Typography variant="h5" className={classes.title}>
                <i className="far fa-play-circle"></i> Now Playing:{" "}
                <strong>{title}</strong>
              </Typography>
            )}
          </Grid>
          <Grid
            sx={{
              backgroundColor: "transparent",
              border: "none",
            }}
            item
            xs={12}
            lg={6}
          >
            <div className={classes.rightSide}>
              {lessons.map((data) => (
                // accordion here
                <Accordion>
                  <AccordionSummary
                    sx={{
                      backgroundColor: "#eee",
                    }}
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                  >
                    <Typography>{data.title}</Typography>
                  </AccordionSummary>
                  <AccordionDetails sx={{ padding: "0px" }}>
                    <List
                      aria-label="main mailbox folders"
                      className={classes.songList}
                    >
                      {data.videos.map((item) => (
                        <ListItem
                          button
                          selected={selectedIndex === item.title}
                          onClick={(event) =>
                            handleListItemClick(
                              event,
                              item.link,
                              item.link,
                              item.title
                            )
                          }
                        >
                          <ListItemIcon>
                            {selectedIndex === item.link ? (
                              <PauseCircleOutlineRoundedIcon
                                className={classes.bgIcon}
                              />
                            ) : (
                              <PlayCircleOutlineRoundedIcon
                                className={classes.bgIcon}
                              />
                            )}
                          </ListItemIcon>
                          <ListItemText>{item.title}</ListItemText>
                        </ListItem>
                      ))}
                    </List>
                  </AccordionDetails>
                </Accordion>
              ))}
            </div>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default CourseLesson;
