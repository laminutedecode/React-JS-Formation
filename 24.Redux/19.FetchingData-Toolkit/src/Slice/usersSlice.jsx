// Importation des fonctions createSlice et createAsyncThunk du package '@reduxjs/toolkit'
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
// Importation du module axios pour effectuer des requêtes HTTP
import axios from 'axios';

// Création d'une action asynchrone fetchUsers avec createAsyncThunk.
// Cette action récupère les utilisateurs depuis l'API jsonplaceholder.
export const fetchUsers = createAsyncThunk('users/fetchUsers', async () => {
  // Attente de la réponse de la requête GET vers l'API jsonplaceholder
  const response = await axios.get('https://jsonplaceholder.typicode.com/users');
  // Retourne les données de la réponse HTTP
  return response.data;
});

// Création d'un slice pour gérer l'état des utilisateurs dans le store Redux
const usersSlice = createSlice({
  name: 'users',
  initialState: {
    users: [],
    status: 'idle', 
    error: null, 
  },
  reducers: {},
  extraReducers: (builder) => {
    // Gestionnaire pour l'état 'pending' (en attente) de l'action fetchUsers
    builder
      .addCase(fetchUsers.pending, (state) => {
        // Met à jour le statut de l'état à 'loading' lorsqu'une requête est en cours
        state.status = 'loading';
      })
      // Gestionnaire pour l'état 'fulfilled' (réalisé avec succès) de l'action fetchUsers
      .addCase(fetchUsers.fulfilled, (state, action) => {
        // Met à jour le statut de l'état à 'succeeded' et stocke les données récupérées dans users
        state.status = 'succeeded';
        state.users = action.payload;
      })
      // Gestionnaire pour l'état 'rejected' (rejeté) de l'action fetchUsers
      .addCase(fetchUsers.rejected, (state, action) => {
        // Met à jour le statut de l'état à 'failed' et stocke le message d'erreur dans error
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

// Exportation du réducteur généré par createSlice
export default usersSlice.reducer;
