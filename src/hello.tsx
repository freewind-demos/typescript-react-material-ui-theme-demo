import React, {useState} from 'react';
import Checkbox from '@material-ui/core/Checkbox';
import {
  createMuiTheme,
  makeStyles,
  createStyles,
  Theme as AugmentedTheme,
} from '@material-ui/core/styles';
import {ThemeProvider} from '@material-ui/styles';
import {orange} from '@material-ui/core/colors';
import {Button} from '@material-ui/core';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';

// declare module '@material-ui/core/styles/createMuiTheme' {
//   interface Theme {
//     status: {
//       danger: string;
//     };
//   }
//
//   // allow configuration using `createMuiTheme`
//   interface ThemeOptions {
//     status?: {
//       danger?: string;
//     };
//   }
// }

// const useStyles = makeStyles((theme: AugmentedTheme) =>
//   createStyles({
//     root: {
//       color: theme.status.danger,
//       '&$checked': {
//         color: theme.status.danger,
//       },
//     },
//     checked: {},
//   }),
// );

// function CustomCheckbox() {
//   const classes = useStyles();
//
//   return (
//     <Checkbox
//       defaultChecked
//       classes={{
//         root: classes.root,
//         checked: classes.checked,
//       }}
//     />
//   );
// }

const theme1 = createMuiTheme({
  overrides: {
    MuiButton: {
      root: {
        color: 'red'
      }
    }
  }
});

const theme2 = createMuiTheme({
  overrides: {
    MuiButton: {
      root: {
        color: 'green'
      }
    }
  }
});

export default function CustomStyles() {
  const [theme, setTheme] = useState(theme1);

  function switchTheme() {
    if (theme === theme1) {
      setTheme(theme2)
    } else {
      setTheme(theme1)
    }
  }

  return <ThemeProvider theme={theme}>
    <Button variant='outlined' onClick={switchTheme}>Switch Theme</Button>
  </ThemeProvider>;
}
