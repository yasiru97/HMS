import api from "./api";

const getPublicContent = () => {
  return api.get("/test/all");
};

const getUserBoard = () => {
  return api.get("/test/user");
};

const getModeratorBoard = () => {
  return api.get("/test/mod");
};

const getAdminBoard = () => {
  return api.get("/test/admin");
};

const getCurrentUserDetailsById = (id) => {
  return api.get(`/test/getUserDetailsById/${id}`);
}

const UserService = {
  getPublicContent,
  getUserBoard,
  getModeratorBoard,
  getAdminBoard,
  getCurrentUserDetailsById
};

export default UserService;
