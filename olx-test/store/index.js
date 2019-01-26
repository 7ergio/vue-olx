import Vuex from 'vuex'
import axios from 'axios'
const JSON_URI = '/ads.json';

const createStore = () => {
    return new Vuex.Store({
        state: {
            pages: []
        },
        actions: {
            loadPages ({ commit }) {
                axios
                    .get(JSON_URI)
                    .then((response) => {
                        commit('setPages', response.data);
                    })
            }
        },
        mutations: {
            setPages (state, pages) {
                state.pages = pages;
            }
        },
        getters: {
            pages (state) {
                return state.pages;
            }
        }
    })
};

export default createStore