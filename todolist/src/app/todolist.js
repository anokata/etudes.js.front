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
import { store, selectList, addTodo, delTodo, makeTodoRec } from './store';
import { connect } from 'react-redux';
/* TODO
Новая запись добавляет при условии, что её длина меньше N символов или равна ей;
Переключение статуса записи Выполнено / Невыполненный при клике на её название;
Фильтрация по типу (все, выполненные, невыполненные);
Отображение счётчика выполненных и невыполненных задач;
 * */

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
        delTodo: (id) => {
          dispatch(delTodo(id));
        },
    }
};
const InputAreaD = connect(null, mapDispatchToProps)(InputArea);

class DelTodoButtonPlain extends React.Component {
  render() {
    return (
        <Button variant="contained" onClick={() => this.props.delTodo(this.props.id)}>X</Button>
    );
  }
}
const DelTodoButton = connect(null, mapDispatchToProps)(DelTodoButtonPlain);

function TodoTable(props) {
  const todolist = useSelector(selectList);
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Delete</TableCell>
            <TableCell>Type</TableCell>
            <TableCell align="left">Text</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {todolist.map((row, i) => (
            <TableRow
              key={row.id}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                <DelTodoButton id={row.id} />
              </TableCell>
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
