import axios from "axios";

const actions = {
    saveCountry({commit}, payload) {
        commit('setSaving', true);

        const config = {
            headers: { 'content-type': 'multipart/form-data' }
        };

        axios.post("countries/save", payload, config)
        .then(response => payload.callback(response.data))
        .catch(error => {
          this.errorMessage = error.message;
          console.error("There was an error!", error);
        });
    },

    async countryAll({ commit, getters, dispatch }) {
        axios.get("countries/all")
        .then(response => {
            commit('setCountries', response.data)
        })
        .catch(error => {
          this.errorMessage = error.message;
          console.error("There was an error!", error);
        });
    },

    deleteCountry({commit}, countryId) {
        commit('setDeleting', true);

        axios.delete("countries/delete/" + countryId)
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
    getCountries(state) {
        return state.countries;
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
    setCountries(state, value) {
        state.countries = value
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
    countries: false,
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
