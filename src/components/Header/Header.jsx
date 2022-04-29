import React from 'react';
import './Header.css';
import { createTheme, ThemeProvider } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import categories from '../../data/category';
import { debounce } from "lodash";

const Header = ({ 
  category,
  setCategory,
  setWord,
  word,
  setMeanings,
  LightTheme,
}) => {

  const darkTheme = createTheme({
    palette: {
      primary: {
        main: LightTheme ? "#000" : "#fff",
      },
      type: LightTheme ? "light" : "dark",
    },
  });

      const handleChange = (Language) => {
        setCategory(Language);
        setWord("");
        setMeanings([]);
      };

      const handleText = debounce((text) => {
        setWord(text);
      }, 200);
    

    return (
      <div className="header">
      <span className="title">{word ? word : "Word Seeker"}</span>
      <div className="inputs">
        <ThemeProvider theme={darkTheme}>
          <TextField
            className="search"
            value = {word}
            label = "Search a Word"
            onChange={(e) => handleText(e.target.value)}
          />
          <TextField
            select
            label="Language"
            value={category}
            onChange={(e) => handleChange(e.target.value)}
            className="select"
          >
            {categories.map((option) => (
              <MenuItem key={option.label} value={option.label}>
                {option.value}
              </MenuItem>
            ))}
          </TextField>
        </ThemeProvider>
      </div>
    </div>
  );
};

export default Header;