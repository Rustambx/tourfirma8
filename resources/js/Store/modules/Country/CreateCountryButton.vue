<template>
    <div class="card-body">
        <button class="btn btn-primary" @click="triggerModal">Создать Страну</button>
    </div>
</template>

<script>
    import { mapActions } from 'vuex';

    export default {
        methods: {
            ...mapActions('Country', [
                'openModal'
            ]),
            triggerModal() {
                this.openModal(true);
            }
        }
    }
</script>