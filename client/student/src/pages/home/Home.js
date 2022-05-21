/* eslint-disable no-unused-vars */
import { Container, Grid, InputBase, Button, IconButton } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { GlobalState } from "../../GlobalState";
import CarouselCards from "./CarouselCards/CarouselCards";
import CoursesTab from "./CoursesTab/CoursesTab";
import { useStyle } from "./styles";

const Home = () => {
  const classes = useStyle();
  const state = useContext(GlobalState);
  const [find, setFind] = useState("");
  const [search, setSearch] = state.courseAPI.search;
  const history = useNavigate();

  const handleSearch = () => {
    history("/courses");
    setSearch(find);
  };

  useEffect(() => {
    setSearch("");
  }, [setSearch]);

  return (
    <div className={classes.root}>
      {/* Main Banner  */}
      <Container maxWidth="xl">
        {/* <Container maxWidth="xl"> */}
        <Grid className={classes.banner} container spacing={2}>
          <Grid item xs={12} md={6}>
            <div>
              <span className={classes.headertxt}>
                Learn for the sake of the future!
              </span>
              <span className={classes.headerbodytxt}>
                Learn valuable, practical skills for as low as $12.99. Sale ends
                tomorrow!
              </span>
              <div className={classes.serach}>
                <InputBase
                  className={classes.hints}
                  placeholder="What do you want to learn?"
                  value={find}
                  onChange={(e) => {
                    setFind(e.target.value);
                  }}
                />
                <IconButton onClick={handleSearch}>
                  <img
                    className={classes.searchbtn}
                    src="https://i.ibb.co/HHKCkRy/Group-751.png"
                    alt="logo"
                  />
                </IconButton>
              </div>
            </div>
          </Grid>
          <Grid item xs={12} md={6}>
            <img
              className={classes.image}
              src="https://i.ibb.co/NsqrCQ9/Group-750.png"
              alt="Group-750"
              border="0"
            />
          </Grid>
        </Grid>
      </Container>

      <div className={classes.coursestabtxt}>
        <h1 className={classes.coursestabh}>A broad selection of courses</h1>
        <p className={classes.coursestabp}>
          Choose from 183,000 online video courses with new additions published
          every month
        </p>
      </div>
      {/* Courses Tab  */}
      <div className={classes.background}>
        <CoursesTab />

        {/* three feature added here  */}
        <div className={classes.featurethree}>
          <Container maxWidth="xl">
            <Grid container spacing={5}>
              <Grid className={classes.featurethreecard} item xs={12} md={4}>
                <div className={classes.featurethreecardinner}>
                  <Grid className={classes.card} container spacing={2}>
                    <Grid item xs={2}>
                      <img
                        className={classes.cardicon}
                        src="https://i.ibb.co/0B99wM0/Group-49.png"
                        alt="Group-49"
                        border="0"
                      />
                    </Grid>
                    <Grid item xs={10}>
                      <div className={classes.cardtext}>
                        <p className={classes.cardtexthead}>
                          1,205 Courses in 25 subjects
                        </p>
                        <p className={classes.cardtextbody}>
                          Develop your skills in a huge range of subjects
                        </p>
                      </div>
                    </Grid>
                  </Grid>
                </div>
              </Grid>
              <Grid className={classes.featurethreecard} item xs={12} md={4}>
                <div className={classes.featurethreecardinner}>
                  <Grid className={classes.card} container spacing={2}>
                    <Grid item xs={2}>
                      <img
                        className={classes.cardicon}
                        src="https://i.ibb.co/pv0wMjW/Group-52.png"
                        alt="Group-49"
                        border="0"
                      />
                    </Grid>
                    <Grid item xs={10}>
                      <div className={classes.cardtext}>
                        <p className={classes.cardtexthead}>
                          Rated Excellent on Trustpilot
                        </p>
                        <p className={classes.cardtextbody}>
                          A trusted brand with thousands of satisfied students
                        </p>
                      </div>
                    </Grid>
                  </Grid>
                </div>
              </Grid>
              <Grid className={classes.featurethreecard} item xs={12} md={4}>
                <div className={classes.featurethreecardinner}>
                  <Grid className={classes.card} container spacing={2}>
                    <Grid item xs={2}>
                      <img
                        className={classes.cardicon}
                        src="https://i.ibb.co/YdnGSqz/Group-48.png"
                        alt="Group-49"
                        border="0"
                      />
                    </Grid>
                    <Grid item xs={10}>
                      <div className={classes.cardtext}>
                        <p className={classes.cardtexthead}>Learn Lifetime</p>
                        <p className={classes.cardtextbody}>
                          lifetime access on mobile and desktop
                        </p>
                      </div>
                    </Grid>
                  </Grid>
                </div>
              </Grid>
            </Grid>
          </Container>
        </div>
      </div>

      {/* another card carousel  */}
      <div className={classes.background}>
        <Container maxWidth="xl">
          <CarouselCards />
        </Container>
      </div>

      {/* first div */}
      <Container>
        <Grid className={classes.banner} container spacing={5}>
          <Grid item xs={12} md={6}>
            <img
              className={classes.image}
              src="https://i.ibb.co/VpbLtjx/Group-781.png"
              alt="Group-750"
              border="0"
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <span className={classes.headertxt}>E earning System</span>
            <span className={classes.thbodytxts}>
              Get unlimited access to 6,000+ of Elearns top courses for your
              team. Learn and improve skills across business, tech, design, and
              more.
            </span>

            <div className={classes.buttons}>
              <Button
                component={Link}
                to="/courses"
                className={classes.clkbtn}
                sx={{
                  borderRadius: 28,
                  backgroundColor: "#EA5252",
                  width: "100%",
                  padding: "5px 0 5px 0",
                }}
              >
                {" "}
                {/* <span className={classes.buttontxt}> Start Elearn Business</span> */}
                <span className={classes.buttontxt}> Start Learning</span>
              </Button>
              <br />
            </div>
          </Grid>
        </Grid>
      </Container>

      {/* second div */}
      <Container>
        <Grid className={classes.banner} container spacing={5}>
          <Grid item xs={12} md={6}>
            <span className={classes.headertxt}>Become an instructor</span>
            <span className={classes.thbodytxt}>
              Instructors from around the world teach millions of students on
              Elearn. We provide the tools and skills to teach what you love.
            </span>
            <div className={classes.buttons}>
              <Button
                component={Link}
                to="/"
                className={classes.clkbtn}
                sx={{
                  borderRadius: 28,
                  backgroundColor: "#EA5252",
                  width: "100%",
                  padding: "5px 0 5px 0",
                }}
              >
                {" "}
                <span className={classes.buttontxt}> Start Teaching Today</span>
              </Button>
            </div>
          </Grid>
          <Grid item xs={12} md={6}>
            <img
              className={classes.image}
              src="https://i.ibb.co/VptJkRf/Group-1722.png"
              alt="Group-750"
              border="0"
            />
          </Grid>
        </Grid>
      </Container>

      {/* third div */}
      <Container>
        <Grid className={classes.banner} container spacing={5}>
          <Grid item xs={12} md={6}>
            <img
              className={classes.image}
              src="https://i.ibb.co/Zmqt28T/Group-777.png"
              alt="Group-750"
              border="0"
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <span className={classes.headertxt}>
              Transform your life through education
            </span>
            <span className={classes.thbodytxt}>
              Learners around the world are launching new careers, advancing in
              their fields, and enriching their lives.
            </span>
            <div className={classes.buttons}>
              <Button
                component={Link}
                to="/"
                className={classes.clkbtn}
                sx={{
                  borderRadius: 28,
                  backgroundColor: "#EA5252",
                  width: "100%",
                  padding: "5px 0 5px 0",
                }}
              >
                {" "}
                <span className={classes.buttontxt}>
                  {" "}
                  Start Elearn Business
                </span>
              </Button>
              <br />
            </div>
          </Grid>
        </Grid>
      </Container>
      {/* What to expect from a Elearn course */}

      <div className={classes.expectcontainer}>
        <h2 className={classes.expect}>What to expect from a Elearn course</h2>

        <Container maxWidth="xl">
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <Grid className={classes.expectcardin} container spacing={5}>
                <Grid item xs={1}>
                  <img src="https://i.ibb.co/60WVLwS/Vector.png" alt="" />
                </Grid>
                <Grid item xs={10}>
                  <span className={classes.expectcardinh}>
                    Learn at your own pace
                  </span>
                  <p className={classes.expectcardinp}>
                    Enjoy learning from home without a set schedule and an
                    easy-to-follow method. You set your own timetable.
                  </p>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={6}>
              <Grid className={classes.expectcardin} container spacing={5}>
                <Grid item xs={1}>
                  <img src="https://i.ibb.co/549zSVP/Vector1.png" alt="" />
                </Grid>
                <Grid item xs={10}>
                  <span className={classes.expectcardinh}>
                    Get front row seats
                  </span>
                  <p className={classes.expectcardinp}>
                    Videos of the highest quality, so you don't miss a single
                    detail. With unlimited access, you can watch them as many
                    times.
                  </p>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={6}>
              <Grid className={classes.expectcardin} container spacing={5}>
                <Grid item xs={1}>
                  <img src="https://i.ibb.co/ZzwgCSs/Vector2.png" alt="" />
                </Grid>
                <Grid item xs={10}>
                  <span className={classes.expectcardinh}>
                    Learn from the best professionals
                  </span>
                  <p className={classes.expectcardinp}>
                    Learn valuable methods and techniques explained by top
                    experts in the creative sector.
                  </p>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={6}>
              <Grid className={classes.expectcardin} container spacing={5}>
                <Grid item xs={1}>
                  <img src="https://i.ibb.co/zQ8NhhZ/Vector3.png" alt="" />
                </Grid>
                <Grid item xs={10}>
                  <span className={classes.expectcardinh}>
                    Share knowledge and ideas
                  </span>
                  <p className={classes.expectcardinp}>
                    Learn valuable methods and techniques explained by top
                    experts in the creative sector.
                  </p>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={6}>
              <Grid className={classes.expectcardin} container spacing={5}>
                <Grid item xs={1}>
                  <img src="https://i.ibb.co/6r4MSdV/Vector4.png" alt="" />
                </Grid>
                <Grid item xs={10}>
                  <span className={classes.expectcardinh}>
                    Meet expert instructors
                  </span>
                  <p className={classes.expectcardinp}>
                    Each instructor teaches what they do best, with clear
                    guidelines, true passion, and professional insight in every
                    lesson.
                  </p>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={6}>
              <Grid className={classes.expectcardin} container spacing={5}>
                <Grid item xs={1}>
                  <img src="https://i.ibb.co/qD8bJVN/Vector.png" alt="" />
                </Grid>
                <Grid item xs={10}>
                  <span className={classes.expectcardinh}>
                    Connect creative community
                  </span>
                  <p className={classes.expectcardinp}>
                    Each instructor teaches what they do best, with clear
                    guidelines, true passion, and professional insight in every
                    lesson.
                  </p>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </div>

      {/* Trusted Company  */}
      <div className={classes.trust}>
        <h2 className={classes.trustedcompany}>
          Trusted by companies of all sizes
        </h2>
        <div>
          <img
            className={classes.trustedcompanyimg}
            src="https://i.ibb.co/bW5K0BR/paypal.png"
            alt=""
          />
          <img
            className={classes.trustedcompanyimg}
            src="https://i.ibb.co/6HkbRqk/apple.png"
            alt=""
          />
          <img
            className={classes.trustedcompanyimg}
            src="https://i.ibb.co/z2wmjC4/netflix.png"
            alt=""
          />
          <img
            className={classes.trustedcompanyimg}
            src="https://i.ibb.co/RTPsMLX/dell.png"
            alt=""
          />
          <img
            className={classes.trustedcompanyimg}
            src="https://i.ibb.co/ZmXhZm8/wordpress.png"
            alt=""
          />
        </div>
      </div>
      {/* footer  */}
    </div>
  );
};

export default Home;
