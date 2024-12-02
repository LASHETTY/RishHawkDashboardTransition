import React from 'react';
import styled from 'styled-components';
import { Avatar, Button, IconButton } from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';

const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px 24px;
  border-bottom: 1px solid #E5E7EB;
`;

const UserInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

const UserDetails = styled.div`
  display: flex;
  flex-direction: column;
`;

const UserName = styled.h2`
  margin: 0;
  font-size: 16px;
  font-weight: 600;
  color: #111827;
`;

const UserLocation = styled.span`
  font-size: 14px;
  color: #6B7280;
`;

const Actions = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const StyledButton = styled(Button)`
  text-transform: none;
  padding: 6px 16px;
`;

interface ChatHeaderProps {
  userName: string;
  location: string;
  avatarUrl?: string;
}

const ChatHeader: React.FC<ChatHeaderProps> = ({ userName, location, avatarUrl }) => {
  return (
    <HeaderContainer>
      <UserInfo>
        <Avatar src={avatarUrl} alt={userName} />
        <UserDetails>
          <UserName>{userName}</UserName>
          <UserLocation>{location}</UserLocation>
        </UserDetails>
      </UserInfo>
      <Actions>
        <StyledButton variant="contained" color="error">
          Escalate
        </StyledButton>
        <IconButton>
          <MoreVertIcon />
        </IconButton>
      </Actions>
    </HeaderContainer>
  );
};

export default ChatHeader;
