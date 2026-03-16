import { ref, onMounted, onBeforeUnmount } from 'vue';

export const useTimer = (duration = 20, onExpire = null) => {
    const timeLeft = ref(duration);
    let timerInterval;

    const formatTime = (seconds) => {
        const mins = Math.floor(seconds / 60);
        const secs = seconds % 60;
        return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
    };

    const startTimer = () => {
        timerInterval = setInterval(() => {
            timeLeft.value--;
            if (timeLeft.value < 0) {
                clearInterval(timerInterval);
                if (onExpire) onExpire();
            }
        }, 1000);
    };

    const resetTimer = () => {
        timeLeft.value = duration;
    };

    const stopTimer = () => {
        if (timerInterval) clearInterval(timerInterval);
    };

    onMounted(() => {
        startTimer();
    });

    onBeforeUnmount(() => {
        stopTimer();
    });

    return {
        timeLeft,
        formatTime,
        startTimer,
        stopTimer,
        resetTimer
    };
};
