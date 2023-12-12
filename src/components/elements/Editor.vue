<script setup>
import Editor from "@tinymce/tinymce-vue";
import { ref } from "vue";
import test from "./test.vue";

let content = ref("");

function showData(text) {
  console.log(text);
}
</script>

<template>
  <main id="editor">
    <Editor
      v-model="content"
      api-key="pf00ujpg5axrsn7rhu99bc8ovez1seu8xfiqy9j6ovnml4j7"
      :init="{
        toolbar_mode: 'sliding',
        plugins:
          'tinycomments mentions anchor autolink charmap codesample emoticons image link lists media searchreplace table visualblocks wordcount checklist mediaembed casechange export formatpainter pageembed permanentpen footnotes advtemplate advtable advcode editimage tableofcontents powerpaste tinymcespellchecker autocorrect a11ychecker typography inlinecss',
        toolbar:
          'undo redo | blocks | bold italic underline strikethrough | link image media | align lineheight | tinycomments | numlist bullist indent outdent | emoticons charmap | removeformat',
        tinycomments_mode: 'embedded',
      }"
      initial-value="Welcome to TinyMCE!"
    />
  </main>

  <input
    class="button"
    style="padding: 10px"
    type="button"
    value="Get data!"
    @click="showData(content)"
  />

  <test>{{ content }}</test>
</template>

<style scoped>
@media (min-width: 1024px) {
  #sample {
    display: flex;
    flex-direction: column;
    place-items: center;
    width: 100%;
  }
}
</style>
