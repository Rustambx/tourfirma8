<template>
    <div class="card-body">
        <button class="btn btn-primary" @click="triggerModal">Создать слайдер</button>
    </div>
</template>

<script>
    import { mapActions } from 'vuex';

    export default {
        methods: {
            ...mapActions('Slider', [
                'openModal'
            ]),
            triggerModal() {
                this.openModal(true);
            }
        }
    }
</script>