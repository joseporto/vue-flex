Layouts are defined starting with the `xs` attribute, and optionally filling in the remaining breakpoint attributes.

Each breakpoint attribute, (`xs`, `sm`, `md`, `lg` `xl`) can have the following parameters:

| attribute | position | description                                            | type    | example |
|-----------|----------|--------------------------------------------------------|---------|---------|
| columns   | 0        | defines how many columns the `Flex` element should use | integer | 12      |
| shift     | 1        | defines the amount of columns shifted to the right     | integer | 2       |
| row       | any      | children will be set inline                            | string  | row     |
| col       | any      | children will be stacked vertically                    | string  | col     |
| gutter    | any      | a gutter will be applied on `row` or `col`             | string  | gutter  |
| alignment | any      | defines the vertical alignment                         | string  | center  |
| justify   | any      | defines the horizontal alignment                       | string  | middle  |
| hidden    | any      | prevents content from being displayed                  | string  | hidden  |
| nowrap    | any      | prevents content wrapping                              | string  | nowrap  |
| grow      | any      | force element to use all available space               | string  | grow    |
| first     | any      | force element to be rendered first                     | string  | first   |
| last      | any      | force element to be rendered first                     | string  | last    |


> NOTE: none of the values is mandatory. If no columns are defined, the element will behave as a `Responsive` element.

## As a container

Container will either respect the `maxWidth` setting, or utilize all of the available horizontal space.

```vue
<Flex />
```

```vue
<Flex fluid />
```

## Responsive

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

## Auto width

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
