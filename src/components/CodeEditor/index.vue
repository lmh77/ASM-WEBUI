<script>
import ace from 'brace'
import { defineComponent, ref, markRaw, watch, onMounted, onBeforeUnmount } from 'vue'
const EVENTS = [
  'blur',
  'input',
  'change',
  'changeAnnotation',
  'changeSelectionStyle',
  'changeSession',
  'copy',
  'focus',
  'paste'
]
export default defineComponent({
  name: 'Vue3CodeEditor',
  props: {
    modelValue: { type: String, required: true },
    lang: { type: String, default: 'text' },
    theme: { type: String, default: 'chrome' },
    options: {
      type: Object,
      default: () => {
        return {}
      }
    },
    readonly: Boolean,
    wrap: Boolean,
    useWorker: { type: Boolean, default: true },
    printMargin: { type: [Boolean, Number], default: true },
    minLines: { type: Number, default: 30 },
    maxLines: { type: Number, default: 1000 }
  },
  emits: ['update:modelValue', 'init', ...EVENTS],
  setup(props, { emit }) {
    const editorDOM = ref(null)
    let editor = null
    let backup = ''
    onMounted(() => {
      // Create editor instance
      editor = markRaw(ace.edit(editorDOM.value))
      // Set Options
      editor.$blockScrolling = Infinity
      editor.setOptions({
        readOnly: props.readonly,
        wrap: props.wrap,
        printMargin: props.printMargin,
        useWorker: props.useWorker,
        minLines: props.minLines || 1,
        maxLines: props.maxLines || 10000,
        autoScrollEditorIntoView: true,
        ...props.options
      })
      // Emit Init event
      emit('init', editor)
      // Set theme and language
      editor.setOptions({
        mode: 'ace/mode/' + props.lang,
        theme: 'ace/theme/' + props.theme
      })
      // Set Value
      editor.setValue(props.modelValue, 1)
      backup = props.modelValue
      // Events
      editor.on('change', () => {
        const content = editor.getValue()
        emit('update:modelValue', content)
        backup = content
      })
      EVENTS.forEach((evt) => editor.on(evt, emit.bind(this, evt)))
    })
    onBeforeUnmount(() => {
      editor.destroy()
      editor.container.remove()
    })
    watch(
      () => props.modelValue,
      (value) => {
        if (backup === value) return
        editor.setValue(value, 1)
        backup = value
      }
    )
    watch(
      () => props.theme,
      (value) => editor.setTheme('ace/theme/' + value)
    )
    watch(
      () => props.lang,
      (value) => editor.getSession().setMode('ace/mode/' + value)
    )
    watch(
      () => props.options,
      (value) => editor.setOptions(value)
    )
    watch(
      () => props.readonly,
      (value) => editor.setOption('readOnly', value)
    )
    watch(
      () => props.wrap,
      (value) => editor.setOption('wrap', value)
    )
    watch(
      () => props.useWorker,
      (value) => editor.setOption('useWorker', value)
    )
    watch(
      () => props.printMargin,
      (value) => editor.setOption('printMargin', value)
    )
    watch(
      () => props.minLines,
      (value) => editor.setOption('minLines', value)
    )
    watch(
      () => props.maxLines,
      (value) => editor.setOption('maxLines', value)
    )
    return {
      editor,
      backup,
      editorDOM
    }
  }
})
</script>

<template>
  <!--
    <pre>{{ $props }}</pre>
    <pre>{{ $attrs }}</pre>
  -->
  <div ref="editorDOM"></div>
</template>
