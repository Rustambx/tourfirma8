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
                <th>Имя</th>
                <th>Логин</th>
                <th>Email</th>
                <th>Действие</th>
            </tr>
            </thead>
            <tbody>
                <tr v-for="user in getUsers.data">
                    <td>
                        <a>{{ user.name }}</a>
                    </td>
                    <td>{{ user.login }}</td>
                    <td>{{ user.email }}</td>
                    <td>
                        <button class="btn btn-success" @click="openEditModal(user)">Редактировать</button>

                        <br>
                        <br>
                        <button class="btn btn-danger" @click="submitDelete(user.id)">Удалить</button>
                    </td>
                </tr>
            </tbody>
        </table>

        <b-modal id="user-modal" ref="user_modal" size="lg" :hide-footer="true" modal-class="custom-modal">
            <template v-slot:modal-header>
                <h5 class="modal-title">User Form</h5>
                <button type="button" class="close" @click="closeEditModal" aria-label="Close">
                    <span aria-hidden="true">×</span>
                </button>
            </template>

            <user-form :entry="entry" :roles="roles"></user-form>
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
            roles: {
                required: false
            }
        },
        computed: {
            ...mapGetters('User', [
                'shouldOpenModal',
                'shouldRefreshTable',
                'shouldStatusData',
                'getUsers',
            ])
        },
        methods: {
            ...mapActions('User', [
                'openModal',
                'refreshTable',
                'deleteUser',
                'userAll'
            ]),
            closeEditModal() {
                this.entry = null;
                this.$refs['user_modal'].hide();
            },
            openEditModal(row) {
                this.show = false;
                this.entry = row;
                this.$refs['user_modal'].show();
            },
            submitDelete(id) {
                if(confirm("Вы действительно хотите удалить?")){
                    this.deleteUser(id);
                    this.refreshTable(true)

                    this.userAll();
                }
            }
        },
        watch: {
            shouldOpenModal() {
                if (this.shouldOpenModal === true) {
                    this.entry = null;
                    this.show = false;
                    this.$refs['user_modal'].show();
                    this.openModal(false);
                }
            },
            shouldRefreshTable() {
                if (this.shouldRefreshTable === true) {
                    this.refreshTable(false);
                    this.$refs['user_modal'].hide();
                    this.userAll();
                }
            },
            shouldStatusData() {
                if (this.shouldStatusData != false) {
                    this.show = true;
                    this.status = this.shouldStatusData;
                    this.userAll();
                }
            }
        },
        async mounted() {
            this.userAll();
        }
    }
</script>