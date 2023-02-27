import { useState } from "react";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider, createTheme } from '@mui/material/styles';

import AppHeader from "./components/app-header/AppHeader";
import AddNewTask from "./components/add-new-task/AddNewTask";

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
    }

    console.log(todoArray);

    return (
        <>
            <ThemeProvider theme={darkTheme}>
                <CssBaseline/>
                <AppHeader/>
                <AddNewTask setTodoArray={setTodoArray} newID={idIncrement}/>

                <main>

                </main>
            </ThemeProvider>
        </>
    );
}

export default App;