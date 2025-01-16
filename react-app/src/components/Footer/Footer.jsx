import { Box, Link, Typography, Divider } from "@mui/material";

const Footer = () => (
  <>
    <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
    <Box
      sx={{
        typography: "body1",
        p: "20px",
        display: "flex",
        alignItems: "center",
        gap: "30px",
        justifyContent: "center",
        borderTop: "2px solid gray",
      }}
    >
      <Typography color="gray">Bilim Abram Asketovich</Typography>
      <Link href="mailto:notemail@gmail.com" underline="none" color="gray">
        notemail@gmail.com
      </Link>
      <Link href="tel:+123456789" underline="none" color="gray">
        +123456789
      </Link>
    </Box>
  </>
);

export default Footer;
