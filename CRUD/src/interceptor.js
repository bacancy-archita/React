import axios from 'axios';

const baseUrl = 'https://reqres.in/api/';

export const get = (apiUrl) => {
  let url = `${baseUrl}${apiUrl}`;
  return (
    axios.get(url)
      .then(response => {
        return response.data;
      })
      .catch(err => {
        return err;
      })
  ); 
};

export const put = (apiUrl, update) => {
  let url = `${baseUrl}${apiUrl}`;
  return(
    axios.put(url, update)
      .then(response => {
        return response.data;
      })
      .catch(err => {
        return err;
      })
  );
};
  
export const post = (apiUrl, add) => {
  let url = `${baseUrl}${apiUrl}`;
  return(
    axios.post(url, add)
      .then(response => {
        return response.data;
      })
      .catch(err => {
        return err;
      })
  );
};

export const delet = (apiUrl) => {
  let url = `${baseUrl}${apiUrl}`;
  return(
    axios.delete(url)
      .then(response => {
        return response;
      })
      .catch(err => {
        return err;
      })
  );
};
