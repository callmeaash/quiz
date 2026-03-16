import questionData from '@/questionData.json';
import { ref, computed } from 'vue';
import { defineStore } from 'pinia';

export const useQuizStore = defineStore('quiz', () => {
    const questions = ref([]);
    const currentIndex = ref(0);
    const selectedAnswer = ref(null);
    const answers = ref([]);
    const totalQuestions = ref(0);
    const score = ref(0);

    const currentQuestion = computed(() => {
        return questions.value[currentIndex.value];
    });

    const progressPercentage = computed(() => {
        return ((currentIndex.value + 1) / totalQuestions.value) * 100;
    });

    function startQuiz(category) {
        questions.value = questionData[category]
        currentIndex.value = 0;
        answers.value = [];
        totalQuestions.value = questions.value.length;
    }

    function selectAnswer(index) {
        selectedAnswer.value = index;
        answers.value[currentIndex.value] = index;
    }

    function nextQuestion() {
        if(currentIndex.value < questions.value.length - 1) {
            currentIndex.value++;
            selectedAnswer.value = null;
        }
    }

    return {
        startQuiz,
        selectAnswer,
        nextQuestion,
        currentQuestion,
        progressPercentage,
        currentIndex,
        selectedAnswer,
        answers,
        totalQuestions
    }
});