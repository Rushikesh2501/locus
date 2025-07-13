import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Icon from "@mui/material/Icon";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import BgImg from "../../../../assets/images/backGroundImg.png";

function BuiltByDevelopers() {
  return (
    <MKBox
      display="flex"
      alignItems="center"
      borderRadius="xl"
      my={2}
      py={6}
      sx={{
        backgroundImage: ({ functions: { linearGradient, rgba }, palette: { gradients } }) =>
          `${linearGradient(
            rgba(gradients.dark.main, 0.8),
            rgba(gradients.dark.state, 0.8)
          )}, url(${BgImg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Container>
        <Grid container item xs={12} lg={6} sx={{ ml: { xs: 0, lg: 6 } }}>
          <MKTypography variant="h1" color="white" mb={1}>
            Why choose LOCUS pathalogy lab
          </MKTypography>
          <MKTypography variant="body1" color="white" mb={2}>
            At LOCUS Pathology Lab, we are dedicated to providing accurate, reliable, and timely
            diagnostic services to support your health and well-being Our state-of-the-art
            .pathology laboratory is equipped with the latest technology and staffed by experienced
            professionals including certified pathologists and skilled technicians
          </MKTypography>
          <MKTypography variant="body1" color="white" mb={2}>
            We offer a comprehensive range of services, including blood tests, urine analysis,
            histopathology, cytology, and specialized diagnostic testing. With a strong commitment
            to quality and patient care, we ensure that every sample is handled with precision and
            confidentiality.
          </MKTypography>
          <MKTypography variant="body1" color="white" mb={2}>
            Whether you are visiting for routine health screening or specialized testing,you can
            trust LOCUS Pathology lab to deliver results you can rely on.
          </MKTypography>
          <MKTypography
            component="a"
            href="https://maps.app.goo.gl/smvt8x7XU17pjBai9?g_st=awb"
            target="_blank"
            rel="noreferrer"
            variant="body5"
            color="white"
            fontWeight="regular"
            sx={{
              display: "flex",
              alignItems: "center",

              "& .material-icons-round": {
                fontSize: "1.125rem",
                transform: `translateX(3px)`,
                transition: "transform 0.2s cubic-bezier(0.34, 1.61, 0.7, 1.3)",
              },

              "&:hover .material-icons-round, &:focus .material-icons-round": {
                transform: `translateX(6px)`,
              },
            }}
          >
            Feel free to visit us <Icon sx={{ fontWeight: "bold" }}>arrow_forward</Icon>
          </MKTypography>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default BuiltByDevelopers;
