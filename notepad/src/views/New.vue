<template>
  <div class="editor">
    <textarea name="memo" v-model="memobody"></textarea>
    <button v-on:click="save">保存</button>
  </div>
</template>

<style scoped>
/*scopedを付けるとこの画面だけにcssが適用される */
textarea {
  width: 100%;
  height: 10em;
}
button {
  border: 1px solid #333;
  background-color: #333;
  color: white;
  padding: 10px 20px;
  margin-top: 10px;
}
</style>

<script>
export default {
  name: "new",
  data: function() {
    return {
      memobody: "メモです"
    };
  },
  methods: {
    save: function() {
      alert("メモが保存されました");
      this.$router.push("/");
    }
  }
};
</script>