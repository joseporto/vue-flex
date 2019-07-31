<template>
  <div id="app">
    <Flex debug>
      <Flex xs="row,gutter" debug>
        <img alt="logo" src="./assets/logo.svg" height="128"> [Header]
      </Flex>
      <Flex xs="col,gutter" md="row" debug>
        <Flex xs="12,col" md="3">
          [Navigation]
        </Flex>
        <Flex xs="12,col" md="9">
          [Main]
        </Flex>
      </Flex>
      <Flex sm="hidden">current breakpoint: xs</Flex>
      <Flex md="hidden">current breakpoint: sm</Flex>
      <Flex lg="hidden">current breakpoint: md</Flex>
      <Flex xl="hidden">current breakpoint: lg</Flex>
      <Flex >current breakpoint: xl</Flex>
      <Flex xs="col,hidden" md="hidden" xl="hidden" debug>
        [show on sm and lg]
      </Flex>
      <Flex xs="col" sm="hidden" lg="hidden" debug>
        [show on xs and md and xl]
      </Flex>
      <Flex xs="col,gutter" sm="gutter" lg="gutter" debug>
        [gutter on xs and sm and lg]
      </Flex>
      <Flex xs="col" md="gutter" debug>
        [gutter on md]
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
  margin-top: 60px;
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
