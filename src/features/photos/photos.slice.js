import { createSlice } from '@reduxjs/toolkit';
import { selectSearchTerm } from '../search/search.slice';
import photos from './photos.data.js';

const initialState = {
  photos,
};

const options = {
  name: 'photos',
  initialState,
  reducers: {
    addPhoto: (state, action) => {
      state.photos.unshift({id: state.photos.length + 1, caption: action.payload.caption, imageUrl: action.payload.imageUrl})
    },
    removePhoto: (state, action) => {
      state.photos.splice(state.photos.findIndex((photo) => photo.id === action.payload), 1)
    }
  },
};

const photosSlice = createSlice(options);

export const { addPhoto, removePhoto } = photosSlice.actions;

export default photosSlice.reducer;

export const selectAllPhotos = (state) => state.photos.photos;
export const selectFilteredPhotos = (state) => selectAllPhotos(state).filter((photo) => photo.caption.toLowerCase().includes(state.search.searchTerm.toLowerCase()));
