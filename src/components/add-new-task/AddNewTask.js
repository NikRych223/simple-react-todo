import { Button, TextField, Box } from "@mui/material";
import { Container } from "@mui/material";
import { useContext, useState } from "react";

import { saveInLocalStorage } from "../../utils/localStorageTools";
import ToDoContext from "../../contexts/ToDoContext";

const AddNewTask = (props) => {

    // const {setTodoArray, todoArray, idIncrement} = props;
    const {todoArray, setTodoArray, idIncrement} = useContext(ToDoContext);

    const [titleText, setTitleText] = useState("");
    const [descText, setDescText] = useState("");
    const [error, setError] = useState(false);
    const [errorMessageTitle, setErrorMessageTitle] = useState("");
    const [errorMessageDesc, setErrorMessageDesc] = useState("");

    const addNewItem = () => {
        if (!error) {
            if (titleText === "" || titleText === " ") {
                setError(true);
                return;
            }

            const time = new Date().toLocaleTimeString();
            const date = new Date().toLocaleDateString();

            const newTask = {
                id: idIncrement(),
                text: titleText,
                description: descText,
                time: `${time} ${date}`,
                completed: false
            };
    
            setTodoArray(prev => {
                return [...prev, newTask];
            });
    
            setTitleText("");
            setDescText("");
            saveInLocalStorage("todoData", [...todoArray, newTask]);
        }
    };

    const onHandleChange = (e, setText, setErrorMessage, min, max) => {
        const value = e.target.value;
        setText(value);

        const checkNotEmpy = value === null || value === "" || value === " ";

        if (checkNotEmpy) {
            setError(true);
            setErrorMessage("Field must not be empty");
        } else if (value.length < min) {
            setError(true);
            setErrorMessage("Text too short");
        } else if (value.length > max) {
            setError(true);
            setErrorMessage("Text too long");
        } else {
            setError(false);
        }
    };

    return (
        <Container>
            <div className="add-new-task">
                <Box sx={{mt: 2, display: "flex", justifyContent: "center", alignItems: "baseline", gap: "2rem"}}>
                    <Button variant="contained" onClick={addNewItem}>Add</Button>
                    <TextField 
                        id="outlined-basic" 
                        label={error ? "Error" : "Input your task"} 
                        variant="outlined" 
                        value={titleText} 
                        onChange={(e) => onHandleChange(e, setTitleText, setErrorMessageTitle, 5, 30)}
                        error={error ? true : false}
                        helperText={error ? errorMessageTitle : null}/>

                        <TextField 
                        id="outlined-basic" 
                        label={error ? "Error" : "Input your description"} 
                        variant="outlined" 
                        value={descText} 
                        onChange={(e) => onHandleChange(e, setDescText, setErrorMessageDesc, 5, 100)}
                        error={error ? true : false}
                        helperText={error ? errorMessageDesc : null}/>
                </Box>
            </div>
        </Container>
    );
};

export default AddNewTask;