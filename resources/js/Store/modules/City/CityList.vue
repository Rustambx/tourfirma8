<template>
    <div class="card-body">
        <div v-show="show" class="sufee-alert alert with-close alert-success alert-dismissible fade show">
            {{ status }}
            <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                <span aria-hidden="true">×</span>
            </button>
        </div>
        <table id="bootstrap-data-table-export" class="table table-striped table-bordered">
            <thead>
            <tr>
                <th>Название</th>
                <th>Анонс</th>
                <th>Страна</th>
                <th>Изображения</th>
                <th>Действие</th>
            </tr>
            </thead>
            <tbody>
                <tr v-for="city in getCities.data">
                    <td>
                        <a>{{ city.title }}</a>
                    </td>
                    <td v-html="city.preview_text.substring(0,199)"></td>
                    <td>{{ city.country.title }}</td>
                    <td>
                        <img :src="city.resized_image" :alt="city.title">
                    </td>
                    <td>
                        <button class="btn btn-success" @click="openEditModal(city)">Редактировать</button>

                        <br>
                        <br>
                        <button class="btn btn-danger" @click="submitDelete(city.id)">Удалить</button>
                    </td>
                </tr>
            </tbody>
        </table>

        <b-modal id="city-modal" ref="city_modal" size="lg" :hide-footer="true" modal-class="custom-modal">
            <template v-slot:modal-header>
                <h5 class="modal-title">City Form</h5>
                <button type="button" class="close" @click="closeEditModal" aria-label="Close">
                    <span aria-hidden="true">×</span>
                </button>
            </template>

            <city-form :entry="entry" :countries="countries" ></city-form>
        </b-modal>
    </div>


</template>

<script>

    import { mapActions, mapGetters } from 'vuex';
    import {BModal} from 'bootstrap-vue';

    export default {
        data() {
            return {
                entry: null,
                show: null,
                status: false
            }
        },
        components: {
            'b-modal': BModal
        },
        props: {
            cities: {
                required: true
            },
            countries: {
                required: true
            }
        },
        computed: {
            ...mapGetters('City', [
                'shouldOpenModal',
                'shouldRefreshTable',
                'shouldStatusData',
                'getCities',
            ]),
        },
        methods: {
            ...mapActions('City', [
                'openModal',
                'refreshTable',
                'deleteCity',
                'cityAll',
            ]),
            closeEditModal() {
                this.entry = null;
                this.$refs['city_modal'].hide();
            },
            openEditModal(row) {
                this.entry = row;
                this.$refs['city_modal'].show();
            },
            submitDelete(id) {
                if(confirm("Вы действительно хотите удалить?")){
                    this.deleteCity(id);
                    this.refreshTable(true)
                    this.cityAll();
                }
            }
        },
        watch: {
            shouldOpenModal() {
                if (this.shouldOpenModal === true) {
                    this.entry = null;
                    this.show = false;
                    this.$refs['city_modal'].show();
                    this.openModal(false);
                }
            },
            shouldRefreshTable() {
                if (this.shouldRefreshTable === true) {
                    this.refreshTable(false);
                    this.$refs['city_modal'].hide();
                    this.cityAll();
                }
            },
            shouldStatusData() {
                if (this.shouldStatusData != null) {
                    this.show = true;
                    this.status = this.shouldStatusData;
                    this.cityAll();
                }
            }
        },
        async mounted() {
            this.cityAll();
        }
    }
</script>