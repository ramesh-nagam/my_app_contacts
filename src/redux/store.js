import { configureStore } from '@reduxjs/toolkit';
import { contactsReducer } from './reducers/contactsReducer';
import { mobileReducer } from './reducers/mobile';



export const store = configureStore({
  reducer: {
    contactsReducer,
    mobileReducer,
    

    // You can add more reducers here
  },
  middleware: getDefaultMiddleware => {
    return getDefaultMiddleware().concat(/* Any additional middleware */);
  },
  devTools: true // No need to use composeWithDevTools with Redux Toolkit
});

export default store;

