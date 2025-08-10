// @mui icons
import FacebookIcon from "@mui/icons-material/Facebook";
// import TwitterIcon from "@mui/icons-material/Twitter";
// import GitHubIcon from "@mui/icons-material/GitHub";
// import YouTubeIcon from "@mui/icons-material/YouTube";
import InstagramIcon from "@mui/icons-material/Instagram";
import MKTypography from "components/MKTypography";
import logoCT from "assets/images/blank.png";

// const date = new Date().getFullYear();

export default {
  brand: {
    name: "LOCUS Pathavlogy",
    image: logoCT,
    route: "/",
  },
  socials: [
    {
      icon: <FacebookIcon />,
      link: "https://m.facebook.com/share/1FQ9nE3u1P/?wtsid=rdr_0x9soqKGh3Q5JTxFi",
    },
    {
      icon: <InstagramIcon />,
      link: "https://www.instagram.com/locus_511/profilecard/?igsh=MWtnYXFmbzA2NXAzMA==",
    },
  ],
  menus: [
    {
      name: "help & support",
      items: [
        { name: "contact us", href: "tel:+918888254868" },
        {
          name: "Location",
          href: "https://www.google.com/maps/dir//bus+stop,+Upper+Market+Rd,+opposite+new+gajanan+book+depot,+Upper+Indira+Nagar,+Bibwewadi,+Pune,+Maharashtra+411037/@18.4611613,73.7851515,28860m/data=!3m1!1e3!4m8!4m7!1m0!1m5!1m1!1s0x3bc2ebf90ce1e099:0x31f9bc3bb7d70cb4!2m2!1d73.8675532!2d18.4611791?hl=en-GB&entry=ttu&g_ep=EgoyMDI1MDcxNi4wIKXMDSoASAFQAw%3D%3D",
        },
        // { name: "custom development", href: "https://services.creative-tim.com/" },
        // { name: "sponsorships", href: "https://www.creative-tim.com/sponsorships" },
      ],
    },
  ],
  copyright: (
    <MKTypography variant="button" fontWeight="regular">
      {/* All rights reserved. Copyright &copy; {date} Material Kit by{" "} */}
      {/* <MKTypography
        component="a"
        href="https://www.creative-tim.com"
        target="_blank"
        rel="noreferrer"
        variant="button"
        fontWeight="regular"
      >
        Creative Tim
      </MKTypography> */}
      .
    </MKTypography>
  ),
};
