import { Button, TextField, Box } from "@mui/material";
import { Container } from "@mui/material";
import { useState } from "react";

const AddNewTask = (props) => {

    const {setTodoArray, newID} = props;

    const [inputText, setInputText] = useState("");

    const addNewItem = () => {

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

    return (
        <Container>
            <div className="add-new-task">
                <Box sx={{mt: 2, display: "flex", justifyContent: "center", alignItems: "baseline", gap: "2rem"}}>
                    <Button variant="contained" onClick={addNewItem}>Add</Button>
                    <TextField id="outlined-basic" label="Input your task" variant="outlined" value={inputText} onChange={(e) => setInputText(e.target.value)}/>
                </Box>
            </div>
        </Container>
    );
};

export default AddNewTask;