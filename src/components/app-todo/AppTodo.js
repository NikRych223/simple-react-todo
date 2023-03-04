import { Container, Box, List, ListItem } from "@mui/material";
import { useContext } from "react";

import TodoItem from "../todo-item/TodoItem";
import ToDoContext from "../../contexts/ToDoContext";

const AppTodo = (props) => {

    const { filteredData } = useContext(ToDoContext);
    
    const elements = filteredData.map((item, i) => {

        const { id, text, description, time, completed } = item;

        return (
            <ListItem key={id} sx={{display: "flex", flexDirection: "column"}}>
                <TodoItem 
                    id={id}
                    text={text}
                    description={description}
                    time={time}
                    completed={completed}/>
            </ListItem>
        );
    });

    return (
        <Container maxWidth="sm">
            <Box>
                <List>
                    {elements}
                </List>
            </Box>
        </Container>
    );
};

export default AppTodo;