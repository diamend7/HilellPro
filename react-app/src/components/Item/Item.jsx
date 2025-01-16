import { Paper } from "@mui/material";
import { styled } from "@mui/material/styles";

const Item = styled(Paper)((props) => {
  console.log(props);

  return {
    padding: 5,
  };
});

export default Item;
