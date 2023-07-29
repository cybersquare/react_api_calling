import './App.css';
import cs_logo from './cs_logo.png'
import WebRoutes from './routes/WebRoutes';
import WebLinks from './routes/WebLinks';
import { BrowserRouter } from 'react-router-dom';
import Footer from './components/Footer/Footer';

import { useState, useEffect } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

import axios from 'axios';

function App() {

  
  // Suppose you would like to show random motivational quotes on your website
  const [quote, setQuote] = useState(0);
  
  useEffect(() => {
    fetch('https://lucifer-quotes.vercel.app/api/quotes')
    .then(response => (response.json()))
    .then(data => setQuote(data[0]));
  },[]);

   useEffect(() => {
    axios.get('https://lucifer-quotes.vercel.app/api/quotes')
    .then(response => {
      setQuote(response.data[0]);
  });
  },[]);

 


  return (
    <BrowserRouter>
      <div className='header'>
        <img src={cs_logo} alt="CyberSquare logo" width="300" />
        {/* Navbar */}
        <WebLinks/>
      </div>
     
      
      <WebRoutes/>
     <br/>
     <center>
      <Card sx={{width: 600 }} variant="outlined">
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Thought of the Day
        </Typography>
        <Typography variant="h6" component="div">
        {quote["quote"]}
        </Typography>
        <Typography variant="body2">
        --{quote.author}
        </Typography>
      </CardContent>
    </Card>
    </center>
      <Footer/>
    </BrowserRouter>
  );
}
export default App;

