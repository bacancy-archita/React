import * as Interceptor from "./interceptor";

export const getRecord = (id) => {
  const apiUrl = `users?page=${id}`;
  return Interceptor.get(apiUrl);
};      

export const addRecord = (add) => {
  const apiUrl = `users`; 
  return Interceptor.post(apiUrl, add);
};
export const getRecordUpdate = (id) => { 
  const apiUrl = `users/${id}`;
  return Interceptor.get(apiUrl);
};      

export const editRecord = (id, update) => {
  const apiUrl = `users/${id}`;
  return Interceptor.put(apiUrl, update);
};

export const deleteRecord = (id) => {
  const apiUrl = `users/${id}`;
  return Interceptor.delet(apiUrl);
};