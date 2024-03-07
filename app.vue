<script setup>
const { playerBalance } = useAccount();
const router = useRouter();
</script>

<template>
  <div class="panel-wrapper">
    <div class="panel">
      <div class="navbar">
        <NuxtLink to="/" class="title">Casino Simulator</NuxtLink>
        <div class="stats">
          <BootstrapIcon name="cash-coin" style="margin-right: 10px" />
          <p>${{ playerBalance }}</p>
          <NuxtLink to="bank" class="bank-link">Bank</NuxtLink>
        </div>
      </div>
      <div class="content">
        <NuxtPage />
      </div>
    </div>
  </div>
</template>

<style scoped>
.panel-wrapper {
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
}
.panel {
  background: radial-gradient(at top right, #252e3e, #161d2e);
  box-shadow: 1px 1px 20px 10px #121722;
  border-radius: 2px;
  height: 80vh;
  width: 80vw;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
}
.navbar {
  height: 64px;
  border-bottom: solid 2px #19202d;
  display: flex;
  align-items: center;
  margin: 0px 20px;
  justify-content: space-between;
}
.content {
  flex-grow: 1;
}
.title {
  all: unset;
  font-size: 30px;
  color: white;
}
.bank-link {
  all: unset;
  color: white;
  margin-left: 8px;
}
.stats {
  display: flex;
  align-items: center;
  font-size: 20px;
}
</style>
