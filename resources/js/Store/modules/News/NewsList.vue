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
                <tr v-for="news in getNews.data">
                    <td>
                        <a>{{ news.title }}</a>
                    </td>
                    <td v-html="news.preview_text.substring(0,199)"></td>
                    <td>
                        <img :src="news.resized_image" :alt="news.title">
                    </td>
                    <td>
                        <button class="btn btn-success" @click="openEditModal(news)">Редактировать</button>

                        <br>
                        <br>
                        <button class="btn btn-danger" @click="submitDelete(news.id)">Удалить</button>
                    </td>
                </tr>
            </tbody>
        </table>

        <b-modal id="news-modal" ref="news_modal" size="lg" :hide-footer="true" modal-class="custom-modal">
            <template v-slot:modal-header>
                <h5 class="modal-title">News Form</h5>
                <button type="button" class="close" @click="closeEditModal" aria-label="Close">
                    <span aria-hidden="true">×</span>
                </button>
            </template>

            <news-form :entry="entry"></news-form>
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
        computed: {
            ...mapGetters('News', [
                'shouldOpenModal',
                'shouldRefreshTable',
                'shouldStatusData',
                'getNews',
            ])
        },
        methods: {
            ...mapActions('News', [
                'openModal',
                'refreshTable',
                'deleteNews',
                'newsAll'
            ]),
            closeEditModal() {
                this.entry = null;
                this.$refs['news_modal'].hide();
            },
            openEditModal(row) {
                this.show = false
                this.entry = row;
                this.$refs['news_modal'].show();
            },
            submitDelete(id) {
                if(confirm("Вы действительно хотите удалить?")){
                    this.deleteNews(id);
                    this.refreshTable(true)
                    this.newsAll();
                }
            }
        },
        watch: {
            shouldOpenModal() {
                if (this.shouldOpenModal === true) {
                    this.entry = null;
                    this.show = false;
                    this.$refs['news_modal'].show();
                    this.openModal(false);
                }
            },
            shouldRefreshTable() {
                if (this.shouldRefreshTable === true) {
                    this.refreshTable(false);
                    this.$refs['news_modal'].hide();
                    this.newsAll();
                }
            },
            shouldStatusData() {
                if (this.shouldStatusData != false) {
                    this.show = true;
                    this.status = this.shouldStatusData;
                    this.newsAll();
                }
            }
        },
        async mounted() {
            this.newsAll();
        }
    }
</script>