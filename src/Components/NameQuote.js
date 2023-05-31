import React, { useState } from 'react';
import {useDispatch} from 'react-redux';
import styled from 'styled-components';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import { setSwitchCountAction } from '../redux/order/actions';

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

function NameQuote () {

  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  const [count, setCount] = useState('');
  const [name, setName] = useState('');

  const handleChange = (event) => {
    if(event.target.name === "name") setName(event.target.value);
    else setCount(event.target.value);
    
  };

  const setSwitchCount = () => {
    dispatch(setSwitchCountAction(count, name));
    navigate('/order/board');
  }

  return (
    <Container>
      <Card sx={{ width: '50%', boxShadow: 'rgba(17, 17, 26, 0.1) 0px 4px 16px, rgba(17, 17, 26, 0.1) 0px 8px 24px, rgba(17, 17, 26, 0.1) 0px 16px 56px', marginBottom: '50px' }}>
        <CardContent>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom mb={5}>
            What is your name?
          </Typography>
          <TextField id="outlined-basic" label="Name" variant="outlined" value={name} name = "name" onChange={handleChange} required />
        </CardContent>
      </Card>
      <Card sx={{ width: '50%', boxShadow: 'rgba(17, 17, 26, 0.1) 0px 4px 16px, rgba(17, 17, 26, 0.1) 0px 8px 24px, rgba(17, 17, 26, 0.1) 0px 16px 56px' }}>
        <CardContent>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom mb={5}>
            How many Switch Boards would you like to Automate?
          </Typography>
          <FormControl sx={{ m: 1, minWidth: 120 }} required>
            <InputLabel id="demo-simple-select-helper-label">Select</InputLabel>
            <Select
              labelId="demo-simple-select-helper-label"
              id="demo-simple-select-helper"
              value={count}
              label="Select"
              name = "count"
              onChange={handleChange}
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={1}>1</MenuItem>
              <MenuItem value={2}>2</MenuItem>
            </Select>
          </FormControl>
        </CardContent>
      </Card>
      <ButtonGroup>
        {/* <Link to="/order/board"> */}
          <Button onClick={setSwitchCount}>Next</Button>
        {/* </Link> */}
        <Button variant="text">Clear form</Button>
      </ButtonGroup>
    </Container>
  );
}

export default NameQuote;
