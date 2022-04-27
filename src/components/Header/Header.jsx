import React from 'react';
import './Header.css';
import { createTheme, ThemeProvider } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';

const Header = () => {

    const darkTheme = createTheme({
        palette: {
            primary: {
                main:'#fff',
            },
          mode: 'dark',
        },
      });


  return (
    <div className='header'>
        <span className='title'>Word Seeker</span>
        <div className='inputs'>
            <ThemeProvider theme={darkTheme}>
        <TextField id="standard-basic" label="Standard" variant="standard" />
        <TextField
          id="standard-select-currency"
          select
          label="Select"
          helperText="Please select your currency"
          variant="standard"
        >
            <MenuItem>
            english
            </MenuItem>
        </TextField>
        </ThemeProvider>
        </div>
    </div>
  );
};

export default Header