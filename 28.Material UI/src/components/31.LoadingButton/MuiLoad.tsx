import React, { useState } from 'react';
import Button from '@mui/material/Button';
import CircularProgress from '@mui/material/CircularProgress';

export default function LoadingButton() {
  const [loading, setLoading] = useState(false);

  const handleClick = () => {
    // Simuler une action asynchrone, par exemple une requête HTTP
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000); // Temps d'attente simulé de 2 secondes
  };

  return (
    <Button
      variant="contained"
      color="primary"
      disabled={loading}
      onClick={handleClick}
      startIcon={loading && <CircularProgress size={20} color="inherit" />}
    >
      {loading ? 'Loading' : 'Click me'}
    </Button>
  );
}
