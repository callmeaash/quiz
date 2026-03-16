<script setup>
import { useQuizStore } from '@/stores/quizStore.js';
import { useRouter } from 'vue-router';

import ScoreDisplay from '@/components/ScoreDisplay.vue';
import StatsCard from '@/components/StatsCard.vue';
import ResultActions from '@/components/ResultActions.vue';

const quiz = useQuizStore();
const router = useRouter();

const handlePlayAgain = () => {
    quiz.resetQuiz();
    router.push('/');
};

const handleReviewAnswers = () => {
    router.push('/review');
};
</script>

<template>
    <div class="w-[90vw] lg:w-[60vw] card-background card-border border-4 h-[90vh] p-8 flex flex-col items-center justify-center gap-8">
        
        <h1 class="text-4xl font-bold text-gray-800">Quiz Completed!</h1>

        <ScoreDisplay 
            :correct="quiz.correctAnswers"
            :total="quiz.totalQuestions"
            :percentage="quiz.scorePercentage"
            :feedback-message="quiz.feedbackMessage"
        />

        <div class="flex gap-4 w-full max-w-md">
            <StatsCard 
                label="Correct Answers"
                :value="quiz.correctAnswers"
                bg-color="bg-green-500"
            />
            <StatsCard 
                label="Incorrect Answers"
                :value="quiz.incorrectAnswers"
                bg-color="bg-red-500"
            />
        </div>

        <ResultActions 
            @review="handleReviewAnswers"
            @play-again="handlePlayAgain"
        />

    </div>
</template>
