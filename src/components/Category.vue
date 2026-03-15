<script setup>
import IconCss from '@/components/icons/IconCss.vue';
import IconHtml from '@/components/icons/IconHtml.vue';
import IconJavascript from '@/components/icons/IconJavascript.vue';
import IconPython from '@/components/icons/IconPython.vue';

let emit = defineEmits(['update:modelValue'])

let props = defineProps({
  title: String,
  bgColor: String,
  borderColor: String,
  textColor: {
    type: String,
    default: 'text-gray-900'
  },
  modelValue: String
})

const icons = {
  JavaScript: IconJavascript, 
  Python: IconPython,
  HTML: IconHtml,
  CSS: IconCss,
}

const selectCategory = () => {
  emit('update:modelValue', props.title)
}

</script>

<template>
    <div 
        @click="selectCategory"
        :class="[
          'flex items-center justify-center gap-4 rounded-lg py-4 hover:shadow-xl cursor-pointer transition-all duration-200',
          bgColor,
          borderColor,
          textColor,
          modelValue === title
            ? 'scale-105 ring-4 ring-white ring-offset-2 ring-offset-transparent shadow-xl brightness-110'
            : 'opacity-80 hover:opacity-100'
        ]"
    >
                    
        <component :is="icons[title]" />
        <p class="font-medium text-xl">{{ title }}</p>

    </div>
</template>