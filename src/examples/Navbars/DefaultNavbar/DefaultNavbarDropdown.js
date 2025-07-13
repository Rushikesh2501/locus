import PropTypes from "prop-types";
import MKBox from "components/MKBox";
import { Typography } from "@mui/material";
function DefaultNavbarDropdown() {
  return (
    <>
      <MKBox
        mx={1}
        p={1}
        display="flex"
        alignItems="baseline"
        color={"dark"}
        opacity={0.6}
        sx={{ cursor: "pointer", userSelect: "none" }}
      >
        <Typography>ooooo</Typography>
      </MKBox>
    </>
  );
}
DefaultNavbarDropdown.defaultProps = {
  children: false,
  collapseStatus: false,
  href: "",
  route: "",
};
DefaultNavbarDropdown.propTypes = {
  name: PropTypes.string.isRequired,
  icon: PropTypes.node.isRequired,
  children: PropTypes.node,
  collapseStatus: PropTypes.bool,
  href: PropTypes.string,
  route: PropTypes.string,
  collapse: PropTypes.bool.isRequired,
};

export default DefaultNavbarDropdown;
