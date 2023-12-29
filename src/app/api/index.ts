import axios from "axios";

export const server = (endpoint: string = "") =>
  "http://localhost:8085/" + endpoint;

export const GET_ALL_DATA = 'get-data';

export const testAPI = () => {
  axios
    .get(server())
    .then((res) => {
      console.log(res);
    })
    .catch((e) => {
      console.log(e);
    });
};

export const getAllData = () => {
    return new Promise((res,rej)=>{
      axios
      .get(server(GET_ALL_DATA))
      .then((data) => {
        res(data.data);
      })
      .catch((e) => {
        rej(e);
      });
    })
  };

export const saveData = () => {
  axios
    .get(server())
    .then((res) => {
      console.log(res);
    })
    .catch((e) => {
      console.log(e);
    });
};
