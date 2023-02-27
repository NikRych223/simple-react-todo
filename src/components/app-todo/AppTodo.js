import { Container, Box, List, ListItem, ListItemButton, ListItemText, Checkbox, IconButton } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';

const AppTodo = (props) => {

    const { dataList, onTask } = props;

    const elements = dataList.map((item, i) => {
        return (
            <ListItem key={item.id}>
                <ListItemButton>
                    <Checkbox edge="start" onClick={() => onTask(item.id)}/>
                    <ListItemText primary={item.text}/>
                    <IconButton edge="end" aria-label="delete">
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
}

export default AppTodo;