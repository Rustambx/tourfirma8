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
                <th>Город</th>
                <th>Изображения</th>
                <th>Действие</th>
            </tr>
            </thead>
            <tbody>
                <tr v-for="hotel in getHotels.data">
                    <td>
                        <a>{{ hotel.title }}</a>
                    </td>
                    <td v-html="hotel.detail_text.substring(0,199)"></td>
                    <td>{{ hotel.price }}</td>
                    <td>{{ hotel.city.title }}</td>
                    <td>
                        <img :src="hotel.resized_image" :alt="hotel.title">
                    </td>
                    <td>
                        <button class="btn btn-success" @click="openEditModal(hotel)">Редактировать</button>

                        <br>
                        <br>
                        <button class="btn btn-danger" @click="submitDelete(hotel.id)">Удалить</button>
                    </td>
                </tr>
            </tbody>
        </table>

        <b-modal id="hotel-modal" ref="hotel_modal" size="lg" :hide-footer="true" modal-class="custom-modal">
            <template v-slot:modal-header>
                <h5 class="modal-title">Hotel Form</h5>
                <button type="button" class="close" @click="closeEditModal" aria-label="Close">
                    <span aria-hidden="true">×</span>
                </button>
            </template>

            <hotel-form :entry="entry" :cities="cities" ></hotel-form>
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
            }
        },
        computed: {
            ...mapGetters('Hotel', [
                'shouldOpenModal',
                'shouldRefreshTable',
                'shouldStatusData',
                'getHotels',
            ]),
        },
        methods: {
            ...mapActions('Hotel', [
                'openModal',
                'refreshTable',
                'deleteHotel',
                'hotelAll'
            ]),
            closeEditModal() {
                this.entry = null;
                this.$refs['hotel_modal'].hide();
            },
            openEditModal(row) {
                this.show = false
                this.entry = row;
                this.$refs['hotel_modal'].show();
            },
            submitDelete(id) {
                if(confirm("Вы действительно хотите удалить?")){
                    this.deleteHotel(id);
                    this.refreshTable(true)
                    this.hotelAll();
                }
            }
        },
        watch: {
            shouldOpenModal() {
                if (this.shouldOpenModal === true) {
                    this.entry = null;
                    this.show = false;
                    this.$refs['hotel_modal'].show();
                    this.openModal(false);
                }
            },
            shouldRefreshTable() {
                if (this.shouldRefreshTable === true) {
                    this.refreshTable(false);
                    this.$refs['hotel_modal'].hide();
                    this.hotelAll();
                }
            },
            shouldStatusData() {
                if (this.shouldStatusData != null) {
                    this.show = true;
                    this.status = this.shouldStatusData;
                    this.hotelAll();
                }
            }
        },
        async mounted() {
            this.hotelAll();
        }
    }
</script>