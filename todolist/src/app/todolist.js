import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
//state

function createData(name, text) {
  return { name, text};
}

const rows = [
  createData("-", "do something"),
];

export default function TodoList(props) {
  return (<div>
    <table>
      <tbody>
        <tr>
          <td>+</td>
        </tr>
      </tbody>
    </table>

    <Button variant="contained">add</Button>

    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Type</TableCell>
            <TableCell align="left">Text</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="left">{row.text}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>

  </div>);
}
