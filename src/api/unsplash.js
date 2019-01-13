import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 'Client-ID 420cbbdd25e7d0208e5654fbdefe304f0d9a41418a956dd3f807d7a6d848024d'
  }
});
