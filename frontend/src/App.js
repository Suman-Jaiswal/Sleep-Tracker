import './App.css';
import {Typography, Button} from  '@material-ui/core'

function App() {
  return (
    <div className="App">
        <Typography
         variant='h3'
         gutterBottom
        >
          Create a new group
        </Typography>
        <Button>
          LINK
        </Button>
        <Button variant="contained" color='primary'>Default</Button>
    </div>
  );
}

export default App;
