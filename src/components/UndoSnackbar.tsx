// src/components/UndoSnackbar.tsx

import { Snackbar, Button } from '@mui/material';

interface Props {
  open: boolean;
  onClose: () => void;
  onUndo: () => void;
  onClear: () => void;
}

export default function UndoSnackbar({ open, onClose, onUndo, onClear }: Props) {
  const handleClose = (event: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === 'clickaway' || reason === 'timeout') {
      onClear();
    }
    onClose();
  };

  const handleUndoClick = () => {
    onUndo();
    onClose();
  };
  
  return (
    <Snackbar
      open={open}
      onClose={handleClose}
      autoHideDuration={4000}
      message="Task deleted"
      action={<Button color="secondary" size="small" onClick={handleUndoClick}>Undo</Button>}
      anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
    />
  );
}