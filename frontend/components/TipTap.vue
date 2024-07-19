<script setup lang="ts">
const editor: any = useEditor({
  content: "<p>Escriba aquí dentro 🎩</p>",
  extensions: [TiptapStarterKit],
});

const getHTMLContent = () => {
  return editor.value.getHTML();
};

defineExpose({
  getHTMLContent,
});

onBeforeUnmount(() => {
  unref(editor)?.destroy();
});
</script>

<template>
  <b-div border-width="1" rounded>
    <b-div
      v-if="editor"
      border="bottom"
      border-width="1"
      margin="b-3"
      padding="2"
      display="flex"
      flex-wrap="wrap"
    >
      <b-button
        type="button"
        button="light"
        margin="e-2 y-2"
        @click="editor.chain().focus().toggleBold().run()"
        :disabled="!editor.can().chain().focus().toggleBold().run()"
        :class="{ 'is-active': editor.isActive('bold') }"
      >
        bold
      </b-button>
      <b-button
        type="button"
        button="light"
        margin="e-2 y-2"
        @click="editor.chain().focus().toggleItalic().run()"
        :disabled="!editor.can().chain().focus().toggleItalic().run()"
        :class="{ 'is-active': editor.isActive('italic') }"
      >
        italic
      </b-button>
      <b-button
        type="button"
        button="light"
        margin="e-2 y-2"
        @click="editor.chain().focus().toggleStrike().run()"
        :disabled="!editor.can().chain().focus().toggleStrike().run()"
        :class="{ 'is-active': editor.isActive('strike') }"
      >
        strike
      </b-button>
      <b-button
        type="button"
        button="light"
        margin="e-2 y-2"
        @click="editor.chain().focus().toggleCode().run()"
        :disabled="!editor.can().chain().focus().toggleCode().run()"
        :class="{ 'is-active': editor.isActive('code') }"
      >
        code
      </b-button>
      <b-button
        type="button"
        button="light"
        margin="e-2 y-2"
        @click="editor.chain().focus().unsetAllMarks().run()"
      >
        clear marks
      </b-button>
      <b-button
        type="button"
        button="light"
        margin="e-2 y-2"
        @click="editor.chain().focus().clearNodes().run()"
      >
        clear nodes
      </b-button>
      <b-button
        type="button"
        button="light"
        margin="e-2 y-2"
        @click="editor.chain().focus().setParagraph().run()"
        :class="{ 'is-active': editor.isActive('paragraph') }"
      >
        paragraph
      </b-button>
      <b-button
        type="button"
        button="light"
        margin="e-2 y-2"
        @click="editor.chain().focus().toggleHeading({ level: 1 }).run()"
        :class="{ 'is-active': editor.isActive('heading', { level: 1 }) }"
      >
        h1
      </b-button>
      <b-button
        type="button"
        button="light"
        margin="e-2 y-2"
        @click="editor.chain().focus().toggleHeading({ level: 2 }).run()"
        :class="{ 'is-active': editor.isActive('heading', { level: 2 }) }"
      >
        h2
      </b-button>
      <b-button
        type="button"
        button="light"
        margin="e-2 y-2"
        @click="editor.chain().focus().toggleHeading({ level: 3 }).run()"
        :class="{ 'is-active': editor.isActive('heading', { level: 3 }) }"
      >
        h3
      </b-button>
      <b-button
        type="button"
        button="light"
        margin="e-2 y-2"
        @click="editor.chain().focus().toggleHeading({ level: 4 }).run()"
        :class="{ 'is-active': editor.isActive('heading', { level: 4 }) }"
      >
        h4
      </b-button>
      <b-button
        type="button"
        button="light"
        margin="e-2 y-2"
        @click="editor.chain().focus().toggleHeading({ level: 5 }).run()"
        :class="{ 'is-active': editor.isActive('heading', { level: 5 }) }"
      >
        h5
      </b-button>
      <b-button
        type="button"
        button="light"
        margin="e-2 y-2"
        @click="editor.chain().focus().toggleHeading({ level: 6 }).run()"
        :class="{ 'is-active': editor.isActive('heading', { level: 6 }) }"
      >
        h6
      </b-button>
      <b-button
        type="button"
        button="light"
        margin="e-2 y-2"
        @click="editor.chain().focus().toggleBulletList().run()"
        :class="{ 'is-active': editor.isActive('bulletList') }"
      >
        bullet list
      </b-button>
      <b-button
        type="button"
        button="light"
        margin="e-2 y-2"
        @click="editor.chain().focus().toggleOrderedList().run()"
        :class="{ 'is-active': editor.isActive('orderedList') }"
      >
        ordered list
      </b-button>
      <b-button
        type="button"
        button="light"
        margin="e-2 y-2"
        @click="editor.chain().focus().toggleCodeBlock().run()"
        :class="{ 'is-active': editor.isActive('codeBlock') }"
      >
        code block
      </b-button>
      <b-button
        type="button"
        button="light"
        margin="e-2 y-2"
        @click="editor.chain().focus().toggleBlockquote().run()"
        :class="{ 'is-active': editor.isActive('blockquote') }"
      >
        blockquote
      </b-button>
      <b-button
        type="button"
        button="light"
        margin="e-2 y-2"
        @click="editor.chain().focus().setHorizontalRule().run()"
      >
        horizontal rule
      </b-button>
      <b-button
        type="button"
        button="light"
        margin="e-2 y-2"
        @click="editor.chain().focus().setHardBreak().run()"
      >
        hard break
      </b-button>
      <b-button
        type="button"
        button="light"
        margin="e-2 y-2"
        @click="editor.chain().focus().undo().run()"
        :disabled="!editor.can().chain().focus().undo().run()"
      >
        undo
      </b-button>
      <b-button
        type="button"
        button="light"
        margin="e-2 y-2"
        @click="editor.chain().focus().redo().run()"
        :disabled="!editor.can().chain().focus().redo().run()"
      >
        redo
      </b-button>
    </b-div>

    <b-div padding="2">
      <TiptapEditorContent :editor="editor" />
    </b-div>
  </b-div>
</template>
