import { Container, Box, List, ListItem, ListItemButton, ListItemText, Checkbox, IconButton, Typography } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import { useContext, useEffect, useState } from "react";

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

const ControledCheckBox = ({id, initialCheck}) => {

    const {onCompleteTask} = useContext(ToDoContext);

    const [checked, setChecked] = useState(false);

    useEffect(() => {
        setChecked(initialCheck);
    }, [initialCheck]);

    const handleClick = (e) => {
        setChecked(prev => !prev);
        onCompleteTask(id);
        e.stopPropagation();
    };

    return (
        <Checkbox edge="start" onClick={(e) => handleClick(e)} checked={checked}/>
    );
};


// ADD DESCRIPTION

const TodoItem = ({id, text, description, time, completed}) => {

    const { onRemoveTask } = useContext(ToDoContext);

    const [descClick, setDescClick] = useState(false);

    const descElement = descClick ? <DescriptionModule description={description} time={time}/> : null;

    return (
        <>
            <ListItemButton sx={{minWidth: "100%"}} onClick={() => setDescClick(prev => !prev)}>
                <ControledCheckBox id={id} initialCheck={completed}/>
                <ListItemText primary={text}/>
                <IconButton edge="end" aria-label="delete" onClick={() => onRemoveTask(id)}>
                    <DeleteIcon/>
                </IconButton>
            </ListItemButton>

            {descElement}
        </>
    );
};

const DescriptionModule = ({description, time}) => {
    return (
        <Box sx={{mb: 2, mt: 1, width: "80%", height: "100%"}}>
            <Typography variant="body1">Description: {description}</Typography>
            <Typography variant="body1">Time: {time}</Typography>
        </Box>
    );
};

export default AppTodo;