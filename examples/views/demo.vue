<template>
  <div>
    <Demo>Tk-UI</Demo>
    <ul>
      <li>
        <router-link to="/banner">Banner</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {};
</script>

<style>
.footer {
  padding: 0 8px;
  font-size: 12px;
  text-align: left;
}

.level {
  color: #9199a1;
  margin-bottom: 8px;
}

.price {
  color: #f01414;
}

.footer-spring {
  display: flex;
  justify-content: space-between;
  padding: 0 8px;
  font-size: 12px;
}
ul {
  margin: 30px;
}
li {
  height: 100px;
  line-height: 100px;
  text-align: center;
  border: 1px solid #ccc;
  background: #ffeee3;
  display: flex;
  justify-content: center;
  border-radius: 10px;
}
a {
  font-size: 36px;
  color: #666;
}
</style>
