<template>
    <div class="flex justify-between items-center mb-6">
        <h2 class="text-lg font-semibold text-foreground">
            Question {{ currentQuestion }} of {{ totalQuestions }}
        </h2>
    </div>
</template>

<script setup>
defineProps({
    currentQuestion: Number,
    totalQuestions: Number
});

</script>

<style scoped>
.text-foreground {
    color: #4d596b;
}
</style>
