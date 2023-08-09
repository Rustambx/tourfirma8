<template>
    <div class="card-body">
        <button class="btn btn-primary" @click="triggerModal">Создать Галерею</button>
    </div>
</template>

<script>
    import { mapActions } from 'vuex';

    export default {
        methods: {
            ...mapActions('Gallery', [
                'openModal'
            ]),
            triggerModal() {
                this.openModal(true);
            }
        }
    }
</script>