<template>
    <div class="flex gap-4 w-full max-w-md">
        <button 
            @click="$emit('review')"
            class="flex-1 px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-all"
        >
            Review Answers
        </button>
        <button 
            @click="$emit('play-again')"
            class="flex-1 px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-all"
        >
            Play Again
        </button>
    </div>
</template>

<script setup>
defineEmits(['review', 'play-again']);
</script>
