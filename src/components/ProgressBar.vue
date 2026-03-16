<template>
    <div class="w-full h-2 bg-gray-300 rounded-full mb-6 overflow-hidden">
        <div 
            class="h-full bg-blue-500 transition-all duration-300" 
            :style="{ width: percentage + '%' }"
        ></div>
    </div>
</template>

<script setup>
defineProps({
    percentage: {
        type: Number,
        required: true,
        default: 0
    }
});
</script>
