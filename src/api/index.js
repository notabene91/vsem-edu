import axios from 'axios'

const axiosInstance = axios.create({
  baseURL: 'https://vsem-edu-oblako.ru/singlemerchant/api/loadItemDetails?merchant_keys=929990d3b27944af404a5eb3ee1ec4f6&device_id=89000001020&lang=ru&device_platform=mobile&json=true&item_id=18094140#get'
});

export default axiosInstance;