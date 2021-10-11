import React, { useRef } from "react";
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
import Alert from "@mui/material/Alert";
import Stack from "@mui/material/Stack";
import { useSelector, useDispatch } from "react-redux";
import {
  store,
  selectList,
  addTodo,
  delTodo,
  toggleDoneStatus,
  makeTodoRec,
} from "./store";
import { connect } from "react-redux";
/* TODO
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
  static TODO_MAX_LENGTH = 20;

  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.addTodoItem = this.addTodoItem.bind(this);
    this.state = {
      value: "",
      alert: null,
    };
  }

  handleChange(e) {
    this.setState({
      value: e.target.value,
    });
  }

  addTodoItem() {
    if (this.state.value.length > InputArea.TODO_MAX_LENGTH) {
      this.showAlert("Max length exceeded");
    } else if (this.state.value.length === 0) {
      this.showAlert("Empty input");
    } else {
      this.props.addTodo(makeTodoRec("Undone", this.state.value));
    }
  }

  showAlert(text) {
    this.setState({
      alert: <TodoAlert text={text} />,
    });
    setTimeout(() => this.setState({ alert: null }), 1500);
  }

  render() {
    return (
      <div className="todo-input-area">
        <div className="todo-input">
          <TextField
            id="outlined-basic"
            label="Todo text"
            variant="outlined"
            onChange={(e) => this.handleChange(e)}
          />
        </div>
        <Button variant="contained" onClick={this.addTodoItem}>
          add
        </Button>
        <div className="alert">{this.state.alert}</div>
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
    toggleDoneStatus: (id) => {
      dispatch(toggleDoneStatus(id));
    },
  };
};
const InputAreaD = connect(null, mapDispatchToProps)(InputArea);

class DelTodoButtonPlain extends React.Component {
  render() {
    return (
      <Button
        variant="contained"
        onClick={() => this.props.delTodo(this.props.id)}
      >
        X
      </Button>
    );
  }
}
const DelTodoButton = connect(null, mapDispatchToProps)(DelTodoButtonPlain);

function TodoTable(props) {
  const dispatch = useDispatch();
  const todolist = useSelector(selectList);
  const tableHead = (
    <TableHead>
      <TableRow>
        <TableCell>Delete</TableCell>
        <TableCell>Type</TableCell>
        <TableCell>Text</TableCell>
      </TableRow>
    </TableHead>
  );
  const handleClick = (e, id) => {
    dispatch(toggleDoneStatus(id));
  };
  const typeClass = (type) => {
    if (type === "Done") return "type-cell-done";
    if (type === "Undone") return "type-cell-undone";
    return "";
  };
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        {tableHead}
        <TableBody>
          {todolist.map((row, i) => (
            <TableRow
              key={row.id}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                <DelTodoButton id={row.id} />
              </TableCell>
              <TableCell
                component="th"
                scope="row"
                className={`type-cell ${typeClass(row.type)}`}
                onClick={(e) => handleClick(e, row.id)}
              >
                {row.type}
              </TableCell>
              <TableCell
                className="todo-text"
                onClick={(e) => handleClick(e, row.id)}
              >
                {row.text}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

function TodoAlert(props) {
  return (
    <Stack sx={{ width: "100%" }} spacing={2}>
      <Alert severity="warning">{props.text}</Alert>
    </Stack>
  );
}
