<template>
  <div class="qa-container">
    <div class="header w">
      <div class="logo">
        <img src="./images/logo.png" alt="" />
      </div>
      <div class="nav">
        <ul>
          <li><a href="#">首页</a></li>
          <li><a href="#">课程</a></li>
          <li><a href="#">职业规划</a></li>
        </ul>
      </div>
      <div class="search">
        <input type="text" value="请输入关键字" />
        <button></button>
      </div>
      <div class="user">
        <img src="./images/user.jpg" alt="" />
        lilei
      </div>
    </div>
    <div class="banner">
      <div class="w">
        <div class="subnav"></div>
      </div>
    </div>
  </div>
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
@import "./html.less";
</style>