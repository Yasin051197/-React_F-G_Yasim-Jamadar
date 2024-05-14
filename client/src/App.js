import { useState } from "react";
import "./App.css";
import AromaticBar from "./Pages/AromaticBarForm/AromaticBarForm";
import { Box, Tabs, Tab } from "@mui/material";
import AromaticBarTable from "./Pages/AromaticBarTable/AromaticBarTable";

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

function App() {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className="App">
      <Box sx={{ width: "100%" }}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
          >
            <Tab label="Feedback Form" {...a11yProps(0)} />
            <Tab label="Feedback List" {...a11yProps(1)} />
          </Tabs>
        </Box>
        <AromaticBar value={value} index={0}>
          Feedback Form
        </AromaticBar>
        <AromaticBarTable value={value} index={1}>
          Feedback List
        </AromaticBarTable>
      </Box>
    </div>
  );
}

export default App;
