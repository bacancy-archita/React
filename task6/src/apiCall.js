import * as Interceptor from "./interceptor";

export const getRecord = (id) => {
  const apiUrl = `users?page=${id}`;
  return Interceptor.getRecord(apiUrl);
};      

export const addRecord = (add) => {
  const apiUrl = `users`; 
  return Interceptor.addRecord(apiUrl, add);
};
export const getRecordUpdate = (id) => { 
  const apiUrl = `users/${id}`;
  return Interceptor.getRecord(apiUrl);
};      

export const editRecord = (id, update) => {
  const apiUrl = `users/${id}`;
  return Interceptor.editRecord(apiUrl, update);
};

export const deleteRecord = (id) => {
  const apiUrl = `users/${id}`;
  return Interceptor.deleteRecord(apiUrl);
};