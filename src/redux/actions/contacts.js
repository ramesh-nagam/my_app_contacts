export const initialStateContacts = {
 contacts: [
  {
    id:1,
    firstName:"nagam",
    lastName:"ramesh",
    email:"ram@gmail.com",
    company:"quest",
    phone:256893147
},
{
    id:2,
    firstName:"yelugu",
    lastName:"sunitha",
    email:"suni@gmail.com",
    company:"quest-global",
    phone:585855854
}
],
};
export const getAllContacts = () => {
  return {type: 'GET_ALL_CONTACTS'};
};


