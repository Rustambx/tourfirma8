<template>
    <div class="card-body">
        <button class="btn btn-primary" @click="triggerModal">Создать Новость</button>
    </div>
</template>

<script>
    import { mapActions } from 'vuex';

    export default {
        methods: {
            ...mapActions('News', [
                'openModal'
            ]),
            triggerModal() {
                this.openModal(true);
            }
        }
    }
</script>