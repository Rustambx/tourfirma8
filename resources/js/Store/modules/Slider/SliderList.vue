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
                <th>Цена</th>
                <th>Страна</th>
                <th>Изображения</th>
                <th>Действие</th>
            </tr>
            </thead>
            <tbody>
                <tr v-for="slider in getSliders.data">
                    <td>
                        <a>{{ slider.title }}</a>
                    </td>
                    <td>{{ slider.price }}</td>
                    <td>{{ slider.country.title }}</td>
                    <td>
                        <img :src="slider.resized_image" :alt="slider.title">
                    </td>
                    <td>
                        <button class="btn btn-success" @click="openEditModal(slider)">Редактировать</button>

                        <br>
                        <br>
                        <button class="btn btn-danger" @click="submitDelete(slider.id)">Удалить</button>
                    </td>
                </tr>
            </tbody>
        </table>

        <b-modal id="slider-modal" ref="slider_modal" size="lg" :hide-footer="true" modal-class="custom-modal">
            <template v-slot:modal-header>
                <h5 class="modal-title">Slider Form</h5>
                <button type="button" class="close" @click="closeEditModal" aria-label="Close">
                    <span aria-hidden="true">×</span>
                </button>
            </template>

            <slider-form :entry="entry" :countries="countries" ></slider-form>
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
                show: false,
                status: false
            }
        },
        components: {
            'b-modal': BModal
        },
        props: {
            countries: {
                required: true
            }
        },
        computed: {
            ...mapGetters('Slider', [
                'shouldOpenModal',
                'shouldRefreshTable',
                'shouldStatusData',
                'getSliders',
            ]),
        },
        methods: {
            ...mapActions('Slider', [
                'openModal',
                'refreshTable',
                'deleteSlider',
                'sliderAll'
            ]),
            closeEditModal() {
                this.entry = null;
                this.$refs['slider_modal'].hide();
            },
            openEditModal(row) {
                this.show = false;
                this.entry = row;
                this.$refs['slider_modal'].show();
            },
            submitDelete(id) {
                if(confirm("Вы действительно хотите удалить?")){
                    this.deleteSlider(id);
                    this.refreshTable(true)
                    this.sliderAll();
                }

            }
        },
        watch: {
            shouldOpenModal() {
                if (this.shouldOpenModal === true) {
                    this.entry = null;
                    this.show = false;
                    this.$refs['slider_modal'].show();
                    this.openModal(false);
                }
            },
            shouldRefreshTable() {
                if (this.shouldRefreshTable === true) {
                    this.refreshTable(false);
                    this.$refs['slider_modal'].hide();
                    this.sliderAll();
                }
            },
            shouldStatusData() {
                if (this.shouldStatusData != false) {
                    this.show = true;
                    this.status = this.shouldStatusData;
                    this.sliderAll();
                }
            }
        },
        async mounted() {
            this.sliderAll();
        }
    }
</script>