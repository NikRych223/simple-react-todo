import { Tabs, Tab, Container } from "@mui/material";
import { useEffect, useState } from "react";

const AppHeader = (props) => {

    const { setFilter } = props;

    const [value, setValue] = useState(0);

    useEffect(() => {
        setFilter(value);
        // eslint-disable-next-line
    }, [value]);

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
};

export default AppHeader;