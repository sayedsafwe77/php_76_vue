import { createStore } from "vuex";

export default createStore({
  strict: true,
  state: {
    count: 10,
    user: {},
  },
  mutations: {
    saveuser(state, data) {
      state.user = data;
    },
  },
  actions: {
    login(context, login_data) {
      fetch("http://localhost:9000/user/login", {
        method: "post",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(login_data),
      })
        .then((res) => res.json())
        .then((data) => {
          sessionStorage.setItem("user", JSON.stringify(data));
          context.commit("saveuser", data);
        });
    },
  },
});
