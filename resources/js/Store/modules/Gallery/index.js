import axios from "axios";

const actions = {
    saveGallery({commit}, payload) {
        commit('setSaving', true);

        const config = {
            headers: { 'content-type': 'multipart/form-data' }
        };

        axios.post("galleries/save", payload, config)
        .then(response => payload.callback(response.data))
        .catch(error => {
          this.errorMessage = error.message;
          console.error("There was an error!", error);
        });
    },

    async galleryAll({ commit, getters, dispatch }) {
        axios.get("galleries/all")
        .then(response => {
            commit('setGalleries', response.data)
        })
        .catch(error => {
          this.errorMessage = error.message;
          console.error("There was an error!", error);
        });
    },

    deleteGallery({commit}, galleryId) {
        commit('setDeleting', true);

        axios.delete("galleries/delete/" + galleryId)
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
    getGalleries(state) {
        return state.galleries;
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
    setGalleries(state, value) {
        state.galleries = value
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
    galleries: false,
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
