import { Button, TextField, Box } from "@mui/material";
import { Container } from "@mui/material";
import { useState } from "react";

const AddNewTask = (props) => {

    const {setTodoArray, newID} = props;

    const [inputText, setInputText] = useState("");
    const [error, setError] = useState(false);

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
        }
    };

    const onHandleChange = (e) => {
        const value = e.target.value;
        setInputText(value);

        const checkNotEmpy = value === null || value === "" || value === " ";
        const checkLength = value.length < 5 || value.length > 20;

        if (checkNotEmpy || checkLength) {
            setError(true);
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
                        helperText={error ? "Filed is empty" : null}/>
                </Box>
            </div>
        </Container>
    );
};

export default AddNewTask;