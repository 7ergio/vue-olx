import Vuex from 'vuex'
import axios from 'axios'
const JSON_URI = '/ads.json';

const createStore = () => {
    return new Vuex.Store({
        state: {
            pages: [],
            ads: [],
            totalPages: null
        },
        actions: {
            // loadPages ({ commit }) {
            loadPages ({ commit }, page) {
                axios
                    .get(JSON_URI)
                    .then((response) => {
                        commit('setPages', response.data);
                        commit('setTotalPages', response.data[0].total_pages);
                        commit('setAds', response.data[page-1].ads);
                    })
            }
        },
        mutations: {
            setPages (state, pages) {
                state.pages = pages;
            },
            setTotalPages (state, totalPages) {
                state.totalPages = totalPages;
            },
            setAds (state, ads) {
                state.ads = ads;
            }
        },
        getters: {
            pages (state) {
                return state.pages;
            },
            ads (state) {
                return state.ads;
            },
            totalPages (state) {
                return state.totalPages
            }
        }
    })
};

export default createStore