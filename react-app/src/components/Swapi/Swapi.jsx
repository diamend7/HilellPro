import { useState } from "react";
import { useDispatch } from "react-redux";
import { clearData, fetchData } from "../../redux/slices/swapiInfoSlice";
import { useSelector } from "react-redux";
import selectors from "../../redux/slices/selectors";
import { Button, Box, Typography, Paper, TextField } from "@mui/material";

const Swapi = () => {
  const dispatch = useDispatch();

  const [path, setPath] = useState("people/1");
  const data = useSelector(selectors.swapiInfo.data);

  const handleFetch = () => {
    dispatch(fetchData(path));
  };
  const handleClear = () => {
    dispatch(clearData());
  };
  return (
    <Box sx={{ typography: "body1" }}>
      <Typography variant="h4" component="h4">
        SWAPI
      </Typography>
      <Paper
        sx={{
          backgroundColor: "gray",
          typography: "body1",
          marginTop: "20px",
          padding: "10px",
          display: "flex",
          alignItems: "center",
        }}
      >
        <TextField
          id="link"
          placeholder="https://swapi.py4e.com/api/"
          disabled
          sx={{ width: "330px" }}
        />
        <TextField
          type="text"
          name="path"
          placeholder="people/1"
          id="input"
          onChange={(e) => setPath(e.target.value)}
          value={path}
          fullWidth
        />
        <Button
          variant="contained"
          sx={{ padding: "14px" }}
          type="button"
          onClick={handleFetch}
        >
          Get
        </Button>
      </Paper>

      <Paper
        className="jsonInfo"
        sx={{
          minHeight: "20px",
          marginTop: "10px",
          marginBottom: "10px",
          whiteSpace: "pre-wrap",
          wordBreak: "break-word",
          typography: "body1",
        }}
      >
        {JSON.stringify(data, null, 2)}
      </Paper>

      <Button
        variant="outlined"
        type="button"
        id="deleteButton"
        onClick={handleClear}
      >
        Clear
      </Button>
    </Box>
  );
};

export default Swapi;
