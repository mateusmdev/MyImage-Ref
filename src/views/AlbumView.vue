<template>
  <div class="layout-area">

    <div class="header-area">
      <h1>Album</h1>
    </div>
  </div>
</template>

<style scoped lang="scss">
.layout-area {
  height: 100%;
  min-height: 0;
  display: flex;
  flex-direction: column;
  overflow: hidden;

  .header-area {
    margin: 3rem 0 1.2rem;
    display: flex;
    justify-content: space-between;
    
    .actions {
      margin-top: -0.557rem;
      height: fit-content;
    }

    h1 {
      font-size: 1.4rem;
      flex-shrink: 0;
    }
  }
}
</style>