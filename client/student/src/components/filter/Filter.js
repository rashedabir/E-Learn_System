import React, { useContext } from "react";
import {
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import { GlobalState } from "../../GlobalState";

const Filter = () => {
  const state = useContext(GlobalState);
  const [categories] = state.courseCategoryAPI.category;
  const [category, setCategory] = state.courseAPI.category;
  const [search, setSearch] = state.courseAPI.search;

  const handleCategory = (e) => {
    setCategory(e.target.value);
    setSearch("");
  };

  return (
    <Grid container spacing={4} sx={{ mb: 6 }}>
      <Grid item md={3} xs={12} sm={12}>
        <FormControl fullWidth size="small" sx={{ backgroundColor: "white" }}>
          <InputLabel color="warning" id="demo-simple-select-label">
            Category
          </InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={category}
            label="Category"
            color="warning"
            sx={{ bgcolor: "white" }}
            onChange={handleCategory}
          >
            <MenuItem value="">None</MenuItem>
            {categories &&
              categories.map((category) => (
                <MenuItem
                  value={"category=" + category.name}
                  key={category._id}
                >
                  {category.name}
                </MenuItem>
              ))}
          </Select>
        </FormControl>
      </Grid>
      <Grid item md={9} xs={12} sm={12}>
        <TextField
          sx={{ backgroundColor: "white" }}
          id="outlined-basic"
          label="Search"
          variant="outlined"
          type="text"
          fullWidth
          size="small"
          color="warning"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </Grid>
    </Grid>
  );
};

export default Filter;
