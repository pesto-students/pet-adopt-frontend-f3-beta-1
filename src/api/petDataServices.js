import http from "./api";

const getAll = () => {
  return http.get("/fetchpet");
};

const get = (id) => {
  return http.get(`/pets/${id}`);
};

const create = (data) => {
  return http.post("/createpet", data);
};

const update = (id, data) => {
  return http.put(`/pets/${id}`, data);
};

const remove = (id) => {
  return http.delete(`/pets/${id}`);
};

const removeAll = () => {
  return http.delete(`/pets`);
};

const findByTitle = (title) => {
  return http.get(`/pets?title=${title}`);
};

const petDataService = {
  getAll,
  get,
  create,
  update,
  remove,
  removeAll,
  findByTitle,
};

export default petDataService;
