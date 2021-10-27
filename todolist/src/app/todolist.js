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
import Divider from "@mui/material/Divider";
import Badge from "@mui/material/Badge";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import ClearIcon from "@mui/icons-material/Clear";
import CardTravelIcon from "@mui/icons-material/CardTravel";
import ConstructionIcon from "@mui/icons-material/Construction";
import FormatAlignJustifyIcon from "@mui/icons-material/FormatAlignJustify";
import AllInclusiveIcon from "@mui/icons-material/AllInclusive";
import Grid from "@mui/material/Grid";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import { useSelector, useDispatch } from "react-redux";
import {
  store,
  selectList,
  selectFilter,
  addTodo,
  delTodo,
  toggleDoneStatus,
  makeTodoRec,
  changeFilter,
} from "./store";
import { connect } from "react-redux";

export const TodoTypeDone = "Done";
export const TodoTypeUndone = "Undone";
export const TodoFilterAll = "all";

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
    this.handleKeyDown = this.handleKeyDown.bind(this);
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

  handleKeyDown(e) {
    if (e.key === "Enter") {
      this.addTodoItem();
    }
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
        <Grid container justifyContent="center" spacing={2} sx={{ alignItems: "center" }} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid item xs={4}>
            <div className="todo-input">
              <TextField
                id="outlined-basic"
                label="Todo text"
                variant="outlined"
                onChange={(e) => this.handleChange(e)}
                onKeyDown={(e) => this.handleKeyDown(e)}
              />
            </div>
          </Grid>
          <Grid item xs={1}>
            <Box sx={{ m: -1 }}>
              <Button variant="contained" onClick={this.addTodoItem}>
                add
              </Button>
            </Box>
          </Grid>

          <div className="alert">{this.state.alert}</div>

          <Grid item xs={4}>
            <TodoFilterD />
          </Grid>

          <Grid item xs={3}>
            <TodoCounter />
          </Grid>
        </Grid>
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
    changeFilter: (filter) => {
      dispatch(changeFilter(filter));
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

function todoFilterList(list, filter) {
  switch (filter) {
    case TodoFilterAll: {
      return list;
      break;
    }
    case TodoTypeDone: {
      return list.filter((e) => e.type === TodoTypeDone);
      break;
    }
    case TodoTypeUndone: {
      return list.filter((e) => e.type === TodoTypeUndone);
      break;
    }
    default:
      return list;
  }
}

function TodoTable(props) {
  const dispatch = useDispatch();
  const todolist = useSelector(selectList);
  const filter = useSelector(selectFilter);
  const filtredList = todoFilterList(todolist, filter);
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
          {filtredList.map((row, i) => (
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

function TodoCounter(props) {
  const todolist = useSelector(selectList);
  const doneCount = todolist.reduce(
    (total, el) => (el.type === TodoTypeDone ? total + 1 : total),
    0
  );
  const unDoneCount = todolist.reduce(
    (total, el) => (el.type === TodoTypeUndone ? total + 1 : total),
    0
  );
  return (
    <Grid container spacing={1} sx={{ alignItems: "center" }}>
      <Grid item xs={2}>
        <Badge badgeContent={doneCount} color="primary">
          <CheckCircleIcon color="primary" />
        </Badge>
      </Grid>
      <Grid item xs={2}>
        <Badge badgeContent={unDoneCount} color="secondary">
          <CardTravelIcon color="secondary" />
        </Badge>
      </Grid>
    </Grid>
  );
}

class TodoFilter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filter: "all",
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e, newValue) {
    if (!newValue) return;
    this.setState({
      filter: newValue,
    });
    this.props.changeFilter(newValue);
  }

  render() {
    return (
      <ToggleButtonGroup
        exclusive
        value={this.state.filter}
        onChange={this.handleChange}
        aria-label="filter"
      >
        <ToggleButton value="all" aria-label="all">
          <AllInclusiveIcon />
        </ToggleButton>
        <ToggleButton value={TodoTypeDone} aria-label={TodoTypeDone}>
          <CheckCircleIcon color="primary" />
        </ToggleButton>
        <ToggleButton value={TodoTypeUndone} aria-label={TodoTypeUndone}>
          <CardTravelIcon color="secondary" />
        </ToggleButton>
      </ToggleButtonGroup>
    );
  }
}
const TodoFilterD = connect(null, mapDispatchToProps)(TodoFilter);
