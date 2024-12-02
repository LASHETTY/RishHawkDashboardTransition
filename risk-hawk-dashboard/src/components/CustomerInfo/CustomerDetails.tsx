import React, { useState } from 'react';
import styled from 'styled-components';
import { Paper, Typography, Divider, Button } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import AddInfoModal from './AddInfoModal';

const Container = styled(Paper)`
  padding: 24px;
  background: #fff;
  border-radius: 8px;
  margin-bottom: 16px;
`;

const Section = styled.div`
  margin-bottom: 24px;
`;

const Field = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
`;

const Label = styled(Typography)`
  color: #6B7280;
  font-size: 14px;
`;

const Value = styled(Typography)`
  color: #111827;
  font-weight: 500;
`;

const AddButton = styled(Button)`
  width: 100%;
  text-transform: none;
  margin-top: 8px;
`;

interface CustomerDetailsProps {
  customerId: string;
  email: string;
  phone: string;
  loyaltyTier: string;
  segment: string;
  lifetimeValue: string;
  propensityScore: number;
  onUpdateInfo: (section: string, data: { [key: string]: string }) => void;
}

const CustomerDetails: React.FC<CustomerDetailsProps> = ({
  customerId,
  email,
  phone,
  loyaltyTier,
  segment,
  lifetimeValue,
  propensityScore,
  onUpdateInfo,
}) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [currentSection, setCurrentSection] = useState<string>('');

  const sections = {
    basic: {
      title: 'Add Basic Information',
      fields: [
        { key: 'customerId', label: 'Customer ID' },
        { key: 'email', label: 'Email Address', type: 'email' },
        { key: 'phone', label: 'Phone Number', type: 'tel' },
      ],
    },
    loyalty: {
      title: 'Add Loyalty Information',
      fields: [
        { key: 'loyaltyTier', label: 'Loyalty Tier' },
        { key: 'segment', label: 'Segment' },
      ],
    },
    metrics: {
      title: 'Add Metrics Information',
      fields: [
        { key: 'lifetimeValue', label: 'Lifetime Value' },
        { key: 'propensityScore', label: 'Propensity Score', type: 'number' },
      ],
    },
  };

  const handleOpenModal = (section: string) => {
    setCurrentSection(section);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
    setCurrentSection('');
  };

  const handleSave = (data: { [key: string]: string }) => {
    onUpdateInfo(currentSection, data);
  };

  return (
    <>
      <Container elevation={0}>
        <Section>
          <Field>
            <Label>Customer ID</Label>
            <Value>{customerId}</Value>
          </Field>
          <Field>
            <Label>Email Address</Label>
            <Value>{email}</Value>
          </Field>
          <Field>
            <Label>Phone Number</Label>
            <Value>{phone}</Value>
          </Field>
          <AddButton
            variant="outlined"
            startIcon={<AddIcon />}
            color="inherit"
            onClick={() => handleOpenModal('basic')}
          >
            Add
          </AddButton>
        </Section>

        <Divider />

        <Section style={{ marginTop: 24 }}>
          <Field>
            <Label>Loyalty Tier</Label>
            <Value>{loyaltyTier}</Value>
          </Field>
          <Field>
            <Label>Segment</Label>
            <Value>{segment}</Value>
          </Field>
          <AddButton
            variant="outlined"
            startIcon={<AddIcon />}
            color="inherit"
            onClick={() => handleOpenModal('loyalty')}
          >
            Add
          </AddButton>
        </Section>

        <Divider />

        <Section style={{ marginTop: 24 }}>
          <Field>
            <Label>Lifetime Value</Label>
            <Value>{lifetimeValue}</Value>
          </Field>
          <Field>
            <Label>Propensity to Purchase</Label>
            <Value>{propensityScore}%</Value>
          </Field>
          <AddButton
            variant="outlined"
            startIcon={<AddIcon />}
            color="inherit"
            onClick={() => handleOpenModal('metrics')}
          >
            Add
          </AddButton>
        </Section>
      </Container>

      {currentSection && (
        <AddInfoModal
          open={modalOpen}
          onClose={handleCloseModal}
          onSave={handleSave}
          fields={sections[currentSection as keyof typeof sections].fields}
          title={sections[currentSection as keyof typeof sections].title}
        />
      )}
    </>
  );
};

export default CustomerDetails;
