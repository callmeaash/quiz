<script setup>
import Category from '@/components/Category.vue';
import { ref } from 'vue';
import { RouterLink } from 'vue-router';

let selected = ref('');

const categories = [
  { title: 'JavaScript', bg: 'bg-[#fed832]', border: 'border-b-4 border-[#f3c645]', text: 'text-gray-900' },
  { title: 'Python', bg: 'bg-[#4683df]', border: 'border-b-4 border-[#2c69cb]', text: 'text-white' },
  { title: 'HTML', bg: 'bg-[#f47237]', border: 'border-b-4 border-[#e26639]', text: 'text-white' },
  { title: 'CSS', bg: 'bg-[#3ea158]', border: 'border-b-4 border-[#2b8e4a]', text: 'text-white' }
]

</script>

<template>
    <div class="w-[90vw] lg:w-[60vw] card-background card-border border-4 h-[90vh]">

        <header class="text-center mt-10 lg:mt-16">
            <h1 class="text-3xl font-medium md:px-2">Welcome to Quiz Game! </h1>
            <p class="text-muted mt-4 text-lg">Choose a category to start.</p>
        </header>
        
        <main class="lg:max-w-[45vw] max-w-[70vw] mx-auto mt-5">
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-y-6 gap-x-6">
                <Category
                  v-for="cat in categories"
                  :key="cat.title"
                  :title="cat.title"
                  :bg-color="cat.bg"
                  :border-color="cat.border"
                  :text-color="cat.text"
                  v-model="selected"
                />
            </div>

            <RouterLink
                v-if="selected"
                :to="{ name: 'quiz', params: { category: selected } }"
                @click.prevent="!selected && $event.preventDefault()"
                :class="{
                  'opacity-50 cursor-not-allowed pointer-events-none': !selected,
                  'hover:bg-[#1162d1]': selected
                }"
                class="block text-center w-64 mx-auto mt-10 lg:mt-16 text-xl text-white bg-[#4683df] border-b-4 border-[#2c69cb] py-3 rounded"
            >
              Start Quiz
            </RouterLink>

            <div v-else class="block text-center w-64 mx-auto mt-10 lg:mt-16 text-xl text-white bg-[#4683df] border-b-4 border-[#2c69cb] py-3 rounded opacity-50 cursor-not-allowed">
              Select a category
            </div>
        </main>
    </div>
</template>