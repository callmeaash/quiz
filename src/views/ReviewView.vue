<script setup>
import { useQuizStore } from '@/stores/quizStore.js';
import { useRouter } from 'vue-router';
import AnswerReviewItem from '@/components/AnswerReviewItem.vue';

const quiz = useQuizStore();
const router = useRouter();

const handleBack = () => {
    router.push('/results');
};
</script>

<template>
    <div class="w-[90vw] lg:w-[60vw] card-background card-border border-4 p-8 flex flex-col max-h-[90vh]">
        
        <div class="flex items-center justify-between mb-8 flex-shrink-0">
            <h1 class="text-3xl font-bold text-gray-800">Review Your Answers</h1>
            <button 
                @click="handleBack"
                class="px-4 py-2 bg-gray-600 text-white font-medium rounded-lg hover:bg-gray-700 transition-all"
            >
                Back
            </button>
        </div>

        <div class="flex-1 overflow-y-auto pr-2">
            <AnswerReviewItem 
                v-for="(item, index) in quiz.reviewData"
                :key="item.id"
                :question-number="index + 1"
                :question="item.question"
                :is-correct="item.isCorrect"
                :user-answer-text="item.userAnswerText"
                :correct-answer-text="item.correctAnswerText"
            />
        </div>

    </div>
</template>
