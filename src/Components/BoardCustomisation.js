import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import {useSelector} from "react-redux";

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
`;


function BoardCustomisation () {

  const orderModule = useSelector((state) => state.orderModule);
  const {switchCount} = orderModule;

  const location = useLocation(); 
  const data = location.state;

  const [boardData, setBoardData] = useState({});

  const handleChange = (event) => {
    console.log("selected name = ", event.target.name);
    let _boardData = {...boardData};

    _boardData[event.target.name] = event.target.value;
    setBoardData(_boardData);
    // setSelect(event.target.value);
  };

  const checkData = () => {
    console.log("boardData = ", boardData);
  }

  return (
    <Container>
      {Array.from({ length: switchCount }).map((data, index)=>(
        <Card sx={{ marginBottom: "20px", width: '50%', boxShadow: 'rgba(17, 17, 26, 0.1) 0px 4px 16px, rgba(17, 17, 26, 0.1) 0px 8px 24px, rgba(17, 17, 26, 0.1) 0px 16px 56px' }}>
          <CardContent>
            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom mb={5}>
            Number of Sockets in your Board {index+1} (Please select 1 as its for testing)
            </Typography>
            <FormControl sx={{ m: 1, minWidth: 120 }} required>
              <InputLabel id="demo-simple-select-helper-label">Choose</InputLabel>
              <Select
                labelId="demo-simple-select-helper-label"
                id="demo-simple-select-helper"
                label="Select"
                name = {`socket-component-${index}`}
                onChange={handleChange}
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={1}>1</MenuItem>
                <MenuItem value={2}>2</MenuItem>
                <MenuItem value={3}>3</MenuItem>
              </Select>
            </FormControl>
          </CardContent>
        </Card>
      ))}
      
      {Array.from({ length: switchCount }).map((data, index)=>(
        <Card sx={{ marginBottom: "20px", width: '50%', boxShadow: 'rgba(17, 17, 26, 0.1) 0px 4px 16px, rgba(17, 17, 26, 0.1) 0px 8px 24px, rgba(17, 17, 26, 0.1) 0px 16px 56px' }}>
          <CardContent>
            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom mb={5}>
            Number of switches in your Board {index+1} (Please select 1 as its for testing)
            </Typography>
            <FormControl sx={{ m: 1, minWidth: 120 }} required>
              <InputLabel id="demo-simple-select-helper-label">Choose</InputLabel>
              <Select
                labelId="demo-simple-select-helper-label"
                id="demo-simple-select-helper"
                label="Select"
                name = {`switch-component-${index}`}
                onChange={handleChange}
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={1}>1</MenuItem>
                <MenuItem value={2}>2</MenuItem>
                <MenuItem value={3}>3</MenuItem>
              </Select>
            </FormControl>
          </CardContent>
        </Card>
      ))}

      <ButtonGroup>
        <Button variant="contained" component={Link} to="/order/quote">Back</Button>
        <Button variant="contained" component={Link} to="/order/function">Next</Button>
        <Button variant="contained" onClick={checkData} state={data}>Check Data</Button>
        <Button variant="text">Clear form</Button>
      </ButtonGroup>
    </Container>
  );
}

export default BoardCustomisation;
