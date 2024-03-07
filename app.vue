<script setup>
const { playerBalance } = useAccount();
const router = useRouter();
</script>

<template>
  <div class="panel-wrapper">
    <div class="panel">
      <div class="navbar">
        <div class="title link">
          <img src="./public/dice-icon.png" />
          <NuxtLink to="/">Casino Simulator</NuxtLink>
        </div>
        <div class="links">
          <div class="player-balance">
            <BootstrapIcon name="cash-coin" style="margin-right: 10px" />
            <p>${{ playerBalance }}</p>
          </div>
          <div
            class="link"
            @click="router.push({ path: 'bank' })"
            style="margin-left: 30px"
          >
            <BootstrapIcon name="bank2" style="margin-right: 10px" />
            <p>Bank</p>
          </div>
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
  padding: 0px 20px;
  justify-content: space-between;
}
.content {
  flex-grow: 1;
}
.title {
  display: flex;
  align-items: center;
  img {
    width: 30px;
  }
  a {
    all: unset;
    margin-left: 10px;
    font-size: 25px;
  }
}
.link {
  transition: cubic-bezier(0.075, 0.82, 0.165, 1) 1s;
}
.link:hover {
  filter: brightness(50%);
}
.links {
  font-size: 20px;
  display: flex;
  * {
    display: flex;
    align-items: center;
  }
}
</style>
