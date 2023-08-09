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
                <div class="col col-md-3"><label for="text-input" class=" form-control-label">Цена</label></div>
                <div class="col-12 col-md-9">
                    <input type="text" v-model="form.price" required id="price" name="price" placeholder="Text" class="form-control">
                </div>
            </div>

            <div class="row form-group">
                <div class="col col-md-3"><label for="textarea-input" class=" form-control-label">Детальный текст</label></div>
                <div class="col-12 col-md-9">
                    <textarea name="detail_text" v-model="form.detail_text" id="detail_text" rows="9" placeholder="Текст..." class="form-control html-editor"></textarea>
                </div>
            </div>

            <div class="row form-group">
                <div class="col col-md-3"><label for="selectLg" class=" form-control-label">Тип тура</label></div>
                <div class="col-12 col-md-9">
                    <select name="type_tour_id" v-model="form.type_tour_id" id="type_tour_id" class="form-control-lg form-control">
                        <option v-for="type in types" :value="type.id">{{ type.name }}</option>
                    </select>

                </div>
            </div>

            <div class="row form-group">
                <div class="col col-md-3"><label for="selectLg" class=" form-control-label">Отели</label></div>
                <div class="col-12 col-md-9">
                    <select name="hotel_id[]" v-model="form.hotels" multiple id="selectLg" data-live-search="true" class="form-control-lg form-control">
                        <option  v-for="hotel in hotels" :value="hotel.id">
                            {{ hotel.title }}
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

            <div class="row form-group">
                <div class="col col-md-2"><label for="file-input" class=" form-control-label">Горячий тур</label></div>
                <div class="col-12 col-md-3"><input type="checkbox" v-model="form.hot" id="hot" name="hot" class="form-control-file"></div>
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
                    title : '',
                    price: '',
                    hot: '',
                    detail_text: '',
                    img: '',
                    type_tour_id: '',
                    hotels: [],
                    hotels_id: [],
                })
            }
        },
        methods: {
            ...mapActions('Tour', [
                'saveTour',
                'refreshTable',
                'statusData'
            ]),

            checkForm(e) {
                this.errors.splice(0);

                if (!this.form.title) {
                    this.errors.push('Title required.');
                }
                if (!this.form.detail_text) {
                    this.errors.push('Detail text required.');
                }
                if (!this.form.img) {
                    this.errors.push('Image required.');
                }
                if (!this.form.type_tour_id) {
                    this.errors.push('Type required.');
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
                    data.append('price', this.form.price);
                    data.append('hot', this.form.hot);
                    data.append('detail_text', this.form.detail_text);
                    data.append('img', this.form.img);
                    data.append('type_tour_id', this.form.type_tour_id);
                    data.append('hotels', this.form.hotels);

                    if (this.entry) {
                        data.append('id', this.entry.id);
                    }

                    payload = data;

                    payload.callback = (data) => {
                        this.refreshTable(true);
                        this.statusData(data.status);
                    };

                    this.saveTour(payload);

                    this.form.reset();
                }
                
            }
        },
        props: {
            entry: {
                required: false
            },
            hotels: {
                required: false
            },
            types: {
                required: false
            }
        },
        mounted() {
            this.form = new Form({
                title: this.entry ? this.entry.title : null,
                price: this.entry ? this.entry.price : null,
                hot: this.entry ? this.entry.hot : null,
                detail_text: this.entry ? this.entry.detail_text : null,
                resized_image: this.entry ? this.entry.resized_image : null,
                img: this.entry ? this.entry.img : null,
                type_tour_id: this.entry ? this.entry.type_tour_id : null,
                hotels: this.entry ? this.entry.hotels : [],
                hotels_id: this.entry ? this.entry.hotels_id : [],
            });
        },
    }
</script>