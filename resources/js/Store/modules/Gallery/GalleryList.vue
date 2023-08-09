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
                <th>Изображения</th>
                <th>Тур</th>
                <th>Действие</th>
            </tr>
            </thead>
            <tbody>
                <tr v-if="getGalleries.data" v-for="gallery in getGalleries.data">
                    <td>
                        <a>{{ gallery.name }}</a>
                    </td>
                    <td>
                        <img :src="gallery.resized_image" :alt="gallery.title">
                    </td>
                    <td>
                        <a>{{ gallery.tour.title }}</a>
                    </td>
                    <td>
                        <button class="btn btn-success" @click="openEditModal(gallery)">Редактировать</button>

                        <br>
                        <br>
                        <button class="btn btn-danger" @click="submitDelete(gallery.id)">Удалить</button>
                    </td>
                </tr>
            </tbody>
        </table>

        <b-modal id="gallery-modal" ref="gallery_modal" size="lg" :hide-footer="true" modal-class="custom-modal">
            <template v-slot:modal-header>
                <h5 class="modal-title">Gallery Form</h5>
                <button type="button" class="close" @click="closeEditModal" aria-label="Close">
                    <span aria-hidden="true">×</span>
                </button>
            </template>

            <gallery-form :entry="entry" :tours="tours"></gallery-form>
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
            tours: {
                required: true
            }
        },
        computed: {
            ...mapGetters('Gallery', [
                'shouldOpenModal',
                'shouldRefreshTable',
                'shouldStatusData',
                'getGalleries',
            ]),
        },
        methods: {
            ...mapActions('Gallery', [
                'openModal',
                'refreshTable',
                'deleteGallery',
                'galleryAll'
            ]),
            closeEditModal() {
                this.entry = null;
                this.$refs['gallery_modal'].hide();
            },
            openEditModal(row) {
                this.show = false
                this.entry = row;
                this.$refs['gallery_modal'].show();
            },
            submitDelete(id) {
                if(confirm("Вы действительно хотите удалить?")){
                    this.deleteGallery(id);
                    this.refreshTable(true)
                    this.galleryAll();
                }
            }
        },
        watch: {
            shouldOpenModal() {
                if (this.shouldOpenModal === true) {
                    this.entry = null;
                    this.show = false;
                    this.$refs['gallery_modal'].show();
                    this.openModal(false);
                }
            },
            shouldRefreshTable() {
                if (this.shouldRefreshTable === true) {
                    this.refreshTable(false);
                    this.$refs['gallery_modal'].hide();
                    this.galleryAll();
                }
            },
            shouldStatusData() {
                if (this.shouldStatusData != null) {
                    this.show = true;
                    this.status = this.shouldStatusData;
                    this.galleryAll();
                }
            }
        },
        async mounted() {
            this.galleryAll();
        }
    }
</script>