<template>
  <div id="app">
    <Flex debug>
      <Flex ps="row,gutter" debug>
        <img alt="logo" src="./assets/logo.svg" height="128"> [Header]
      </Flex>
      <Flex ps="col,gutter,grow" ts="row" debug>
        <Flex ps="12,col" ts="3">
          [Navigation]
        </Flex>
        <Flex ps="12,col" ts="9">
          [Main]
        </Flex>
      </Flex>
      <Flex pm="hidden">current breakpoint: phone small</Flex>
      <Flex pl="hidden">current breakpoint: phone medium</Flex>
      <Flex ts="hidden">current breakpoint: phone large</Flex>
      <Flex tw="hidden">current breakpoint: tablet small</Flex>
      <Flex ds="hidden">current breakpoint: tablet wide</Flex>
      <Flex dw="hidden">current breakpoint: desktop small</Flex>
      <Flex>current breakpoint: desktop wide</Flex>
      <Flex ps="col,hidden" pm="visible" ts="hidden" tw="visible" dw="hidden" debug>
        [hide on ps, ts and dw]
      </Flex>
      <Flex ps="col" ts="hidden" ds="hidden" debug>
        [show on ps, pm, pl and tw and dw]
      </Flex>
      <Flex ps="col,gutter" ts="gutter" ds="gutter" debug>
        [gutter on ps and ts and ds]
      </Flex>
      <Flex ps="col" ts="gutter" debug>
        [gutter on ts]
      </Flex>
    </Flex>
    <Guides />
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style lang="scss">
@import './styles/main';

html, body {
  background: #ddd;
  color: #111;
  height: 100%;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  height: 100%;
  > img {
    margin-bottom: 60px;
  }
}

section {
  border-radius: 5px;
  border: solid 1px #ddd;
  margin: 0 16px 10px 16px;
  display: flex;
  flex-direction: column;
  background: white;
  overflow: hidden;
  padding-bottom: 8px;
  h2 {
    background: #eee;
    border-bottom: solid 1px #ddd;
    padding: 8px;
    margin-bottom: 10px;
  }
}
</style>
