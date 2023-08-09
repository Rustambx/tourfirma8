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
                <th>Изображения</th>
                <th>Действие</th>
            </tr>
            </thead>
            <tbody>
                <tr v-for="country in getCountries.data">
                    <td>
                        <a>{{ country.title }}</a>
                    </td>
                    <td v-html="country.preview_text.substring(0,199)"></td>
                    <td>
                        <img :src="country.resized_image" :alt="country.title">
                    </td>
                    <td>
                        <button class="btn btn-success" @click="openEditModal(country)">Редактировать</button>

                        <br>
                        <br>
                        <button class="btn btn-danger" @click="submitDelete(country.id)">Удалить</button>
                    </td>
                </tr>
            </tbody>
        </table>

        <b-modal id="country-modal" ref="country_modal" size="lg" :hide-footer="true" modal-class="custom-modal">
            <template v-slot:modal-header>
                <h5 class="modal-title">Country Form</h5>
                <button type="button" class="close" @click="closeEditModal" aria-label="Close">
                    <span aria-hidden="true">×</span>
                </button>
            </template>

            <country-form :entry="entry"></country-form>
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
            'b-modal': BModal,
        },
        props: {
            countries: {
                required: true
            }
        },
        computed: {
            ...mapGetters('Country', [
                'shouldOpenModal',
                'shouldRefreshTable',
                'shouldStatusData',
                'getCountries',
            ])
        },
        methods: {
            ...mapActions('Country', [
                'openModal',
                'refreshTable',
                'deleteCountry',
                'countryAll',
                'statusData',
            ]),
            closeEditModal() {
                this.entry = null;
                this.$refs['country_modal'].hide();
            },
            openEditModal(row) {
                this.show = false
                this.entry = row;
                this.$refs['country_modal'].show();
            },
            submitDelete(id) {
                if(confirm("Вы действительно хотите удалить?")){
                    this.deleteCountry(id);
                    this.refreshTable(true)
                    this.countryAll();
                }
            }
        },
        watch: {
            shouldOpenModal() {
                if (this.shouldOpenModal === true) {
                    this.entry = null;
                    this.show = false;
                    this.$refs['country_modal'].show();
                    this.openModal(false);
                }
            },
            shouldRefreshTable() {
                if (this.shouldRefreshTable === true) {
                    this.refreshTable(false);
                    this.$refs['country_modal'].hide();
                    this.countryAll();
                }
            },
            shouldStatusData() {
                if (this.shouldStatusData != null) {
                    this.show = true;
                    this.status = this.shouldStatusData;
                    this.countryAll();
                }
            }
        },
        async mounted() {
            this.countryAll();
        }
    }
</script>