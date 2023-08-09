import axios from "axios";

const actions = {
    saveNews({commit}, payload) {
        commit('setSaving', true);

        const config = {
            headers: { 'content-type': 'multipart/form-data' }
        };

        axios.post("news/save", payload, config)
        .then(response => payload.callback(response.data))
        .catch(error => {
          this.errorMessage = error.message;
          console.error("There was an error!", error);
        });
    },

    async newsAll({ commit, getters, dispatch }) {
        axios.get("news/all")
        .then(response => {
            commit('setNews', response.data)
        })
        .catch(error => {
          this.errorMessage = error.message;
          console.error("There was an error!", error);
        });
    },

    deleteNews({commit}, newsId) {
        commit('setDeleting', true);

        axios.delete("news/delete/" + newsId)
        .then(response => {
            commit('setDeleting', response.data)
        })
        .catch(error => {
          this.errorMessage = error.message;
          console.error("There was an error!", error);
        });
    },

    openModal({commit}, payload) {
        commit('setShouldOpenModal', payload)
    },

    refreshTable({commit}, payload) {
        commit('setShouldRefreshTable', payload);
    },

    statusData({commit}, payload) {
        commit('setStatusData', payload);
    },
};

const getters = {
    getNews(state) {
        return state.news;
    },
    saving(state) {
        return state.saving;
    },
    deleting(state) {
        return state.deleting;
    },
    shouldOpenModal(state) {
        return state.shouldOpenModal;
    },
    shouldRefreshTable(state) {
        return state.shouldRefreshTable;
    },
    shouldStatusData(state) {
        return state.shouldStatusData;
    }
};

const mutations = {
    setNews(state, value) {
        state.news = value
    },
    setSaving(state, value) {
        state.saving = value;
    },
    setDeleting(state, value) {
        state.saving = value;
    },
    setShouldOpenModal(state, value) {
        state.shouldOpenModal = value;
    },
    setShouldRefreshTable(state, value) {
        state.shouldRefreshTable = value;
    },
    setStatusData(state, value) {
        state.shouldStatusData = value;
    }
};

const state = {
    news: false,
    saving: false,
    deleting: false,
    shouldOpenModal: false,
    shouldRefreshTable: false,
    shouldStatusData:false
};

export default {
    namespaced: true,
    actions,
    getters,
    mutations,
    state
}
