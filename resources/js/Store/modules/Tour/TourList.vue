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
                <th>Цена</th>
                <th>Отели</th>
                <th>Изображения</th>
                <th>Действие</th>
            </tr>
            </thead>
            <tbody>
                <tr v-for="tour in getTours.data">
                    <td>
                        <a>{{ tour.title }}</a>
                    </td>
                    <td v-html="tour.detail_text.substring(0,199)"></td>
                    <td>{{ tour.price }}</td>
                    <td>
                        <p v-for="hotel in tour.hotels">{{ hotel.title }}</p>
                    </td>
                    <td>
                        <img :src="tour.resized_image" :alt="tour.title">
                    </td>
                    <td>
                        <button class="btn btn-success" @click="openEditModal(tour)">Редактировать</button>

                        <br>
                        <br>
                        <button class="btn btn-danger" @click="submitDelete(tour.id)">Удалить</button>
                    </td>
                </tr>
            </tbody>
        </table>

        <b-modal id="tour-modal" ref="tour_modal" size="lg" :hide-footer="true" modal-class="custom-modal">
            <template v-slot:modal-header>
                <h5 class="modal-title">Tour Form</h5>
                <button type="button" class="close" @click="closeEditModal" aria-label="Close">
                    <span aria-hidden="true">×</span>
                </button>
            </template>

            <tour-form :entry="entry" :hotels="hotels" :types="types" ></tour-form>
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
            hotels: {
                required: true
            },
            types: {
                required: true
            }
        },
        computed: {
            ...mapGetters('Tour', [
                'shouldOpenModal',
                'shouldRefreshTable',
                'shouldStatusData',
                'getTours',
            ]),
        },
        methods: {
            ...mapActions('Tour', [
                'openModal',
                'refreshTable',
                'deleteTour',
                'tourAll'
            ]),
            closeEditModal() {
                this.entry = null;
                this.$refs['tour_modal'].hide();
            },
            openEditModal(row) {
                this.show = false;
                this.entry = row;
                this.$refs['tour_modal'].show();
            },
            submitDelete(id) {
                if(confirm("Вы действительно хотите удалить?")){
                    this.deleteTour(id);
                    this.refreshTable(true)
                    this.tourAll();
                }

            }
        },
        watch: {
            shouldOpenModal() {
                if (this.shouldOpenModal === true) {
                    this.entry = null;
                    this.show = false;
                    this.$refs['tour_modal'].show();
                    this.openModal(false);
                }
            },
            shouldRefreshTable() {
                if (this.shouldRefreshTable === true) {
                    this.refreshTable(false);
                    this.$refs['tour_modal'].hide();
                    this.tourAll();
                }
            },
            shouldStatusData() {
                if (this.shouldStatusData != null) {
                    this.show = true;
                    this.status = this.shouldStatusData;
                    this.tourAll();
                }
            }
        },
        async mounted() {
            this.tourAll();
        }
    }
</script>