<template>
    <div class="flex justify-center">
        <button 
            @click="$emit('click')"
            :disabled="disabled"
            class="px-16 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
        >
            Next
        </button>
    </div>
</template>

<script setup>
defineProps({
    disabled: {
        type: Boolean,
        default: false
    }
});

defineEmits(['click']);
</script>
