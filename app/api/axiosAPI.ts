import axios from 'axios';
import {BASE_URL} from '../utils/urls';

export default axios?.create?.({
  baseURL: BASE_URL,
});