import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { useSelector, useDispatch } from 'react-redux';
import { store, selectList } from './store';

export default function TodoList(props) {
  return (
    <div>
      <InputArea />
      <TodoTable />
    </div>
  );
}

function InputArea(props) {
  return (
    <div className="todo-input-area">
      <div className="todo-input">
        <TextField id="outlined-basic" label="Outlined" variant="outlined" />
      </div>
      <Button variant="contained">add</Button>
    </div>
  );
}

function TodoTable(props) {
  const todolist = useSelector(selectList);
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Type</TableCell>
            <TableCell align="left">Text</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {todolist.map((row, i) => (
            <TableRow
              key={i}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.type}
              </TableCell>
              <TableCell align="left">{row.text}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
