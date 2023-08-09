<template>
    <div class="card-body">
        <button class="btn btn-primary" @click="triggerModal">Создать Тур</button>
    </div>
</template>

<script>
    import { mapActions } from 'vuex';

    export default {
        methods: {
            ...mapActions('Tour', [
                'openModal'
            ]),
            triggerModal() {
                this.openModal(true);
            }
        }
    }
</script>