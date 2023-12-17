import axios from "axios";
import * as config from "./../constants/config";
export default function bookApiCaller(endpoint, method, body) {
  return axios({
    method: method,
    url: `${config.booksAPI_URL}/book/${endpoint}`,
    data: body,
  }).catch((error) => {
    console.log(error);
  });
}
export function docGiaApiCaller(endpoint, method, body) {
  return axios({
    method: method,
    url: `${config.booksAPI_URL}/docGia/${endpoint}`,
    data: body,
  }).catch((error) => {
    console.log(error);
  });
}

export function muonSachApiCaller(endpoint, method, body) {
  return axios({
    method: method,
    url: `${config.booksAPI_URL}/muonSach/${endpoint}`,
    data: body,
  }).catch((error) => {
    console.log(error);
  });
}
