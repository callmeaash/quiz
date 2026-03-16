<template>
    <div 
        class="flex-1 rounded-lg p-6 text-center shadow-md text-white"
        :class="bgColor"
    >
        <p class="text-sm font-medium mb-2">{{ label }}</p>
        <p class="text-4xl font-bold">{{ value }}</p>
    </div>
</template>

<script setup>
defineProps({
    label: {
        type: String,
        required: true
    },
    value: {
        type: Number,
        required: true
    },
    bgColor: {
        type: String,
        default: 'bg-blue-500',
        validator: (value) => ['bg-green-500', 'bg-red-500', 'bg-blue-500', 'bg-yellow-500'].includes(value)
    }
});
</script>
