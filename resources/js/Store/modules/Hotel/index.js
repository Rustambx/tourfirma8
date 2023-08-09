import axios from "axios";

const actions = {
    saveHotel({commit}, payload) {
        commit('setSaving', true);

        const config = {
            headers: { 'content-type': 'multipart/form-data' }
        };

        axios.post("hotels/save", payload, config)
        .then(response => payload.callback(response.data))
        .catch(error => {
          this.errorMessage = error.message;
          console.error("There was an error!", error);
        });
    },

    async hotelAll({ commit, getters, dispatch }) {
        axios.get("hotels/all")
        .then(response => {
            commit('setHotels', response.data)
        })
        .catch(error => {
          this.errorMessage = error.message;
          console.error("There was an error!", error);
        });
    },

    deleteHotel({commit}, hotelId) {
        commit('setDeleting', true);

        axios.delete("hotels/delete/" + hotelId)
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
    getHotels(state) {
        return state.hotels;
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
    setHotels(state, value) {
        state.hotels = value
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
    hotels: false,
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
