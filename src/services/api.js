import axios from 'axios';

axios.defaults.baseURL = 'https://662634e5052332d5532208cc.mockapi.io';

export const requestContacts = async () => {
  const { data } = await axios.get('/contacts');
  return data;
};
