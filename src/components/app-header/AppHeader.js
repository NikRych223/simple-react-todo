import { Tabs, Tab, Container } from "@mui/material";
import { useState } from "react";

const AppHeader = () => {

    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
      setValue(newValue);
    };
    
    return (
        <Container>
            <Tabs sx={{mt: 2}} value={value} onChange={handleChange} centered>
                <Tab label="All"/>
                <Tab label="Completed"/>
                <Tab label="Uncompleted"/>
            </Tabs>
        </Container>
    );
}

export default AppHeader;