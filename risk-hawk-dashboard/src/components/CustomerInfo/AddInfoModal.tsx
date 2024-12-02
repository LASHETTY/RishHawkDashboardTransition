import React, { useState } from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Button,
} from '@mui/material';
import styled from 'styled-components';

const StyledDialog = styled(Dialog)`
  .MuiDialog-paper {
    width: 400px;
  }
`;

const StyledDialogContent = styled(DialogContent)`
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding-top: 16px !important;
`;

interface AddInfoModalProps {
  open: boolean;
  onClose: () => void;
  onSave: (data: { [key: string]: string }) => void;
  fields: Array<{
    key: string;
    label: string;
    type?: string;
  }>;
  title: string;
}

const AddInfoModal: React.FC<AddInfoModalProps> = ({
  open,
  onClose,
  onSave,
  fields,
  title,
}) => {
  const [formData, setFormData] = useState<{ [key: string]: string }>({});

  const handleChange = (key: string) => (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({
      ...prev,
      [key]: event.target.value,
    }));
  };

  const handleSave = () => {
    onSave(formData);
    setFormData({});
    onClose();
  };

  const handleClose = () => {
    setFormData({});
    onClose();
  };

  return (
    <StyledDialog open={open} onClose={handleClose}>
      <DialogTitle>{title}</DialogTitle>
      <StyledDialogContent>
        {fields.map((field) => (
          <TextField
            key={field.key}
            label={field.label}
            type={field.type || 'text'}
            value={formData[field.key] || ''}
            onChange={handleChange(field.key)}
            fullWidth
          />
        ))}
      </StyledDialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Cancel</Button>
        <Button onClick={handleSave} variant="contained" color="primary">
          Save
        </Button>
      </DialogActions>
    </StyledDialog>
  );
};

export default AddInfoModal;
