import { defineStore } from "pinia";


export const useAuthenticateStore = defineStore("authenticate", {
    state: () => {
        return {
            user: localStorage.user
                ? JSON.parse(localStorage.user) 
                : null,
            token: localStorage.tokenUser ? localStorage.tokenUser : null,
        };
    },
    actions: {},
    getters: {},
});
