import styled from 'styled-components';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import FormControl from '@mui/material/FormControl';
import Button from '@mui/material/Button';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormLabel from '@mui/material/FormLabel';
import { Link } from 'react-router-dom';


const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 100px;
`;

const ButtonGroup = styled.div`
  display: flex;
  justify-content: space-between;
  width: 50%;
  margin-top: 20px;
`;

function WiFiQuote () {
  
  return (
    <Container>
      <Card sx={{ width: '50%', boxShadow: 'rgba(17, 17, 26, 0.1) 0px 4px 16px, rgba(17, 17, 26, 0.1) 0px 8px 24px, rgba(17, 17, 26, 0.1) 0px 16px 56px' }}>
        <CardContent>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom mb={5}>
          Wifi
          </Typography>
          <FormControl>
            <FormLabel id="demo-radio-buttons-group-label">Would you like to add a Wifi Router or Extender to make your SmartHome Connection more reliable?</FormLabel>
            <RadioGroup
              aria-labelledby="demo-radio-buttons-group-label"
              name="radio-buttons-group"
            >
              <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
              <FormControlLabel value="male" control={<Radio />} label="No" />
            </RadioGroup>
          </FormControl>
        </CardContent>
      </Card>
      <ButtonGroup>
        <Button variant="contained" component={Link} to="/order/function">Back</Button>
        <Button variant="contained" component={Link} to="/order/voice">Next</Button>
        <Button variant="text">Clear form</Button>
      </ButtonGroup>
    </Container>
  );
}

export default WiFiQuote;
