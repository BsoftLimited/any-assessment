import * as React from 'react';

import TextField from '@mui/material/TextField';
import './App.css';

const App = () => {
  return <form>
    <label>My Rent</label>
    <TextField id="outlined-basic" label="Outlined" variant="outlined" />
    <TextField id="outlined-basic" label="Outlined" variant="outlined" />
    <TextField id="outlined-basic" label="Outlined" variant="outlined" />
  </form>;
}

export default App;
