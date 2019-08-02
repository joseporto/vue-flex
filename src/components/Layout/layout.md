Layouts are defined starting with the `ps` attribute, and optionally filling in the remaining breakpoint attributes.

Each breakpoint attribute, (`ps`, `pm`, `pl`, `ts`, `tw`, `ds`, `dw`) can have the following parameters:

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
| visible   | any      | forces content to be displayed                         | string  | visible |
| nowrap    | any      | prevents content wrapping                              | string  | nowrap  |
| grow      | any      | force element to use all available space               | string  | grow    |
| shrink    | any      | force element to not use all available space           | string  | shrink  |
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

Responsive modifiers enable specifying different column sizes, offsets, alignment and distribution at `ps`, `pm`, `pl`, `ts`, `tw`, `ds` and `dw` viewport widths.

```vue
<Flex>
  <Flex ps="row">
    <Flex ps="12,col,gutter" ts="3" ds="2" dw="1" />
    <Flex ps="6,col,gutter" ts="6" ds="8" dw="10" />
    <Flex ps="6,col,gutter" ts="3" ds="2" dw="1" />
  </Flex>
  <Flex ps="row">
    <Flex ps="12,col,gutter" ts="3" ds="2" dw="1" />
    <Flex ps="12,col,gutter" ts="9" ds="10" dw="11" />
  </Flex>
  <Flex ps="row">
    <Flex ps="10,col,gutter" ts="6" ds="8" dw="10" />
    <Flex ps="2,col,gutter" ts="6" ds="4" dw="2" />
  </Flex>
</Flex>
```

### Fluid

Percent based widths allow fluid resizing of columns and rows.

```vue
<Flex>
  <Flex ps="row">
    <Flex ps="12,col,gutter" />
  </Flex>
  <Flex ps="row">
    <Flex ps="1,col,gutter" />
    <Flex ps="11,col,gutter" />
  </Flex>
  <Flex ps="row">
    <Flex ps="2,col,gutter" />
    <Flex ps="10,col,gutter" />
  </Flex>
  <Flex ps="row">
    <Flex ps="3,col,gutter" />
    <Flex ps="9,col,gutter" />
  </Flex>
  <Flex ps="row">
    <Flex ps="4,col,gutter" />
    <Flex ps="8,col,gutter" />
  </Flex>
  <Flex ps="row">
    <Flex ps="5,col,gutter" />
    <Flex ps="7,col,gutter" />
  </Flex>
  <Flex ps="row">
    <Flex ps="6,col,gutter" />
    <Flex ps="6,col,gutter" />
  </Flex>
</Flex>
```

### Shift

Shift a column by breakpoint with.

```vue
<Flex>
  <Flex ps="row">
    <Flex ps="1,11,col" />
  </Flex>
  <Flex ps="row">
    <Flex ps="2,10,col" />
  </Flex>
  <Flex ps="row">
    <Flex ps="3,9,col" />
  </Flex>
  <Flex ps="row">
    <Flex ps="4,8,col" />
  </Flex>
  <Flex ps="row">
    <Flex ps="5,7,col" />
  </Flex>
  <Flex ps="row">
    <Flex ps="6,6,col" />
  </Flex>
  <Flex ps="row">
    <Flex ps="7,5,col" />
  </Flex>
  <Flex ps="row">
    <Flex ps="8,4,col" />
  </Flex>
  <Flex ps="row">
    <Flex ps="9,3,col" />
  </Flex>
  <Flex ps="row">
    <Flex ps="10,2,col" />
  </Flex>
  <Flex ps="row">
    <Flex ps="11,1,col" />
  </Flex>
</Flex>
```

## Auto width

```vue
<Flex>
  <Flex ps="row">
    <Flex ps="col,grow" />
    <Flex ps="col,grow" />
  </Flex>
  <Flex ps="row">
    <Flex ps="col,grow" />
    <Flex ps="col,grow" />
    <Flex ps="col,grow" />
  </Flex>
</Flex>
```
