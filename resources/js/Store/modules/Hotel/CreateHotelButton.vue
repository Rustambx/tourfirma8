<template>
    <div class="card-body">
        <button class="btn btn-primary" @click="triggerModal">Создать Отель</button>
    </div>
</template>

<script>
    import { mapActions } from 'vuex';

    export default {
        methods: {
            ...mapActions('Hotel', [
                'openModal'
            ]),
            triggerModal() {
                this.openModal(true);
            }
        }
    }
</script>