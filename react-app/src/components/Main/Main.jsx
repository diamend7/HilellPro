import { Box, Paper, Typography, Stack } from "@mui/material";
import image from "../../images/image.png";

const Main = () => (
  <Box
    sx={{
      display: "flex",
      typography: "body1",
      flexWrap: "nowrap",
      gap: "40px",
    }}
  >
    <Paper
      sx={{
        maxWidth: "30%",
        padding: "4px",
        backgroundColor: "gray",
        width: "100%",
      }}
    >
      <Box>
        <img src={image} alt="" style={{ width: "100%" }} />
      </Box>
      <Box sx={{ color: "lightblue" }}>
        <Typography sx={{ color: "orange" }} variant="h5">
          Technical Skills
        </Typography>
        <Stack spacing={2}>
          <Stack>
            <Typography variant="h7">Programming Languages</Typography>
            <Typography variant="h8">JavaScript</Typography>
            <Typography variant="h8">C++</Typography>
            <Typography variant="body1">C+++</Typography>
          </Stack>
          <Stack>
            <Typography variant="h7">Web Development</Typography>
            <Typography variant="h8">JavaScript</Typography>
            <Typography variant="h8">HTML</Typography>
            <Typography variant="body1">CSS</Typography>
          </Stack>
        </Stack>
      </Box>
    </Paper>
    <Box sx={{ maxWidth: "70%" }}>
      <Typography variant="h3">Resume</Typography>
      <Box>
        <Typography variant="h4" color="orange">
          About me
        </Typography>
        <Typography variant="caption">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa
          mollitia iure consequuntur quo beatae provident, esse neque magni
          earum dolor facere est, iusto, obcaecati eos sunt. Ad hic tenetur
          deserunt, non, vero omnis qui natus distinctio a delectus laudantium
          laborum voluptate amet fugiat veniam sint quos pariatur? Quos eaque
          vel aliquid repellat atque esse. Ullam maxime ut perferendis
          voluptates expedita facilis odio veritatis deserunt, labore quisquam
          illo debitis accusantium, possimus nostrum culpa! Rerum consequatur
          dicta iusto doloribus. At deleniti numquam porro, consequuntur quis
          assumenda laboriosam mollitia aliquid fuga vel placeat nobis
          recusandae molestias earum illo quaerat corrupti blanditiis enim ut
          aspernatur, quod cum fugit non. At, in odio esse ipsam repellat
          tenetur iusto earum a ipsum iste? Assumenda fuga minus debitis ab
          delectus quam sed. Molestiae doloribus quasi sunt sint, laborum
          deserunt perspiciatis iste illo nulla rerum quo et saepe facere
          exercitationem, quidem aperiam. Maiores magnam ipsum accusamus
          suscipit quia?
        </Typography>
      </Box>
      <Box>
        <Typography variant="h4" color="orange">
          Education
        </Typography>
        <Typography variant="caption">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa
          mollitia iure consequuntur quo beatae provident, esse neque magni
          earum dolor facere est, iusto, obcaecati eos sunt. Ad hic tenetur
          deserunt, non, vero omnis qui natus distinctio a delectus laudantium
          laborum voluptate amet fugiat veniam sint quos pariatur? Quos eaque
          vel aliquid repellat atque esse. Ullam maxime ut perferendis
          voluptates expedita facilis odio veritatis deserunt, labore quisquam
          illo debitis accusantium, possimus nostrum culpa! Rerum consequatur
          dicta iusto doloribus. At deleniti numquam porro, consequuntur quis
        </Typography>
      </Box>
    </Box>
  </Box>
);

export default Main;
