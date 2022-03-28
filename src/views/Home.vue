<template>
  <div class="qa-container">问答</div>
</template>

<script>
// import { getCategory } from "@/api/receiving";

export default {
  name: "Home",
  components: {},
  props: {},
  data() {
    return {
      arr: [],
    };
  },
  computed: {},
  watch: {},
  created() {
    this.getData();
  },
  mounted() {},
  methods: {
    getData() {
      this.axios
        .get("/category")
        .then((response) => {
          if (response.status == 200) {
            this.arr = response.data;
          }
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>

<style scoped lang="less">
</style>