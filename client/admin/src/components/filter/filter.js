import React, { useContext } from "react";
import {
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Container,
} from "@mui/material";
import { GlobalState } from "../../GlobalState";

const Filter = () => {
  const state = useContext(GlobalState);
  const [categories] = state.courseCategoryAPI.courseCategory;
  const [category, setCategory] = state.courseAPI.category;
  const [search, setSearch] = state.courseAPI.search;

  const handleCategory = (e) => {
    setCategory(e.target.value);
    setSearch("");
  };
  return (
    <Container maxWidth="xl">
      <Grid container spacing={3} sx={{ mt: 1, px: 5 }}>
        <Grid item md={3} xs={12} sm={12}>
          <FormControl fullWidth>
            <InputLabel color="warning" id="demo-simple-select-label">
              Category
            </InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={category}
              label="Category"
              color="warning"
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
            id="outlined-basic"
            label="Search"
            variant="filled"
            type="text"
            fullWidth
            color="warning"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Filter;
