import './admin_panel.css';
import React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import PendingTable from '../components/PendingTable';
import CompleteTable from '../components/CompleteTable';


function TabPanel(props) {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box sx={{ p: 2 }}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

function AdminPanel() {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
      setValue(newValue);
    };
  
    return (
      <div>
        <div className="page-layout">
                <div className="left-column">
                    <h1>Dashboard</h1>
                    <h2>Requests for Grama Certificates</h2>
                    <div className='tab'>
                        <Box sx={{ width: '100%' }}>
                            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                            <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                                <Tab label="Pending" {...a11yProps(0)} />
                                <Tab label="Completed" {...a11yProps(1)} />
                            </Tabs>
                            </Box>
                            <TabPanel value={value} index={0}>
                            <PendingTable />
                            </TabPanel>
                            <TabPanel value={value} index={1}>
                            <CompleteTable />
                            </TabPanel>
                        </Box>
                    </div>
            </div>
        </div>
      </div>
    );
}

export default AdminPanel;
