import axios from "axios";

const actions = {
    saveSlider({commit}, payload) {
        commit('setSaving', true);

        const config = {
            headers: { 'content-type': 'multipart/form-data' }
        };

        axios.post("sliders/save", payload, config)
        .then(response => payload.callback(response.data))
        .catch(error => {
          this.errorMessage = error.message;
          console.error("There was an error!", error);
        });
    },

    async sliderAll({ commit, getters, dispatch }) {
        axios.get("sliders/all")
        .then(response => {
            commit('setSliders', response.data)
        })
        .catch(error => {
          this.errorMessage = error.message;
          console.error("There was an error!", error);
        });
    },

    deleteSlider({commit}, sliderId) {
        commit('setDeleting', true);

        axios.delete("sliders/delete/" + sliderId)
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
    getSliders(state) {
        return state.sliders;
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
    setSliders(state, value) {
        state.sliders = value
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
    sliders: false,
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
