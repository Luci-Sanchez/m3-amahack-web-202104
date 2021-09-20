import { create } from "./BaseService";

const http = create();

export const getCurrentUser = () => {
	return http.get("/users/me");
}

export const getUser = (id) => {
	return http.get(`/users/${id}`);
}

export const createUser = (user) => {
	return http.post("/users", user);
}

export const editUser = (user) => {
	return http.patch("/users/me", user);
}
