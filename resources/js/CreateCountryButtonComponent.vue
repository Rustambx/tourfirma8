<template>
    <div class="card-body">
        <a href="" class="btn btn-primary" @click="triggerModal">Создать Страну</a>
    </div>
</template>

<script>
    import { mapActions } from 'vuex';

    export default {
        methods: {
            ...mapActions('country', [
                'openModal'
            ]),
            triggerModal() {
                this.openModal(true);
            }
        }
    }
</script>