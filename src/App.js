import { useState } from "react";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider, createTheme } from '@mui/material/styles';

import AppHeader from "./components/app-header/AppHeader";
import AddNewTask from "./components/add-new-task/AddNewTask";
import AppTodo from "./components/app-todo/AppTodo";

const darkTheme = createTheme({
    palette: {
      mode: 'dark',
    },
  });

const App = () => {

    const [todoArray, setTodoArray] = useState([]);
    const [todoID, setTodoID] = useState(1);

    const idIncrement = () => {
        setTodoID(id => id + 1);
        return todoID;
    };

    const onCompleteTask = (id) => {
        const newData = todoArray;
        
        newData.forEach(item => {
            if (item.id === id) {
                item.completed = !item.completed;
            }
        });

        setTodoArray(newData);
    };

    console.log(todoArray);

    return (
        <>
            <ThemeProvider theme={darkTheme}>
                <CssBaseline/>
                <AppHeader/>

                <main>
                    <AppTodo dataList={todoArray} onTask={onCompleteTask}/>
                </main>

                <AddNewTask setTodoArray={setTodoArray} newID={idIncrement}/>
            </ThemeProvider>
        </>
    );
}

export default App;