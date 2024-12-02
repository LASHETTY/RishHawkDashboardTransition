import React from 'react';
import styled from 'styled-components';
import { Paper, TextField, IconButton } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import AttachFileIcon from '@mui/icons-material/AttachFile';

const ChatContainer = styled(Paper)`
  display: flex;
  flex-direction: column;
  height: calc(100vh - 64px);
  background: #fff;
`;

const MessagesContainer = styled.div`
  flex: 1;
  overflow-y: auto;
  padding: 20px;
`;

const InputContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 16px;
  border-top: 1px solid #E5E7EB;
  gap: 12px;
`;

const StyledTextField = styled(TextField)`
  flex: 1;
  .MuiOutlinedInput-root {
    border-radius: 20px;
  }
`;

const Message = styled.div<{ isOwn?: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: ${props => props.isOwn ? 'flex-end' : 'flex-start'};
  margin-bottom: 16px;
`;

const MessageContent = styled.div<{ isOwn?: boolean }>`
  background: ${props => props.isOwn ? '#0084FF' : '#F3F4F6'};
  color: ${props => props.isOwn ? '#fff' : '#111827'};
  padding: 12px 16px;
  border-radius: 16px;
  max-width: 70%;
  word-wrap: break-word;
`;

const TimeStamp = styled.span`
  font-size: 12px;
  color: #6B7280;
  margin-top: 4px;
`;

interface Message {
  id: string;
  content: string;
  timestamp: string;
  isOwn: boolean;
}

interface ChatWindowProps {
  messages: Message[];
}

const ChatWindow: React.FC<ChatWindowProps> = ({ messages }) => {
  return (
    <ChatContainer elevation={0}>
      <MessagesContainer>
        {messages.map((message) => (
          <Message key={message.id} isOwn={message.isOwn}>
            <MessageContent isOwn={message.isOwn}>
              {message.content}
            </MessageContent>
            <TimeStamp>{message.timestamp}</TimeStamp>
          </Message>
        ))}
      </MessagesContainer>
      <InputContainer>
        <IconButton>
          <AttachFileIcon />
        </IconButton>
        <StyledTextField
          placeholder="Type a message..."
          variant="outlined"
          size="small"
          fullWidth
        />
        <IconButton color="primary">
          <SendIcon />
        </IconButton>
      </InputContainer>
    </ChatContainer>
  );
};

export default ChatWindow;
