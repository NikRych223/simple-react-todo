import { Button, TextField, Box } from "@mui/material";
import { Container } from "@mui/material";
import { useState } from "react";

import { saveInLocalStorage } from "../../utils/localStorageTools";

const AddNewTask = (props) => {

    const {setTodoArray, todoArray, newID} = props;

    const [inputText, setInputText] = useState("");
    const [error, setError] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");

    const addNewItem = () => {
        if (!error) {
            if (inputText === "" || inputText === " ") {
                setError(true);
                return;
            }
    
            const newTask = {
                id: newID(),
                text: inputText,
                completed: false
            };
    
            setTodoArray(prev => {
                return [...prev, newTask];
            });
    
            setInputText("");
            saveInLocalStorage("todoData", [...todoArray, newTask]);
        }
    };

    const onHandleChange = (e) => {
        const value = e.target.value;
        setInputText(value);

        const checkNotEmpy = value === null || value === "" || value === " ";

        if (checkNotEmpy) {
            setError(true);
            setErrorMessage("Field must not be empty");
        } else if (value.length < 5) {
            setError(true);
            setErrorMessage("Title too short");
        } else if (value.length > 30) {
            setError(true);
            setErrorMessage("Title too long");
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
                        value={inputText} 
                        onChange={(e) => onHandleChange(e)}
                        error={error ? true : false}
                        helperText={error ? errorMessage : null}/>
                </Box>
            </div>
        </Container>
    );
};

export default AddNewTask;