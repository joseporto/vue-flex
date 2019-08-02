Add classes to align elements to the start or end of a row as well as the top, bottom, or center of a column.

## Horizontal alignment

- Align `left`

```vue
<Flex>
  <Flex ps="row,left">
    <Flex ps="6,0,col">
    </Flex>
  </Flex>
</Flex>
```

- Align `center`

```vue
<Flex>
  <Flex ps="row,center">
    <Flex ps="6,0,col">
    </Flex>
  </Flex>
</Flex>
```

- Align `right`

```vue
<Flex>
  <Flex ps="row,right">
    <Flex ps="6,0,col">
    </Flex>
  </Flex>
</Flex>
```

- Align `around`

```vue
<Flex>
  <Flex ps="row,around">
    <Flex ps="2,col" />
    <Flex ps="2,col" />
    <Flex ps="2,col" />
  </Flex>
</Flex>
```

- Align `between`

```vue
<Flex>
  <Flex ps="row,between">
    <Flex ps="2,col" />
    <Flex ps="2,col" />
    <Flex ps="2,col" />
  </Flex>
</Flex>
```

- Align `evenly`

```vue
<Flex>
  <Flex ps="row,evenly">
    <Flex ps="2,col" />
    <Flex ps="2,col" />
    <Flex ps="2,col" />
  </Flex>
</Flex>
```

## Vertical alignment

- Align `top`

```vue
<Flex>
  <Flex ps="row,top">
    <Flex ps="6,col,gutter" class="large" />
    <Flex ps="6,col,gutter" />
  </Flex>
</Flex>
```

- Align `middle`

```vue
<Flex>
  <Flex ps="row,middle">
    <Flex ps="6,col,gutter" class="large" />
    <Flex ps="6,col,gutter" />
  </Flex>
</Flex>
```

- Align `bottom`

```vue
<Flex>
  <Flex ps="row,bottom">
    <Flex ps="6,col,gutter" class="large" />
    <Flex ps="6,col,gutter" />
  </Flex>
</Flex>
```
