 export const {initialStateContacts} = require('../actions/contacts');

export const contactsReducer = (state = initialStateContacts, action) => {
  switch (action.type) {
    case 'GET_ALL_CONTACTS':
      return {...state };
    default:
      return state;
  }
};

