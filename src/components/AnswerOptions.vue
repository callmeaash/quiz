<template>
    <div class="flex-1 flex flex-col gap-3 mb-8">
        <button 
            v-for="(option, index) in options" 
            :key="index"
            @click="$emit('select', index)"
            :class="[
                'p-4 border-2 rounded-lg text-left font-medium transition-all',
                selectedAnswer === index 
                    ? 'border-blue-500 bg-blue-50' 
                    : 'border-gray-300 bg-white hover:border-blue-300'
            ]"
        >
            <span class="text-gray-700">{{ String.fromCharCode(65 + index) }}. {{ option }}</span>
        </button>
    </div>
</template>

<script setup>
defineProps({
    options: {
        type: Array,
        required: true
    },
    selectedAnswer: {
        type: Number,
        default: null
    }
});

defineEmits(['select']);
</script>
