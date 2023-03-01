import { useEffect, useState } from "react";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider, createTheme } from '@mui/material/styles';

import AppHeader from "./components/app-header/AppHeader";
import AddNewTask from "./components/add-new-task/AddNewTask";
import AppTodo from "./components/app-todo/AppTodo";

import { saveInLocalStorage } from "./utils/localStorageTools";

const darkTheme = createTheme({
    palette: {
      mode: 'dark',
    },
});

const App = () => {

    const [todoArray, setTodoArray] = useState([]);
    const [todoID, setTodoID] = useState(1);
    const [filter, setFilter] = useState(0);

    const idIncrement = () => {
        setTodoID(id => id + 1);
        return todoID;
    };

    // const updateLocalStorage = () => {
    //     localStorage.setItem('todoData', JSON.stringify(todoArray));
    //     console.log('save')
    // };

    const onCompleteTask = (id) => {
        const newData = todoArray;
        
        newData.forEach(item => {
            if (item.id === id) {
                item.completed = !item.completed;
            }
        });

        setTodoArray(newData);
        saveInLocalStorage("todoData", newData);
    };

    const onRemoveTask = (id) => {
        const newData = todoArray.filter(item => item.id !== id);
        setTodoArray(newData);
        saveInLocalStorage("todoData", newData);
    }

    const filteredData = todoArray.filter(item => {
        if (filter === 0) {
            return item;
        }

        if (filter === 1) {
            return item.completed === true;
        }

        if (filter === 2) {
            return item.completed === false;
        }

        return false;
    });

    // console.log("render");

    useEffect(() => {
        if (localStorage.getItem('todoData')) {
            const newData = JSON.parse(localStorage.getItem('todoData'));
            console.log(newData);
            setTodoArray(newData);
        }
    }, []);

    // useEffect(() => {
    //     if (todoArray.length >= 0) {
    //         localStorage.setItem('todoData', JSON.stringify(todoArray));
    //     }

    //     // if (todoArray.length === 0) {
    //     //     localStorage.removeItem('todoData');
    //     // }
    // }, [todoArray]);

    return (
        <>
            <ThemeProvider theme={darkTheme}>
                <CssBaseline/>
                <AppHeader setFilter={setFilter}/>

                <main>
                    <AppTodo dataList={filteredData} onTask={onCompleteTask} onRemoveTask={onRemoveTask}/>
                </main>

                <AddNewTask todoArray={todoArray} setTodoArray={setTodoArray} newID={idIncrement}/>
            </ThemeProvider>
        </>
    );
};

export default App;