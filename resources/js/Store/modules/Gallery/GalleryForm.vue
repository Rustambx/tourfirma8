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
                    <input type="text" v-model="form.name" required id="title" name="title" placeholder="Text" class="form-control">
                </div>
            </div>

            <div class="row form-group">
                <div class="col col-md-3"><label for="selectLg" class=" form-control-label">Тур</label></div>
                <div class="col-12 col-md-9">
                    <select name="tour_id" v-model="form.tour_id"  id="selectLg" class="form-control-lg form-control">
                        <option  v-for="tour in tours" :value="tour.id" :selected="tour.id === form.tour_id">
                            {{ tour.title }}
                        </option>
                    </select>
                </div>
            </div>

            <div class="row form-group" v-if="form.resized_image">
                <div class="col col-md-3"><label for="file-input" class=" form-control-label">Текущее изображение</label></div>
                <div class="col-12 col-md-9">
                    <img :src="form.resized_image" :alt="form.name">
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
                    name : '',
                    img: '',
                    tour_id: ''
                })
            }
        },
        methods: {
            ...mapActions('Gallery', [
                'saveGallery',
                'refreshTable',
                'statusData'
            ]),

            checkForm(e) {
                this.errors.splice(0);

                if (!this.form.name) {
                    this.errors.push('Name required.');
                }
                if (!this.form.img) {
                    this.errors.push('Image required.');
                }
                if (!this.form.tour_id) {
                    this.errors.push('Tour required.');
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
                    data.append('img', this.form.img);
                    data.append('tour_id', this.form.tour_id);

                    if (this.entry) {
                        data.append('id', this.entry.id);
                    }

                    payload = data;
                    payload.callback = (data) => {
                        this.refreshTable(true);
                        this.statusData(data.status);
                    };

                    this.saveGallery(payload);

                    this.form.reset();
                }
                
            }
        },
        props: {
            entry: {
                required: false
            },
            tours: {
                required: false
            }
        },
        mounted() {
            this.form = new Form({
                name: this.entry ? this.entry.name : null,
                img: this.entry ? this.entry.img : null,
                tour_id: this.entry ? this.entry.tour_id : null,
            });
        },
    }
</script>