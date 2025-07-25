import Container from "@mui/material/Container";
import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import { Box } from "@mui/material";
import smallLogo from "assets/images/smallLogo.jpg";
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import MKSocialButton from "components/MKSocialButton";
import DefaultFooter from "examples/Footers/DefaultFooter";
import FilledInfoCard from "examples/Cards/InfoCards/FilledInfoCard";
import Information from "pages/Presentation/sections/Information";
import DesignBlocks from "pages/Presentation/sections/DesignBlocks";
import BuiltByDevelopers from "pages/Presentation/components/BuiltByDevelopers";
import footerRoutes from "footer.routes";
import { Typography } from "@mui/material";
import bgImage from "assets/images/mailLogo.png";
import GoogleReviewsWidget from "google-reviews-widget";
import Fab from "@mui/material/Fab";
import NavigationIcon from "@mui/icons-material/Navigation";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import TextField from "@mui/material/TextField";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import testData from "../Presentation/sections/locus_lab_test_rates";
import IconButton from "@mui/material/IconButton";
// import ClearIcon from "@mui/icons-material/Clear";
import CloseIcon from "@mui/icons-material/Close";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";

function Presentation() {
  const [open, setOpen] = React.useState(false);
  const [searchText, setSearchText] = useState("");
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const filteredData = testData.filter((item) =>
    item.testName.toLowerCase().includes(searchText.toLowerCase())
  );
  return (
    <Grid>
      <Grid
        sx={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          zIndex: 1000,
          backgroundColor: "#fff",
          boxShadow: "0 2px 10px rgba(0,0,0,0.2)",
        }}
      >
        <Grid
          mx={1}
          p={1}
          display="flex"
          alignItems="baseline"
          color="dark"
          opacity={0.6}
          sx={{ cursor: "pointer", userSelect: "none" }}
        >
          <Grid
            container
            direction={{ xs: "column", sm: "row" }}
            justifyContent="space-between"
            alignItems={{ xs: "center", sm: "flex-start" }}
            spacing={1}
            sx={{ width: "100%", textAlign: { xs: "center", sm: "left" } }}
          >
            <Grid item>
              <img src={smallLogo} alt="Logo" style={{ height: 40 }} />
            </Grid>
            <Grid item>
              <Typography variant="body2">
                Contact us :-{" "}
                <a href="tel:+918888254868" style={{ color: "#654a85" }}>
                  +91 8888254868
                </a>{" "}
                /{" "}
                <a href="tel:+917020873376" style={{ color: "#654a85" }}>
                  +91 7020873376
                </a>
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <MKBox
        minHeight="48vh"
        width="100%"
        sx={{
          backgroundImage: `url(${bgImage})`,
          backgroundSize: "cover",
          backgroundPosition: {
            xs: "center 110px", // Mobile: shift background 10px down
            sm: "top", // Default: top on tablets and up
          },
          display: "grid",
          placeItems: "center",
        }}
        Í
      />
      <Card
        sx={{
          p: 2,
          mx: { xs: 2, lg: 3 },
          mt: -8,
          mb: 4,
          backdropFilter: "saturate(200%) blur(30px)",
          boxShadow: "0px -4px 10px rgba(0, 0, 0, 0.1), 0px 6px 15px rgba(0, 0, 0, 0.2)",
        }}
      >
        <Information />
        <Container sx={{ mt: 6 }}>
          <BuiltByDevelopers />
        </Container>
        <DesignBlocks />
        <GoogleReviewsWidget instanceId="15CiOwXVYS4colwrBmcB" />
        <Container>
          <Grid container spacing={3}>
            <Grid item xs={12} lg={6}>
              <FilledInfoCard
                variant="gradient"
                color="info"
                icon="flag"
                title="Empowering Healthcare with Modern Technology of ALTA HEME 340"
                description={
                  <Box>
                    <Typography>
                      Combining precision, speed, and intelligent detection. With high-throughput
                      processing of up to 80 samples per hour and smart multi-parameter analysis,
                      ensures reliable results every time.
                    </Typography>
                  </Box>
                }
              />
            </Grid>
            <Grid item xs={12} lg={6}>
              <FilledInfoCard
                color="info"
                icon="apps"
                title="Components"
                description="Material Kit is giving you a lot of pre-made components, that will help you to build UI's faster."
                action={{
                  type: "external",
                  route: "https://www.creative-tim.com/learning-lab/react/alerts/material-kit/",
                  label: "Read more",
                }}
              />
            </Grid>
          </Grid>
        </Container>
        {/* <Download /> */}
        <MKBox pt={18} pb={6}>
          <Container>
            <Grid container spacing={3}>
              <Grid item xs={12} lg={5} ml="auto" sx={{ textAlign: { xs: "center", lg: "left" } }}>
                <MKTypography variant="h4" fontWeight="bold" mb={0.5}>
                  Thank you for your support!
                </MKTypography>
                <MKTypography variant="body1" color="text">
                  We deliver the best web products
                </MKTypography>
              </Grid>
              <Grid
                item
                xs={12}
                lg={5}
                my={{ xs: 5, lg: "auto" }}
                mr={{ xs: 0, lg: "auto" }}
                sx={{ textAlign: { xs: "center", lg: "right" } }}
              >
                <MKSocialButton
                  component="a"
                  href="https://twitter.com/intent/tweet?text=Check%20Material%20Design%20System%20made%20by%20%40CreativeTim%20%23webdesign%20%23designsystem%20%23mui5&amp;url=https%3A%2F%2Fwww.creative-tim.com%2Fproduct%2Fmaterial-kit-react"
                  target="_blank"
                  color="twitter"
                  sx={{ mr: 1 }}
                >
                  <i className="fab fa-twitter" />
                  &nbsp;Tweet
                </MKSocialButton>
                <MKSocialButton
                  component="a"
                  href="https://www.facebook.com/sharer/sharer.php?u=https://www.creative-tim.com/product/material-kit-react"
                  target="_blank"
                  color="facebook"
                  sx={{ mr: 1 }}
                >
                  <i className="fab fa-facebook" />
                  &nbsp;Share
                </MKSocialButton>
                <MKSocialButton
                  component="a"
                  href="https://www.pinterest.com/pin/create/button/?url=https://www.creative-tim.com/product/material-kit-react"
                  target="_blank"
                  color="pinterest"
                >
                  <i className="fab fa-pinterest" />
                  &nbsp;Pin it
                </MKSocialButton>
              </Grid>
            </Grid>
          </Container>
        </MKBox>
      </Card>
      <MKBox pt={6} px={1} mt={6}>
        <DefaultFooter content={footerRoutes} />
      </MKBox>
      <Fab
        variant="extended"
        color="info"
        sx={{
          position: "fixed",
          bottom: 24,
          right: 24,
          zIndex: 1200,
          boxShadow: "0px 4px 20px rgba(0,0,0,0.3)",
          textTransform: "none",
        }}
        onClick={() => {
          window.scrollTo({ top: 0, behavior: "smooth" });
          setOpen(true);
        }}
      >
        <NavigationIcon sx={{ mr: 1 }} />
        See our full catalog
      </Fab>
      <Dialog
        open={open}
        // onClose={() => setOpen(false)}
        fullWidth
        maxWidth="md"
        PaperProps={{
          sx: {
            maxHeight: "90vh",
            display: "flex",
            flexDirection: "column",
          },
        }}
      >
        <DialogTitle sx={{ m: 0, p: 2 }}>
          Search Lab Tests
          <IconButton
            aria-label="close"
            onClick={() => setOpen(false)}
            sx={{
              position: "absolute",
              right: 8,
              top: 8,
              color: (theme) => theme.palette.error.main,
            }}
          >
            <CloseIcon />
          </IconButton>
        </DialogTitle>
        <DialogContent
          sx={{
            overflowY: "auto",
            px: 3,
            py: 2,
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              mb: 2,
              position: "sticky",
              top: 0,
              backgroundColor: "background.paper",
              zIndex: 1,
              pb: 1,
              pt: 1,
            }}
          >
            <TextField
              fullWidth
              variant="outlined"
              placeholder="Search test name..."
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
            />
            {searchText && (
              <IconButton
                onClick={() => setSearchText("")}
                sx={{ ml: 1 }}
                color="primary"
                aria-label="Clear search"
              >
                <Typography variant="body2">Clear</Typography>
              </IconButton>
            )}
          </Box>

          {/* Header Row */}
          <Box
            sx={{
              position: "sticky",
              top: { xs: 55, sm: 60 }, // adjust if needed
              backgroundColor: "background.paper",
              zIndex: 1,
              pb: 1,
              pt: 1,
            }}
          >
            <Grid container spacing={2} sx={{ fontWeight: "bold", mb: 1 }}>
              <Grid item xs={isMobile ? 10 : 5}>
                Test Name
              </Grid>
              <Grid item xs={2} sx={{ display: isMobile ? "none" : "block" }}>
                Sample Type
              </Grid>
              <Grid item xs={1} sx={{ display: isMobile ? "none" : "block" }}>
                Vol
              </Grid>
              <Grid item xs={2} sx={{ display: isMobile ? "none" : "block" }}>
                Sample Mode
              </Grid>
              <Grid item xs={2} sx={{ textAlign: "right" }}>
                MRP (₹)
              </Grid>
            </Grid>
            <Divider sx={{ mb: 1 }} />
          </Box>

          <Divider sx={{ mb: 1 }} />

          <List>
            {filteredData.map((item, index) => (
              <ListItem key={index} disableGutters divider>
                <Grid container spacing={2} alignItems="center">
                  <Grid item xs={isMobile ? 10 : 5}>
                    <Typography variant="body2">{item.testName}</Typography>
                  </Grid>

                  <Grid item xs={2} sx={{ display: isMobile ? "none" : "block" }}>
                    <Typography variant="body2">{item.sampleType}</Typography>
                  </Grid>

                  <Grid item xs={1} sx={{ display: isMobile ? "none" : "block" }}>
                    <Typography variant="body2">{item.volume}</Typography>
                  </Grid>

                  <Grid item xs={2} sx={{ display: isMobile ? "none" : "block" }}>
                    <Typography variant="body2">{item.sampleMode}</Typography>
                  </Grid>

                  <Grid item xs={2} sx={{ textAlign: "right" }}>
                    <Typography variant="body2" fontWeight="bold">
                      ₹{item.mrp}
                    </Typography>
                  </Grid>
                </Grid>
              </ListItem>
            ))}
          </List>
        </DialogContent>
      </Dialog>
    </Grid>
  );
}

export default Presentation;
