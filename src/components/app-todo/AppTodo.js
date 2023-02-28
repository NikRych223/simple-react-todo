import { Container, Box, List, ListItem, ListItemButton, ListItemText, Checkbox, IconButton } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import { useEffect, useState } from "react";

const AppTodo = (props) => {

    const { dataList, onTask, onRemoveTask } = props;
    
    const elements = dataList.map((item, i) => {
        return (
            <ListItem key={item.id}>
                <ListItemButton>
                    {/* <Checkbox key={i} edge="start" onClick={() => onTask(item.id)}/> */}
                    <ControledCheckBox onTask={onTask} id={item.id} initialCheck={item.completed}/>
                    <ListItemText primary={item.text}/>
                    <IconButton edge="end" aria-label="delete" onClick={() => onRemoveTask(item.id)}>
                        <DeleteIcon/>
                    </IconButton>
                </ListItemButton>
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

const ControledCheckBox = ({onTask, id, initialCheck}) => {

    const [checked, setChecked] = useState(false);

    useEffect(() => {
        setChecked(initialCheck);
    }, [initialCheck]);

    const handleClick = () => {
        setChecked(prev => !prev);
        onTask(id);
    };

    return (
        <Checkbox edge="start" onClick={handleClick} checked={checked}/>
    );
};

export default AppTodo;