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
                <div class="col col-md-3"><label for="text-input" class=" form-control-label">Название</label></div>
                <div class="col-12 col-md-9">
                    <input type="text" v-model="form.title" required id="title" name="title" placeholder="Text" class="form-control">
                </div>
            </div>

            <div class="row form-group">
                <div class="col col-md-3"><label for="textarea-input" class=" form-control-label">Анонс</label></div>
                <div class="col-12 col-md-9">
                    <textarea name="preview_text" v-model="form.preview_text" id="preview_text" rows="9" placeholder="Текст..." class="form-control html-editor"></textarea>
                </div>
            </div>

            <div class="row form-group">
                <div class="col col-md-3"><label for="textarea-input" class=" form-control-label">Детальный текст</label></div>
                <div class="col-12 col-md-9">
                    <textarea name="detail_text" v-model="form.detail_text" id="detail_text" rows="9" placeholder="Текст..." class="form-control html-editor"></textarea>
                </div>
            </div>

            <div class="row form-group">
                <div class="col col-md-3"><label for="selectLg" class=" form-control-label">Страна</label></div>
                <div class="col-12 col-md-9">
                    <select name="country_id" v-model="form.country_id"  id="selectLg" class="form-control-lg form-control">
                        <option  v-for="country in countries" :value="country.id" :selected="country.id === form.country_id">
                            {{ country.title }}
                        </option>
                    </select>
                </div>
            </div>

            <div class="row form-group" v-if="form.resized_image">
                <div class="col col-md-3"><label for="file-input" class=" form-control-label">Текущее изображение</label></div>
                <div class="col-12 col-md-9">
                    <img :src="form.resized_image" :alt="form.title">
                </div>
            </div>

            <div class="row form-group">
                <div class="col col-md-3"><label for="file-input" class=" form-control-label">Изображение</label></div>
                <div class="col-12 col-md-9"><input type="file" @change="saveImg"  id="img" name="img" class="form-control-file"></div>
            </div>

            <div class="card-footer">
                <input @click="submit" value="Сохранить" class="btn btn-primary btn-sm">
            </div>

        </form>
    </div>
</template>

<script>
    import { mapActions } from 'vuex';

    export default {
        data() {
            return {
                errors: [],
                form: new Form({
                    title : '',
                    preview_text: '',
                    detail_text: '',
                    img: '',
                    country_id: false,
                })
            }
        },
        methods: {
            ...mapActions('City', [
                'saveCity',
                'refreshTable',
                'statusData'
            ]),

            checkForm(e) {
                this.errors.splice(0);

                if (!this.form.title) {
                    this.errors.push('Title required.');
                }
                if (!this.form.preview_text) {
                    this.errors.push('Preview text required.');
                }
                if (!this.form.detail_text) {
                    this.errors.push('Detail text required.');
                }
                if (!this.form.img) {
                    this.errors.push('Image required.');
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

                    data.append('title', this.form.title);
                    data.append('preview_text', this.form.preview_text);
                    data.append('detail_text', this.form.detail_text);
                    data.append('img', this.form.img);
                    data.append('country_id', this.form.country_id);

                    if (this.entry) {
                        data.append('id', this.entry.id);
                    }

                    payload = data;
                    payload.callback = (data) => {
                        this.refreshTable(true);
                        this.statusData(data.status);
                    };

                    this.saveCity(payload);

                    this.form.reset();
                }
                
            }
        },
        props: {
            entry: {
                required: false
            },
            countries: {
                required: false
            }
        },
        mounted() {
            this.form = new Form({
                title: this.entry ? this.entry.title : null,
                preview_text: this.entry ? this.entry.preview_text : null,
                detail_text: this.entry ? this.entry.detail_text : null,
                resized_image: this.entry ? this.entry.resized_image : null,
                img: this.entry ? this.entry.img : null,
                country_id: this.entry ? this.entry.country_id : null,
            });
        },
    }
</script>