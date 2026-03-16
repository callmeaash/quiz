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
    const isCompleted = ref(false);

    const currentQuestion = computed(() => {
        return questions.value[currentIndex.value];
    });

    const progressPercentage = computed(() => {
        return ((currentIndex.value + 1) / totalQuestions.value) * 100;
    });

    const correctAnswers = computed(() => {
        return answers.value.filter((answer, index) => {
            return answer === questions.value[index]?.answer;
        }).length;
    });

    const incorrectAnswers = computed(() => {
        return totalQuestions.value - correctAnswers.value;
    });

    const scorePercentage = computed(() => {
        return Math.round((correctAnswers.value / totalQuestions.value) * 100);
    });

    const feedbackMessage = computed(() => {
        const percentage = scorePercentage.value;
        if (percentage === 100) return 'Perfect Score!';
        if (percentage >= 80) return 'Well Done!';
        if (percentage >= 60) return 'Good Job!';
        if (percentage >= 40) return 'Keep Practicing!';
        return 'Try Again!';
    });

    const reviewData = computed(() => {
        return questions.value.map((question, index) => {
            const userAnswer = answers.value[index];
            const isCorrect = userAnswer === question.answer;
            return {
                id: question.id,
                question: question.question,
                userAnswer: userAnswer,
                userAnswerText: question.options[userAnswer],
                correctAnswer: question.answer,
                correctAnswerText: question.options[question.answer],
                isCorrect
            };
        });
    });

    function startQuiz(category) {
        questions.value = questionData[category]
        currentIndex.value = 0;
        answers.value = [];
        totalQuestions.value = questions.value.length;
        score.value = 0;
        isCompleted.value = false;
        selectedAnswer.value = null;
    }

    function selectAnswer(index) {
        selectedAnswer.value = index;
        answers.value[currentIndex.value] = index;
    }

    function nextQuestion() {
        if(currentIndex.value < questions.value.length - 1) {
            currentIndex.value++;
            selectedAnswer.value = null;
        } else {
            finishQuiz();
        }
    }

    function finishQuiz() {
        isCompleted.value = true;
    }

    function resetQuiz() {
        currentIndex.value = 0;
        selectedAnswer.value = null;
        answers.value = [];
        totalQuestions.value = 0;
        score.value = 0;
        isCompleted.value = false;
    }

    return {
        startQuiz,
        selectAnswer,
        nextQuestion,
        finishQuiz,
        resetQuiz,
        currentQuestion,
        progressPercentage,
        correctAnswers,
        incorrectAnswers,
        scorePercentage,
        feedbackMessage,
        reviewData,
        currentIndex,
        selectedAnswer,
        answers,
        totalQuestions,
        isCompleted,
        questions
    }
});