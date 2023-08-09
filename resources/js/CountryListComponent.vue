<template>
    <div class="col-md-12">
        <div class="card">
    
            <div class="card-body">
                <button class="btn btn-primary" @click="openModal">Создать Страну</button>
            </div>
            <div class="card-header">
                <strong class="card-title">Список Стран</strong>
            </div>

            <div class="card-body">
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
                        <tr v-for="country in customCountries">
                            <td>
                                <a>{{ country.title }}</a>
                            </td>
                            <td v-html="country.preview_text"></td>
                            <td>
                                <img :src="country.resized_image" :alt="country.title">
                            </td>
                            <td>
                                <button class="btn btn-success">Редактировать</button>

                                <br>
                                <br>
                                <button class="btn btn-danger">Удалить</button>
                            </td>
                            <!-- <td>
                                <form method="post" action="{{ route('admin.countries.destroy', $item->id) }}">
                                    @method('DELETE')
                                    @csrf
                                    <button class="btn btn-danger" type="submit">Удалить</button>
                                </form>
                            </td> -->
                        </tr>
                    </tbody>
                </table>
            </div>

            <div id="country_modal" hidden>
                <div class="modal-mask">
                    <div class="modal-wrapper">
                        <div class="modal-container">
                            <country-form></country-form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            countries: Object
        },
        computed: {
            customCountries() {
                return this.countries.map(item=>{
                    return {...item, preview_text:item.preview_text.substring(0, 199)}
                });
            },
        },
        methods: {
            openModal() {
                document.querySelector('#country_modal').show()
            }
        },
        watch: {

        }
    }
</script>