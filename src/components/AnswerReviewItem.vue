<template>
    <div class="bg-white rounded-lg p-6 mb-6 shadow-sm border border-gray-200">
        <h3 class="text-lg font-semibold text-gray-800 mb-4">
            Question {{ questionNumber }}: {{ question }}
        </h3>
        <AnswerFeedback 
            :is-correct="isCorrect"
            :user-answer-text="userAnswerText"
            :correct-answer-text="correctAnswerText"
        />
    </div>
</template>

<script setup>
import AnswerFeedback from '@/components/AnswerFeedback.vue';

defineProps({
    questionNumber: {
        type: Number,
        required: true
    },
    question: {
        type: String,
        required: true
    },
    isCorrect: {
        type: Boolean,
        required: true
    },
    userAnswerText: {
        type: String,
        required: true
    },
    correctAnswerText: {
        type: String,
        required: true
    }
});
</script>
