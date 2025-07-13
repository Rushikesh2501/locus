import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import MKBox from "components/MKBox";
import RotatingCard from "examples/Cards/RotatingCard";
import RotatingCardFront from "examples/Cards/RotatingCard/RotatingCardFront";
import RotatingCardBack from "examples/Cards/RotatingCard/RotatingCardBack";
import bgBack from "assets/images/rotating-card-bg-back.jpeg";
import Box from "@mui/material/Box";

function Information() {
  return (
    <MKBox component="section" py={6} my={6}>
      <Container>
        <Grid container item xs={11} spacing={3} alignItems="center" sx={{ mx: "auto" }}>
          <Grid item xs={12} lg={4} sx={{ mx: "auto" }}>
            <RotatingCard>
              <RotatingCardFront
                title="BASIC HEALTH PACKGAE"
                description="40 test parameters at 799/-"
              />
              <RotatingCardBack
                image={bgBack}
                title="Discover More"
                description={
                  <ul
                    style={{
                      paddingLeft: "20px",
                      margin: 0,
                      fontSize: "1.25rem",
                      lineHeight: "2rem",
                      textAlign: "start",
                    }}
                  >
                    <li>Hemogram</li>
                    <li>Thyroid Profile</li>
                    <li>Liver Function Test</li>
                    <li>HbA1c</li>
                    <li>Calcium</li>
                  </ul>
                }
              />
            </RotatingCard>
          </Grid>
          <Grid item xs={12} lg={4} sx={{ mx: "auto" }}>
            <RotatingCard>
              <RotatingCardFront
                title="COMPLETE HEALTH PACKAGE"
                description="68 test parameters at 1499/-"
              />
              <RotatingCardBack
                image={bgBack}
                title="Discover More"
                description={
                  <ul
                    style={{
                      paddingLeft: "20px",
                      margin: 0,
                      fontSize: "1.25rem",
                      lineHeight: "2rem",
                      textAlign: "start",
                    }}
                  >
                    <li>Hemogram</li>
                    <li>Diabetic</li>
                    <li>Renal Profile</li>
                    <li>Vitamin D</li>
                    <li>Vitamin B12</li>
                    <li>Lipid Profile</li>
                    <li>Electrolytes</li>
                    <li>Iron Deficiency</li>
                  </ul>
                }
              />
            </RotatingCard>
          </Grid>
          <Grid item xs={12} lg={4} sx={{ mx: "auto" }}>
            <RotatingCard>
              <RotatingCardFront
                title="PREMIUM HEALTH PACKAGE"
                description="75 test parameters at 1999/-"
              />
              <RotatingCardBack
                image={bgBack}
                title="Discover More"
                description={
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      gap: 4,
                      fontSize: "1.25rem",
                      lineHeight: "2rem",
                    }}
                  >
                    <ul
                      style={{
                        paddingLeft: "20px",
                        margin: 0,
                        fontSize: "1.25rem",
                        lineHeight: "2rem",
                        textAlign: "start",
                      }}
                    >
                      <li>Hemogram</li>
                      <li>Giabetes Profile</li>
                      <li>Renal Profile</li>
                      <li>Thyroid Profile</li>
                      <li>Vitamin Profile</li>
                      <li>Cardiac Risk Markers</li>
                    </ul>
                    <ul
                      style={{
                        paddingLeft: "20px",
                        margin: 0,
                        fontSize: "1.25rem",
                        lineHeight: "2rem",
                        textAlign: "start",
                      }}
                    >
                      <li>Lipid Profile</li>
                      <li>Testosterone</li>
                      <li>Liver Function Test</li>
                      <li>Lipid Profile</li>
                      <li>Iron Deficiency</li>
                    </ul>
                  </Box>
                }
              />
            </RotatingCard>
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Information;
