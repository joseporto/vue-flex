## As a `row`

Rows are flex containers, that have the `flex-direction` set to `row`. By default, a row will use all the available column space.

## As a `col`

Col (columns) are flex containers, that have the `flex-direction` set to `col`.

## Reversing

`reverse`

```vue
<Flex>
  <Flex xs="row,reverse">
    <Flex xs="2,col,gutter,middle">
      1
    </Flex>
    <Flex xs="2,col,gutter,middle">
      2
    </Flex>
    <Flex xs="2,col,gutter,middle">
      3
    </Flex>
    <Flex xs="2,col,gutter,middle">
      4
    </Flex>
    <Flex xs="2,col,gutter,middle">
      5
    </Flex>
    <Flex xs="2,col,gutter,middle">
      6
    </Flex>
  </Flex>
</Flex>
```

## Reordering

- first

```vue
<Flex>
  <Flex xs="row">
    <Flex xs="2,col,middle,gutter">
      1
    </Flex>
    <Flex xs="2,col,middle,gutter">
      2
    </Flex>
    <Flex xs="2,col,middle,gutter">
      3
    </Flex>
    <Flex xs="2,col,middle,gutter">
      4
    </Flex>
    <Flex xs="2,col,middle,gutter">
      5
    </Flex>
    <Flex xs="2,col,middle,gutter,first" class="highlighted">
      6
    </Flex>
  </Flex>
</Flex>
```

- last

```vue
<Flex>
  <Flex xs="row">
    <Flex xs="2,col,middle,gutter,last" class="highlighted">
      1
    </Flex>
    <Flex xs="2,col,middle,gutter">
      2
    </Flex>
    <Flex xs="2,col,middle,gutter">
      3
    </Flex>
    <Flex xs="2,col,middle,gutter">
      4
    </Flex>
    <Flex xs="2,col,middle,gutter">
      5
    </Flex>
    <Flex xs="2,col,middle,gutter">
      6
    </Flex>
  </Flex>
</Flex>
```
