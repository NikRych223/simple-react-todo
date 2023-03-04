import { useContext, useState, useEffect } from "react";
import { Box, ListItemButton, ListItemText, Checkbox, IconButton, Typography } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';

import ToDoContext from "../../contexts/ToDoContext";

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

const DescriptionModule = ({description, time}) => {
    return (
        <Box sx={{mb: 2, mt: 1, width: "80%", height: "100%"}}>
            <Typography variant="body1">Description: {description}</Typography>
            <Typography variant="body1">Time: {time}</Typography>
        </Box>
    );
};

export default TodoItem;