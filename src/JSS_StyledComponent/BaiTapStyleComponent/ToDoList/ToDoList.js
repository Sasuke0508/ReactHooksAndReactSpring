import React, { Component } from "react";
import { Container } from "../../ComponentsToDoList/Container";
import { Dropdown } from "../../ComponentsToDoList/Dropdown";
import {
  Heading1,
  Heading2,
  Heading3,
  Heading4,
  Heading5,
} from "../../ComponentsToDoList/Heading";
import { Label, Input, TextField } from "../../ComponentsToDoList/TextField";
import { Button } from "../../ComponentsToDoList/Button";
import {
  Table,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from "../../ComponentsToDoList/Table";

import { keyframes, ThemeProvider } from "styled-components";
import { ToDoListDefaultTheme } from "../../Themes/ToDoListDefaultTheme";
import { ToDoListLightTheme } from "../../Themes/ToDoListLightTheme";
import { ToDoListDarkTheme } from "../../Themes/ToDoListDarkThem";
import { connect } from "react-redux";
import {
  addTaskAction,
  changeThemeAction,
  deleteTaskAction,
  doneTaskAction,
  editTaskAction,
  updateTaskAction,
} from "../../../redux/action/ToDoListAction";
import { arrayTheme } from "../../Themes/ThemeManager";
import { CHANGE_THEME } from "../../../redux/type/ToDoList";
class ToDoList extends Component {
  state = {
    taskName: "",
    disabled: true,
  };

  renderTaskToDo = () => {
    return this.props.listTask
      .filter((task) => !task.done)
      .map((task, index) => {
        return (
          <Tr key={index}>
            <Th>{task.taskName}</Th>
            <Th className="text-end">
              <Button
                className="me-1"
                onClick={() => {
                  this.setState(
                    {
                      disabled: false,
                    },
                    () => {
                      this.props.dispatch(editTaskAction(task.id));
                    }
                  );
                }}
              >
                <i className="fa fa-edit"></i>
              </Button>
              <Button
                className="me-1"
                onClick={() => {
                  this.props.dispatch(doneTaskAction(task.id));
                }}
              >
                <i className="fa fa-check"></i>
              </Button>
              <Button
                className="me-1"
                onClick={() => {
                  this.props.dispatch(deleteTaskAction(task.id));
                }}
              >
                <i className="fa fa-trash"></i>
              </Button>
            </Th>
          </Tr>
        );
      });
  };

  renderTaskComplete = () => {
    return this.props.listTask
      .filter((task) => task.done)
      .map((task, index) => {
        return (
          <Tr key={index}>
            <Th>{task.taskName}</Th>
            <Th className="text-end">
              <Button
                className="me-1"
                onClick={() => {
                  this.props.dispatch(deleteTaskAction(task.id));
                }}
              >
                <i className="fa fa-trash"></i>
              </Button>
            </Th>
          </Tr>
        );
      });
  };

  renderTheme = () => {
    return arrayTheme.map((theme, key) => {
      return (
        <option value={theme.themeName} index={key}>
          {theme.themeName}
        </option>
      );
    });
  };

  // Life cycle cho react b???n <= 16 nh???n v??o props m???i ???????c th???c thi tr?????c render
  // componentWillReceiveProps(newProps){
  //   console.log('this.props: ', this.props);
  //   console.log('newProps: ',newProps);
  //   this.setState({
  //     taskName: newProps.taskEdit.taskName
  //   })

  // }

  // LifeCycle t??nh kh??ng truy su???t = this, nh??ng trong case n??y ko sd ???????c
  // static getDerivedStateFromProps(newProps, currentState){

  //   //Tr??? v??? state m???i
  //   let newState = {...currentState, taskName: newProps.taskEdit.taskName};
  //   return newState;
  //   // Tr??? v??? null, state gi??? nguy??n
  //   // return null;
  // }

  // LifeCycle n??y tr??? v??? props c?? v?? state c?? c???a component tr?????c khi render
  // nh??ng ch???y sau render
  componentDidUpdate(prevProps, prevState) {
    // ????? tr??nh l???p v?? t???n, so s??nh n???u nh?? props tr?????c ???? m?? taskEdit tr?????c
    // kh??c taskEdit sau th?? m???i setState
    if (prevProps.taskEdit.taskName !== this.props.taskEdit.taskName) {
      this.setState({
        taskName: this.props.taskEdit.taskName,
      });
    }
  }
  render() {
    return (
      <ThemeProvider theme={this.props.themeToDoList}>
        <Container className="w-50 mt-3">
          <Dropdown
            onChange={(event) => {
              let { value } = event.target;
              this.props.dispatch(changeThemeAction(value));
              //   this.props.changeTheme(value);
            }}
          >
            {this.renderTheme()}
          </Dropdown>
          <Heading2 className="text-center">To Do List</Heading2>
          <Label>Task name</Label>
          <br />
          <Input
            value={this.state.taskName}
            className="mb-2"
            onChange={(event) => {
              this.setState({
                taskName: event.target.value,
              });
            }}
            name="taskName"
          ></Input>
          {this.state.disabled ? (
            <Button
              className="me-1"
              onClick={() => {
                //   L???y th??ng tin ng?????i d??ng nh???p v??o
                let { taskName } = this.state;
                // T???o 1 task Object
                let newTask = {
                  id: this.props.listTask.length + 1,
                  taskName: taskName,
                  done: false,
                };
                //   console.log(newTask);
                // ????a task l??n redux
                this.props.dispatch(addTaskAction(newTask));
              }}
            >
              <i className="fa fa-plus"></i> Add
            </Button>
          ) : (
            <Button disabled className="me-1">
              <i className="fa fa-plus"></i> Add
            </Button>
          )}
          {this.state.disabled ? (
            <Button
              disabled
              className="me-1"
            >
              <i className="fa fa-upload"></i> Update
            </Button>
          ) : (
            <Button
              className="me-1"
              onClick={() => {
                this.setState({ disabled: true }, () => {
                  this.props.dispatch(updateTaskAction(this.state.taskName));
                });
              }}
            >
              <i className="fa fa-upload"></i> Update
            </Button>
          )}

          <Button className="me-1">
            <i className="fa fa-search"></i> Search
          </Button>
          <hr />
          <Heading3>Task to do</Heading3>
          <Table>
            <Thead>{this.renderTaskToDo()}</Thead>
          </Table>
          <hr />
          <Heading3>Task complete</Heading3>
          <Table>
            <Thead>{this.renderTaskComplete()}</Thead>
          </Table>
        </Container>
      </ThemeProvider>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    themeToDoList: state.ToDoListReducer.themeToDoList,
    listTask: state.ToDoListReducer.listTask,
    taskEdit: state.ToDoListReducer.taskEdit,
  };
};

// const mapDispatchToProps = (dispatch) => {
//   return {
//     addTask: (newTask) => {
//       dispatch(addTaskAction(newTask));
//     },
//     changeTheme: (themeName) => {
//         dispatch(changeThemeAction(themeName))
//     }
//   };
// };

export default connect(mapStateToProps)(ToDoList);
