<template>
    <div class="text-center mb-8 text-gray-400">
        Time Left: <span class="font-semibold text-gray-600">{{ formattedTime }}</span>
    </div>
</template>

<script setup>
defineProps({
    formattedTime: {
        type: String,
        required: true
    }
});
</script>
