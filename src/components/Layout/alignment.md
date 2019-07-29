Add classes to align elements to the start or end of a row as well as the top, bottom, or center of a column.

## Horizontal alignment

- Align `left`

```vue
<Flex>
  <Flex xs="row,left">
    <Flex xs="6,0,col">
    </Flex>
  </Flex>
</Flex>
```

- Align `center`

```vue
<Flex>
  <Flex xs="row,center">
    <Flex xs="6,0,col">
    </Flex>
  </Flex>
</Flex>
```

- Align `right`

```vue
<Flex>
  <Flex xs="row,right">
    <Flex xs="6,0,col">
    </Flex>
  </Flex>
</Flex>
```

- Align `around`

```vue
<Flex>
  <Flex xs="row,around">
    <Flex xs="2,col" />
    <Flex xs="2,col" />
    <Flex xs="2,col" />
  </Flex>
</Flex>
```

- Align `between`

```vue
<Flex>
  <Flex xs="row,between">
    <Flex xs="2,col" />
    <Flex xs="2,col" />
    <Flex xs="2,col" />
  </Flex>
</Flex>
```

- Align `evenly`

```vue
<Flex>
  <Flex xs="row,evenly">
    <Flex xs="2,col" />
    <Flex xs="2,col" />
    <Flex xs="2,col" />
  </Flex>
</Flex>
```

## Vertical alignment

- Align `top`

```vue
<Flex>
  <Flex xs="row,top">
    <Flex xs="6,col,gutter" class="large" />
    <Flex xs="6,col,gutter" />
  </Flex>
</Flex>
```

- Align `middle`

```vue
<Flex>
  <Flex xs="row,middle">
    <Flex xs="6,col,gutter" class="large" />
    <Flex xs="6,col,gutter" />
  </Flex>
</Flex>
```

- Align `bottom`

```vue
<Flex>
  <Flex xs="row,bottom">
    <Flex xs="6,col,gutter" class="large" />
    <Flex xs="6,col,gutter" />
  </Flex>
</Flex>
```
