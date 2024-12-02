import React, { useState } from 'react';
import styled from 'styled-components';
import Sidebar from './components/Layout/Sidebar';
import ChatHeader from './components/Chat/ChatHeader';
import ChatWindow from './components/Chat/ChatWindow';
import CustomerDetails from './components/CustomerInfo/CustomerDetails';

const AppContainer = styled.div`
  display: flex;
  height: 100vh;
  background: #F3F4F6;
`;

const MainContent = styled.div`
  flex: 1;
  display: flex;
  overflow: hidden;
`;

const ChatSection = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

const CustomerSection = styled.div`
  width: 380px;
  padding: 24px;
  background: #F9FAFB;
  overflow-y: auto;
`;

const mockMessages = [
  {
    id: '1',
    content: 'Hello! How can I help you today?',
    timestamp: '10:30 AM',
    isOwn: false,
  },
  {
    id: '2',
    content: 'I have a question about my recent order.',
    timestamp: '10:31 AM',
    isOwn: true,
  },
];

interface CustomerInfo {
  customerId: string;
  email: string;
  phone: string;
  loyaltyTier: string;
  segment: string;
  lifetimeValue: string;
  propensityScore: number;
}

function App() {
  const [customerInfo, setCustomerInfo] = useState<CustomerInfo>({
    customerId: '12345',
    email: 'customer@example.com',
    phone: '(555) 123-4567',
    loyaltyTier: 'Silver',
    segment: 'High Value',
    lifetimeValue: '$1,234',
    propensityScore: 75,
  });

  const handleUpdateInfo = (section: string, data: { [key: string]: string }) => {
    setCustomerInfo(prevInfo => ({
      ...prevInfo,
      ...data,
    }));
  };

  return (
    <AppContainer>
      <Sidebar />
      <MainContent>
        <ChatSection>
          <ChatHeader
            userName="Hannibal Smith"
            location="San Francisco, CA"
          />
          <ChatWindow messages={mockMessages} />
        </ChatSection>
        <CustomerSection>
          <CustomerDetails
            {...customerInfo}
            onUpdateInfo={handleUpdateInfo}
          />
        </CustomerSection>
      </MainContent>
    </AppContainer>
  );
}

export default App;
