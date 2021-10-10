import React, {useRef} from "react";
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
import { store, selectList, addTodo, makeTodoRec } from './store';
import { connect } from 'react-redux';

export default function TodoList(props) {
  return (
    <div>
      <InputAreaD />
      <TodoTable />
    </div>
  );
}

class InputArea extends React.Component {

  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      value: "",
    }
  }

  handleChange(e) {
    this.setState({
      value: e.target.value,
    });
  }

  render() {
    return (
      <div className="todo-input-area">
        <div className="todo-input">
          <TextField id="outlined-basic" label="Todo text" variant="outlined" onChange={(e) => this.handleChange(e)}/>
        </div>
        <Button variant="contained" onClick={() => this.props.addTodo(makeTodoRec("New", this.state.value))}>add</Button>
      </div>
    );
  }
}
const mapDispatchToProps = (dispatch) => {
    return {
        addTodo: (data) => {
          dispatch(addTodo(data));
        },
    }
};
const InputAreaD = connect(null, mapDispatchToProps)(InputArea);

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
