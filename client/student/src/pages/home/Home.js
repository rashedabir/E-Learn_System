import { Container, Grid, InputBase, Button } from "@mui/material";
import React from "react";
import CarouselCards from "./CarouselCards/CarouselCards";
import CoursesTab from "./CoursesTab/CoursesTab";
import { useStyle } from "./styles";

const Home = () => {
  const classes = useStyle();
  return <div className={classes.root}>
    {/* Main Banner  */}
    <Container>
      <Grid className={classes.banner} container spacing={2}>
        <Grid item xs={12} md={6}>
          <div>
            <span className={classes.headertxt}>Learn for the sake of the future!</span>
            <span className={classes.headerbodytxt}>Learn valuable, practical skills for as low as $12.99. Sale ends tomorrow!</span>
            <div className={classes.serach}>
              <InputBase className={classes.hints}
                placeholder="What do you want to learn?"
              />
              <Button sx={{ borderRadius: 28 }} className={classes.searchbtn}><img src="https://i.ibb.co/HHKCkRy/Group-751.png" alt="Group-751" /></Button>
            </div>
          </div>
        </Grid>
        <Grid item xs={12} md={6}>
          <img className={classes.image} src="https://i.ibb.co/NsqrCQ9/Group-750.png" alt="Group-750" border="0" />
        </Grid>
      </Grid>
    </Container>

    <div className={classes.coursestabtxt}>
      <h1 className={classes.coursestabh}>A broad selection of courses</h1>
      <p className={classes.coursestabp}>Choose from 183,000 online video courses with new additions published every month</p>
    </div>
    {/* Courses Tab  */}
    <div className={classes.background}>
      <CoursesTab></CoursesTab>

      {/* three feature added here  */}
      <div className={classes.featurethree}>
        <Container>
          <Grid container spacing={2}>
            <Grid className={classes.featurethreecard} item xs={12} md={4}>
              <div className={classes.featurethreecardinner}>
                <Grid className={classes.card} container spacing={2}>
                  <Grid item xs={2}>
                    <img src="https://i.ibb.co/0B99wM0/Group-49.png" alt="Group-49" border="0" />
                  </Grid>
                  <Grid item xs={10}>
                    <div className={classes.cardtext}>
                      <p className={classes.cardtexthead}>
                        1,205 Courses in 25 subjects
                      </p>
                      <p className={classes.cardtextbody}>
                        Develop your skills in a huge
                        range of subjects
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
                    <img src="https://i.ibb.co/0B99wM0/Group-49.png" alt="Group-49" border="0" />
                  </Grid>
                  <Grid item xs={10}>
                    <div className={classes.cardtext}>
                      <p className={classes.cardtexthead}>
                        Rated Excellent on Trustpilot
                      </p>
                      <p className={classes.cardtextbody}>
                        A trusted brand with thousands
                        of satisfied students
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
                    <img src="https://i.ibb.co/0B99wM0/Group-49.png" alt="Group-49" border="0" />
                  </Grid>
                  <Grid item xs={10}>
                    <div className={classes.cardtext}>
                      <p className={classes.cardtexthead}>
                        Learn Lifetime
                      </p>
                      <p className={classes.cardtextbody}>
                        lifetime access on mobile
                        and desktop
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
    <Container className={classes.background}>
      <CarouselCards></CarouselCards>
    </Container>


    {/* first div */}
    <div>
      <Container>
        <Grid className={classes.banner} container spacing={2}>
          <Grid item xs={12} md={6}>
            <img className={classes.image} src="https://i.ibb.co/NsqrCQ9/Group-750.png" alt="Group-750" border="0" />
          </Grid>
          <Grid item xs={12} md={6}>
            <span className={classes.headertxt}>E earning System</span>
            <span className={classes.thbodytxt}>`Get unlimited access to 6,000+ of Udemys top courses for your team. Learn and improve skills across business, tech, design, and more.</span>

            <div className={classes.buttons}>
              <Button className={classes.clkbtn} sx={{
                borderRadius: 28, backgroundColor: "#EA5252", width: "100%", padding: "5px 0 5px 0"
              }}> <span className={classes.buttontxt}> Start Udemy Business</span></Button>
              <br />
            </div>
          </Grid>
        </Grid>
      </Container>
    </div>

    {/* second div */}
    <div>
      <Container>
        <Grid className={classes.banner} container spacing={2}>
          <Grid item xs={12} md={6}>
            <span className={classes.headertxt}>Become an instructor</span>.
            <span className={classes.thbodytxt}>Instructors from around the world teach millions of students on Udemy. We provide the tools and skills to teach what you love.</span>

            <div className={classes.buttons}>
              <Button className={classes.clkbtn} sx={{
                borderRadius: 28, backgroundColor: "#EA5252", width: "100%", padding: "5px 0 5px 0"
              }}> <span className={classes.buttontxt}> Start Teaching Today</span></Button>
            </div>

          </Grid>
          <Grid item xs={12} md={6}>
            <img className={classes.image} src="https://i.ibb.co/NsqrCQ9/Group-750.png" alt="Group-750" border="0" />
          </Grid>
        </Grid>
      </Container>
    </div>

    {/* third div */}
    <div>
      <Container>
        <Grid className={classes.banner} container spacing={2}>
          <Grid item xs={12} md={6}>
            <img className={classes.image} src="https://i.ibb.co/NsqrCQ9/Group-750.png" alt="Group-750" border="0" />
          </Grid>
          <Grid item xs={12} md={6}>
            <span className={classes.headertxt}>Transform your life through education</span>.
            <span className={classes.headerbodytxt}>Learners around the world are launching new careers, advancing in their fields, and enriching their lives.</span>
            <div className={classes.buttons}>
              <Button className={classes.clkbtn} sx={{
                borderRadius: 28, backgroundColor: "#EA5252", width: "100%", padding: "5px 0 5px 0"
              }}> <span className={classes.buttontxt}> Find Out How</span></Button>
            </div>
          </Grid>
        </Grid>
      </Container>
    </div>

    {/* What to expect from a Udemy course */}

    <h2 className={classes.expect}>What to expect from a Udemy course</h2>

    <Container>
      <Grid container spacing={2}>

        <Grid className={classes.featurethreecard} item xs={12} md={6}>
          <div className={classes.featurethreecardinner}>
            <Grid className={classes.card} container spacing={2}>
              <Grid item xs={2}>
                <img src="https://i.ibb.co/0B99wM0/Group-49.png" alt="Group-49" border="0" />
              </Grid>
              <Grid item xs={10}>
                <div className={classes.cardtext}>
                  <p className={classes.cardtexthead}>
                    Learn at your own pace
                  </p>
                  <p className={classes.cardtextbody}>
                    Enjoy learning from home without a set schedule and an easy-to-follow method. You set your own timetable.
                  </p>
                </div>
              </Grid>
            </Grid>
          </div>

        </Grid>
        <Grid className={classes.featurethreecard} item xs={12} md={6}>
          <div className={classes.featurethreecardinner}>
            <Grid className={classes.card} container spacing={2}>
              <Grid item xs={2}>
                <img src="https://i.ibb.co/0B99wM0/Group-49.png" alt="Group-49" border="0" />
              </Grid>
              <Grid item xs={10}>
                <div className={classes.cardtext}>
                  <p className={classes.cardtexthead}>
                    Get front row seats
                  </p>
                  <p className={classes.cardtextbody}>
                    Videos of the highest quality, so you don't miss a single detail. With unlimited access, you can watch them as many times.
                  </p>
                </div>
              </Grid>
            </Grid>
          </div>

        </Grid>
        <Grid className={classes.featurethreecard} item xs={12} md={6}>
          <div className={classes.featurethreecardinner}>
            <Grid className={classes.card} container spacing={2}>
              <Grid item xs={2}>
                <img src="https://i.ibb.co/0B99wM0/Group-49.png" alt="Group-49" border="0" />
              </Grid>
              <Grid item xs={10}>
                <div className={classes.cardtext}>
                  <p className={classes.cardtexthead}>
                    Learn from the best professionals
                  </p>
                  <p className={classes.cardtextbody}>
                    Learn valuable methods and techniques explained by top experts in the creative sector.
                  </p>
                </div>
              </Grid>
            </Grid>
          </div>

        </Grid>
        <Grid className={classes.featurethreecard} item xs={12} md={6}>
          <div className={classes.featurethreecardinner}>
            <Grid className={classes.card} container spacing={2}>
              <Grid item xs={2}>
                <img src="https://i.ibb.co/0B99wM0/Group-49.png" alt="Group-49" border="0" />
              </Grid>
              <Grid item xs={10}>
                <div className={classes.cardtext}>
                  <p className={classes.cardtexthead}>
                    Share knowledge and ideas
                  </p>
                  <p className={classes.cardtextbody}>
                    Learn valuable methods and techniques explained by top experts in the creative sector.
                  </p>
                </div>
              </Grid>
            </Grid>
          </div>

        </Grid>
        <Grid className={classes.featurethreecard} item xs={12} md={6}>
          <div className={classes.featurethreecardinner}>
            <Grid className={classes.card} container spacing={2}>
              <Grid item xs={2}>
                <img src="https://i.ibb.co/0B99wM0/Group-49.png" alt="Group-49" border="0" />
              </Grid>
              <Grid item xs={10}>
                <div className={classes.cardtext}>
                  <p className={classes.cardtexthead}>
                    Meet expert instructors
                  </p>
                  <p className={classes.cardtextbody}>
                    Each instructor teaches what they do best, with clear guidelines, true passion, and professional insight in every lesson.
                  </p>
                </div>
              </Grid>
            </Grid>
          </div>

        </Grid>
        <Grid className={classes.featurethreecard} item xs={12} md={6}>
          <div className={classes.featurethreecardinner}>
            <Grid className={classes.card} container spacing={2}>
              <Grid item xs={2}>
                <img src="https://i.ibb.co/0B99wM0/Group-49.png" alt="Group-49" border="0" />
              </Grid>
              <Grid item xs={10}>
                <div className={classes.cardtext}>
                  <p className={classes.cardtexthead}>
                    Connect creative community
                  </p>
                  <p className={classes.cardtextbody}>
                    Each instructor teaches what they do best, with clear guidelines, true passion, and professional insight in every lesson.
                  </p>
                </div>
              </Grid>
            </Grid>
          </div>

        </Grid>

      </Grid>
    </Container>

    {/* footer  */}


  </div>;
};

export default Home;
