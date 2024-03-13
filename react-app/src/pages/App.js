import '../App.css';
import { useNavigate } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

function App() {
  const navigate = useNavigate();
  
  const handleRedirectR = () => {
    navigate("/register");
  };

  const handleRedirectL = () => {
    navigate("/login");
  };

  return (
    
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <div className='Container'>
          <Typography variant="h3" component="h1"> Welcome! </Typography>
        </div>

        <div className='Buttons'>
          <Button variant="contained" size='medium' color="info" onClick={handleRedirectL}><Typography variant="h6" component="h6">Login</Typography></Button>
          <Button variant="contained" size='medium' color="info" onClick={handleRedirectR}><Typography variant="h6" component="h6">Sign-Up</Typography></Button>
        </div>

      </ThemeProvider>
  );
}

export default App;
