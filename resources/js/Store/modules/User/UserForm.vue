<template>
    <div class="card-body card-block">
        <form>
            <p v-if="errors.length">
                <b>Please correct the following error(s):</b>
                <ul>
                    <li v-for="error in errors">{{ error }}</li>
                </ul>
            </p>
            <div class="row form-group">
                <div class="col col-md-3"><label for="text-input" class=" form-control-label">Имя</label></div>
                <div class="col-12 col-md-9">
                    <input type="text" v-model="form.name" required id="name" name="name" placeholder="Text" class="form-control">
                </div>
            </div>

            <div class="row form-group">
                <div class="col col-md-3"><label for="textarea-input" class=" form-control-label">Логин</label></div>
                <div class="col-12 col-md-9">
                    <input type="text" v-model="form.login" required id="login" name="login" placeholder="Text" class="form-control">
                </div>
            </div>

            <div class="row form-group">
                <div class="col col-md-3"><label for="textarea-input" class=" form-control-label">Email</label></div>
                <div class="col-12 col-md-9">
                    <input type="email" v-model="form.email" required id="email" name="email" placeholder="Text" class="form-control">
                </div>
            </div>

            <div class="row form-group">
                <div class="col col-md-3"><label for="selectLg" class=" form-control-label">Роль</label></div>
                <div class="col-12 col-md-9">
                    <select name="role_id" v-model="form.role_id"  id="selectLg" class="form-control-lg form-control">
                        <option  v-for="role in roles" :value="role.id" :selected="role.id === form.role_id">
                            {{ role.name }}
                        </option>
                    </select>
                </div>
            </div>

            <div class="row form-group">
                <div class="col col-md-3"><label for="textarea-input" class=" form-control-label">Пароль</label></div>
                <div class="col-12 col-md-9">
                    <input type="password" v-model="form.password" required id="password" name="password" placeholder="Text" class="form-control">
                </div>
            </div>

            <div class="row form-group">
                <div class="col col-md-3"><label for="textarea-input" class=" form-control-label">Повторите пароль</label></div>
                <div class="col-12 col-md-9">
                    <input type="password" v-model="form.password_confirmation" required id="password_confirmation" name="password_confirmation" placeholder="Text" class="form-control">
                </div>
            </div>

            <div class="card-footer">
                <input @click="submit" value="Сохранить" class="btn btn-primary btn-sm">
            </div>

        </form>
    </div>
</template>

<script>
    import { mapActions, mapGetters } from 'vuex';

    export default {
        data() {
            return {
                errors: [],
                form: new Form({
                    name : '',
                    login: '',
                    email: '',
                    password: '',
                    password_confirmation: '',
                    role_id: '',
                })
            }
        },
        methods: {
            ...mapActions('User', [
                'saveUser',
                'refreshTable',
                'statusData'
            ]),

            checkForm(e) {
                this.errors.splice(0);

                if (!this.form.name) {
                    this.errors.push('Name required.');
                }
                if (!this.form.login) {
                    this.errors.push('Login required.');
                }
                if (!this.form.email) {
                    this.errors.push('Email required.');
                }
                if (!this.form.role_id) {
                    this.errors.push('Role required.');
                }

                if(this.form.id == null) {
                    if (!this.form.password) {
                        this.errors.push('Password required.');
                    }
                    if (this.form.password != this.form.password_confirmation) {
                        this.errors.push('Повторите пароль');
                    }
                }

                if (this.errors.length) {
                    return true;
                }

            },

            saveImg(e) {
                this.form.img = e.target.files[0];
            },

            submit() {
                if(this.checkForm()) {
                    return false;
                } else {
                    let data = new FormData();
                    let payload = {};

                    data.append('name', this.form.name);
                    data.append('login', this.form.login);
                    data.append('email', this.form.email);
                    data.append('password', this.form.password);
                    data.append('password_confirmation', this.form.password_confirmation);
                    data.append('role_id', this.form.role_id);

                    if (this.entry) {
                        data.append('id', this.entry.id);
                    }

                    payload = data;

                    payload.callback = (data) => {
                        this.refreshTable(true);
                        this.statusData(data.status);
                    };

                    this.saveUser(payload);

                    this.form.reset();
                }
                
            }
        },
        props: {
            entry: {
                required: false
            },
            roles: {
                required: false
            }
        },
        mounted() {
            this.form = new Form({
                id: this.entry ? this.entry.id : null,
                name: this.entry ? this.entry.name : null,
                login: this.entry ? this.entry.login : null,
                email: this.entry ? this.entry.email : null,
                password: this.entry ? this.entry.password : null,
                role_id: this.entry ? this.entry.role_id : null,
            });
        },
    }
</script>