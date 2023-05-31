import styled from 'styled-components';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
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

function Complete () {
  
  return (
    <Container>
      <Card sx={{ width: '50%', boxShadow: 'rgba(17, 17, 26, 0.1) 0px 4px 16px, rgba(17, 17, 26, 0.1) 0px 8px 24px, rgba(17, 17, 26, 0.1) 0px 16px 56px' }}>
        <CardContent>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom mb={5}>
          Complete
          </Typography>          
        </CardContent>
      </Card>
      <Card sx={{ width: '50%', boxShadow: 'rgba(17, 17, 26, 0.1) 0px 4px 16px, rgba(17, 17, 26, 0.1) 0px 8px 24px, rgba(17, 17, 26, 0.1) 0px 16px 56px' }}>
        <CardContent>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom mb={5}>
          Thank you for your selections, We have finalised your order accordingly
          </Typography>          
        </CardContent>
      </Card>
      <ButtonGroup>
        <Button variant="contained" component={Link} to="/order/voice">Back</Button>
        <Button variant="contained">Submit</Button>
      </ButtonGroup>
    </Container>
  );
}

export default Complete;
