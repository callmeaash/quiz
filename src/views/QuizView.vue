<script setup>
import { useQuizStore } from '@/stores/quizStore.js';
import { useTimer } from '@/composables/timer.js';
import { useRouter } from 'vue-router';
import { computed, watch } from 'vue';

import QuizHeader from '@/components/QuizHeader.vue';
import ProgressBar from '@/components/ProgressBar.vue';
import TimerDisplay from '@/components/TimerDisplay.vue';
import QuestionDisplay from '@/components/QuestionDisplay.vue';
import AnswerOptions from '@/components/AnswerOptions.vue';
import NextButton from '@/components/NextButton.vue';

const quiz = useQuizStore();
const router = useRouter();

const props = defineProps({
    category: String
})

quiz.startQuiz(props.category);

const handleNext = () => {
    resetTimer();
    quiz.nextQuestion();
};

const { timeLeft, formatTime, resetTimer, stopTimer } = useTimer(20, handleNext);

const formattedTime = computed(() => {
    return formatTime(timeLeft.value);
});

const handleSelectAnswer = (index) => {
    quiz.selectAnswer(index);
};

// Watch for quiz completion and navigate to results
watch(() => quiz.isCompleted, (isCompleted) => {
    if (isCompleted) {
        stopTimer();
        router.push('/results');
    }
});

</script>

<template>
    <div class="w-[90vw] lg:w-[60vw] card-background card-border border-4 h-[90vh] p-8 flex flex-col">
        
        <QuizHeader 
            :current-question="quiz.currentIndex + 1" 
            :total-questions="quiz.totalQuestions"
        />

        <ProgressBar :percentage="quiz.progressPercentage" />

        <TimerDisplay :formatted-time="formattedTime" />

        <QuestionDisplay :question="quiz.currentQuestion?.question" />

        <AnswerOptions 
            :options="quiz.currentQuestion?.options"
            :selected-answer="quiz.selectedAnswer"
            @select="handleSelectAnswer"
        />

        <NextButton 
            :disabled="quiz.selectedAnswer === null"
            @click="handleNext"
        />

    </div>
</template>