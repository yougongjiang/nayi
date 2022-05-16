import * as React from 'react';
import Link from '@mui/material/Link';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Switch from '@mui/material/Switch';
import Title from './Title';

// Generate Order Data
function createData(id, name,Method, date ) {
  return { id, name,  Method, date};
}

const rows = [
  createData(
    0,
    'Elvis Presley', 
    'Uploaded patch set 1.',
    '16 Mar, 2019',
  ),
  createData(
    1,
    'Paul McCartney',
    'Added to reviewer: ',
    '16 Mar, 2019', 
  ),
  createData(2, 'Tom Scholz', 'Build succeeded (check pipeline).','16 Mar, 2019', ),
  createData(
    3,
    'Paul McCartney',
    'Starting gate jobs.',
    '16 Mar, 2019', 
  ),
  createData(
    4,
    'Tom Scholz',
    'Added to reviewer: Sergii Golovatiuk',
    '16 Mar, 2019', 
  ),
];

function preventDefault(event) {
  event.preventDefault();
}

export default function Orders() {
  const [checked, setChecked] = React.useState(true);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
  };

  return (
    <React.Fragment>
      <Title>Change Log</Title>
      <Table size="small">
        <TableHead>
        <Switch
          checked={checked}
          onChange={handleChange}
          inputProps={{ 'aria-label': 'controlled' }}
        />
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.Method}</TableCell>
              <TableCell align="right">{`${row.date}`}</TableCell>
              
            </TableRow>
          ))}
        </TableBody>
      </Table>
      
    </React.Fragment>
  );
}