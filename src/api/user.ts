import axios from 'axios';
import { BASE_URL, CONFIG } from '../utils/constants';

export const geAuthtUser = async () => {
  const { data } = await axios.get(`${BASE_URL}/users/profile`, CONFIG);
  return data.payload.user;
};
