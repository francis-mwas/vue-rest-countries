<template>
  <footer>
    <p>{{ copyright }}</p>
  </footer>
</template>

<script>
export default {
  data() {
    return {
      copyright: "All right reserved. 2021 countries search app"
    };
  }
};
</script>

<style scoped>
footer {
  background: #000;
  padding: 15px;
}
footer p {
  text-align: center;
  font-size: 1.1rem;
  color: whitesmoke;
}
</style>
