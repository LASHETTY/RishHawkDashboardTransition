import React from 'react';
import styled from 'styled-components';
import { List, ListItem, ListItemIcon, ListItemText, ListItemButton } from '@mui/material';
import DashboardIcon from '@mui/icons-material/Dashboard';
import AssignmentIcon from '@mui/icons-material/Assignment';
import SecurityIcon from '@mui/icons-material/Security';
import QueueIcon from '@mui/icons-material/Queue';
import WorkIcon from '@mui/icons-material/Work';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import InventoryIcon from '@mui/icons-material/Inventory';

const SidebarContainer = styled.div`
  width: 250px;
  background: #1A1C1E;
  height: 100vh;
  color: white;
  padding: 20px 0;
`;

const Logo = styled.div`
  padding: 20px;
  font-size: 24px;
  font-weight: bold;
  color: #fff;
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 20px;
`;

const StyledListItem = styled(ListItem)`
  padding: 0;
  .MuiListItemIcon-root {
    color: #6B7280;
    min-width: 40px;
    margin-left: 12px;
  }
  .MuiListItemText-root {
    color: #9CA3AF;
  }
`;

const StyledListItemButton = styled(ListItemButton)`
  padding: 12px 24px;
  &:hover {
    background: rgba(255, 255, 255, 0.1);
  }
`;

const menuItems = [
  { text: 'Internal Audit', icon: <SecurityIcon /> },
  { text: 'UAT Testing', icon: <AssignmentIcon /> },
  { text: 'Intranet', icon: <DashboardIcon /> },
  { text: 'Queue', icon: <QueueIcon /> },
  { text: 'Workflow', icon: <WorkIcon /> },
  { text: 'Admin', icon: <AdminPanelSettingsIcon /> },
  { text: 'Asset', icon: <InventoryIcon /> },
];

const Sidebar = () => {
  return (
    <SidebarContainer>
      <Logo>
        <img src="/logo.png" alt="Risk Hawk" style={{ width: 32, height: 32 }} />
        RISK HAWK
      </Logo>
      <List>
        {menuItems.map((item, index) => (
          <StyledListItem key={index} disablePadding>
            <StyledListItemButton>
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.text} />
            </StyledListItemButton>
          </StyledListItem>
        ))}
      </List>
    </SidebarContainer>
  );
};

export default Sidebar;
