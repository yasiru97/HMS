import api from "./api";
import TokenService from "./token.service";

const register = (firstname, lastname, username, password, email, phone) => {
  return api.post("/auth/signup", {
    firstname,
    lastname,
    username,
    password,
    email,
    phone
  });
};

const login = (username, password) => {
  return api
    .post("/auth/signin", {
      username,
      password
    })
    .then((response) => {
      if (response.data.accessToken) {
        TokenService.setUser(response.data);
      }

      return response.data;
    });
};

const logout = () => {
  TokenService.removeUser();
};

const getCurrentUser = () => {
  return JSON.parse(localStorage.getItem("user"));
};

const AuthService = {
  register,
  login,
  logout,
  getCurrentUser,
};

export default AuthService;
