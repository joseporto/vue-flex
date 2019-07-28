## As a container
Container will either respect the `maxWidth` setting, or utilize all of the available horizontal space.

```html
<Flex />
```

```html
<Flex fluid />
```

## As a Row

Rows are flex containers, that have the `flex-direction` set to `row`. By default, a row will use all the available column space.

### Alignment

Add classes to align elements to the start or end of a row as well as the top, bottom, or center of a column.

#### Horizontal alignment

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

#### Vertical alignment

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

### Reversing

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

### Reordering

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

### Responsive

Responsive modifiers enable specifying different column sizes, offsets, alignment and distribution at xs, sm, md, lg & xl viewport widths.

```vue
<Flex>
  <Flex xs="row">
    <Flex xs="12,col,gutter" sm="3" md="2" lg="1" />
    <Flex xs="6,col,gutter" sm="6" md="8" lg="10" />
    <Flex xs="6,col,gutter" sm="3" md="2" lg="1" />
  </Flex>
  <Flex xs="row">
    <Flex xs="12,col,gutter" sm="3" md="2" lg="1" />
    <Flex xs="12,col,gutter" sm="9" md="10" lg="11" />
  </Flex>
  <Flex xs="row">
    <Flex xs="10,col,gutter" sm="6" md="8" lg="10" />
    <Flex xs="2,col,gutter" sm="6" md="4" lg="2" />
  </Flex>
</Flex>
```

### Fluid

Percent based widths allow fluid resizing of columns and rows.

```vue
<Flex>
  <Flex xs="row">
    <Flex xs="12,col,gutter" />
  </Flex>
  <Flex xs="row">
    <Flex xs="1,col,gutter" />
    <Flex xs="11,col,gutter" />
  </Flex>
  <Flex xs="row">
    <Flex xs="2,col,gutter" />
    <Flex xs="10,col,gutter" />
  </Flex>
  <Flex xs="row">
    <Flex xs="3,col,gutter" />
    <Flex xs="9,col,gutter" />
  </Flex>
  <Flex xs="row">
    <Flex xs="4,col,gutter" />
    <Flex xs="8,col,gutter" />
  </Flex>
  <Flex xs="row">
    <Flex xs="5,col,gutter" />
    <Flex xs="7,col,gutter" />
  </Flex>
  <Flex xs="row">
    <Flex xs="6,col,gutter" />
    <Flex xs="6,col,gutter" />
  </Flex>
</Flex>
```

### Shift

Shift a column by breakpoint with.

```vue
<Flex>
  <Flex xs="row">
    <Flex xs="1,11,col" />
  </Flex>
  <Flex xs="row">
    <Flex xs="2,10,col" />
  </Flex>
  <Flex xs="row">
    <Flex xs="3,9,col" />
  </Flex>
  <Flex xs="row">
    <Flex xs="4,8,col" />
  </Flex>
  <Flex xs="row">
    <Flex xs="5,7,col" />
  </Flex>
  <Flex xs="row">
    <Flex xs="6,6,col" />
  </Flex>
  <Flex xs="row">
    <Flex xs="7,5,col" />
  </Flex>
  <Flex xs="row">
    <Flex xs="8,4,col" />
  </Flex>
  <Flex xs="row">
    <Flex xs="9,3,col" />
  </Flex>
  <Flex xs="row">
    <Flex xs="10,2,col" />
  </Flex>
  <Flex xs="row">
    <Flex xs="11,1,col" />
  </Flex>
</Flex>
```

### Auto width

```vue
<Flex>
  <Flex xs="row">
    <Flex xs="col" />
    <Flex xs="col" />
  </Flex>
  <Flex xs="row">
    <Flex xs="col" />
    <Flex xs="col" />
    <Flex xs="col" />
  </Flex>
</Flex>
```

### Nested

```vue
<Flex>
  <Flex xs="row">
    <Flex xs="7,col,gutter">
      <Flex>
        <Flex xs="row">
          <Flex xs="7,col,gutter">
            <Flex>
              <Flex xs="row">
                <Flex xs="4,col,gutter" />
                <Flex xs="8,col,gutter" />
              </Flex>
            </Flex>
          </Flex>
          <Flex xs="5,col,gutter">
            <Flex>
              <Flex xs="row">
                <Flex xs="true,col,gutter" />
              </Flex>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
    <Flex xs="5,col,gutter">
      <Flex>
        <Flex xs="row">
          <Flex xs="12,col,gutter">
            <Flex>
              <Flex xs="row">
                <Flex xs="6,col,gutter" />
                <Flex xs="6,col,gutter" />
              </Flex>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  </Flex>
</Flex>
```

### Hidden

```vue
<Flex>
  <Flex xs="row">
    <Flex xs="col" />
    <Flex xs="col,hidden" sm="col" />
  </Flex>
</Flex>
```
