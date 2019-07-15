## As a container
Container will either respect the `maxWidth` setting, or utilize all of the available horizontal space.

```html
<Flex />
```

```html
<Flex fluid />
```

## As a Row

Add classes to align elements to the start or end of a row as well as the top, bottom, or center of a column.

`align="start"` or `top`

```vue
<Flex row nogutter>
  <Flex col :xs="12" nogutter>
    <div class="box box-container">
      <Flex row justify="start" nogutter>
        <Flex col :xs="6" nogutter>
          <div class="box-nested"></div>
        </Flex>
      </Flex>
    </div>
  </Flex>
</Flex>
```

`align="center"` or `middle`

```vue
<Flex row nogutter>
  <Flex col :xs="12" nogutter>
    <div class="box box-container">
      <Flex row justify="center" nogutter>
        <Flex col :xs="6" nogutter>
          <div class="box-nested"></div>
        </Flex>
      </Flex>
    </div>
  </Flex>
</Flex>
```

`align="end"` or `bottom`

```vue
<Flex row nogutter>
  <Flex col :xs="12" nogutter>
    <div class="box box-container">
      <Flex row justify="end" nogutter>
        <Flex col :xs="6" nogutter>
          <div class="box-nested"></div>
        </Flex>
      </Flex>
    </div>
  </Flex>
</Flex>
```

### Vertical alignment

`justify="start"` or `left`

```vue
<Flex row align="start">
  <Flex col :xs="6">
    <div class="box-large"></div>
  </Flex>
  <Flex col :xs="6">
    <div class="box"></div>
  </Flex>
</Flex>
```

`justify="center"` or `center`

```vue
<Flex row align="center">
  <Flex col :xs="6">
    <div class="box-large"></div>
  </Flex>
  <Flex col :xs="6">
    <div class="box"></div>
  </Flex>
</Flex>
```

`justify="end"` or `right`

```vue
<Flex row align="end">
  <Flex col :xs="6">
    <div class="box-large"></div>
  </Flex>
  <Flex col :xs="6">
    <div class="box"></div>
  </Flex>
</Flex>
```

### Distribution

Add classes to distribute the contents of a row or column.

`justify="around"` or `around`

```vue
<Flex row>
  <Flex col :xs="12">
    <div class="box box-container">
      <Flex row justify="around">
        <Flex col :xs="2">
          <div class="box-nested"></div>
        </Flex>
        <Flex col :xs="2">
          <div class="box-nested"></div>
        </Flex>
        <Flex col :xs="2">
          <div class="box-nested"></div>
        </Flex>
      </Flex>
    </div>
  </Flex>
</Flex>
```

`justify="between"` or `between`

```vue
<Flex row>
  <Flex col :xs="12">
    <div class="box box-container">
      <Flex row justify="between">
        <Flex col :xs="2">
          <div class="box-nested"></div>
        </Flex>
        <Flex col :xs="2">
          <div class="box-nested"></div>
        </Flex>
        <Flex col :xs="2">
          <div class="box-nested"></div>
        </Flex>
      </Flex>
    </div>
  </Flex>
</Flex>
```

`justify="evenly"` or `evenly`

```vue
<Flex row>
  <Flex col :xs="12">
    <div class="box box-container">
      <Flex row justify="evenly">
        <Flex col :xs="2">
          <div class="box-nested"></div>
        </Flex>
        <Flex col :xs="2">
          <div class="box-nested"></div>
        </Flex>
        <Flex col :xs="2">
          <div class="box-nested"></div>
        </Flex>
      </Flex>
    </div>
  </Flex>
</Flex>
```

### Reversing

`reverse`

```vue
<Flex row>
  <Flex col :xs="12">
    <div class="box box-container">
      <Flex row reverse>
        <Flex col :xs="2">
          <div class="box-nested">1</div>
        </Flex>
        <Flex col :xs="2">
          <div class="box-nested">2</div>
        </Flex>
        <Flex col :xs="2">
          <div class="box-nested">3</div>
        </Flex>
        <Flex col :xs="2">
          <div class="box-nested">4</div>
        </Flex>
        <Flex col :xs="2">
          <div class="box-nested">5</div>
        </Flex>
        <Flex col :xs="2">
          <div class="box-nested">6</div>
        </Flex>
      </Flex>
    </div>
  </Flex>
</Flex>
```

## As a column

### Responsive

Responsive modifiers enable specifying different column sizes, offsets, alignment and distribution at xs, sm, md, lg & xl viewport widths.

```vue
<Flex nogutter>
  <Flex row nogutter>
    <Flex col :xs="12" :sm="3" :md="2" :lg="1">
      <div class="box-row"></div>
    </Flex>
    <Flex col :xs="6" :sm="6" :md="8" :lg="10">
      <div class="box-row"></div>
    </Flex>
    <Flex col :xs="6" :sm="3" :md="2" :lg="1">
      <div class="box-row"></div>
    </Flex>
  </Flex>
  <Flex row nogutter>
    <Flex col :xs="12" :sm="3" :md="2" :lg="1">
      <div class="box-row"></div>
    </Flex>
    <Flex col :xs="12" :sm="9" :md="10" :lg="11">
      <div class="box-row"></div>
    </Flex>
  </Flex>
  <Flex row nogutter>
    <Flex col :xs="10" :sm="6" :md="8" :lg="10">
      <div class="box-row"></div>
    </Flex>
    <Flex col :xs="2" :sm="6" :md="4" :lg="2">
      <div class="box-row"></div>
    </Flex>
  </Flex>
</Flex>
```

### Fluid

Percent based widths allow fluid resizing of columns and rows.

```vue
<Flex nogutter>
  <Flex row nogutter>
    <Flex col :xs="12">
      <div class="box-row"></div>
    </Flex>
  </Flex>
  <Flex row nogutter>
    <Flex col :xs="1">
      <div class="box-row"></div>
    </Flex>
    <Flex col :xs="11">
      <div class="box-row"></div>
    </Flex>
  </Flex>
  <Flex row nogutter>
    <Flex col :xs="2">
      <div class="box-row"></div>
    </Flex>
    <Flex col :xs="10">
      <div class="box-row"></div>
    </Flex>
  </Flex>
  <Flex row nogutter>
    <Flex col :xs="3">
      <div class="box-row"></div>
    </Flex>
    <Flex col :xs="9">
      <div class="box-row"></div>
    </Flex>
  </Flex>
  <Flex row nogutter>
    <Flex col :xs="4">
      <div class="box-row"></div>
    </Flex>
    <Flex col :xs="8">
      <div class="box-row"></div>
    </Flex>
  </Flex>
  <Flex row nogutter>
    <Flex col :xs="5">
      <div class="box-row"></div>
    </Flex>
    <Flex col :xs="7">
      <div class="box-row"></div>
    </Flex>
  </Flex>
  <Flex row nogutter>
    <Flex col :xs="6">
      <div class="box-row"></div>
    </Flex>
    <Flex col :xs="6">
      <div class="box-row"></div>
    </Flex>
  </Flex>
</Flex>
```

### Shift

Shift a column by breakpoint with `xsshift`, `smshift`, `mdshift`, `lgshift` and `xlshift`.

```vue
<Flex nogutter>
  <Flex row nogutter>
    <Flex col :xs="[1, 11]">
      <div class="box-row"></div>
    </Flex>
  </Flex>
  <Flex row nogutter>
    <Flex col :xs="[2, 10]">
      <div class="box-row"></div>
    </Flex>
  </Flex>
  <Flex row nogutter>
    <Flex col :xs="[3, 9]">
      <div class="box-row"></div>
    </Flex>
  </Flex>
  <Flex row nogutter>
    <Flex col :xs="[4, 8]">
      <div class="box-row"></div>
    </Flex>
  </Flex>
  <Flex row nogutter>
    <Flex col :xs="[5, 7]">
      <div class="box-row"></div>
    </Flex>
  </Flex>
  <Flex row nogutter>
    <Flex col :xs="[6, 6]">
      <div class="box-row"></div>
    </Flex>
  </Flex>
  <Flex row nogutter>
    <Flex col :xs="[7, 5]">
      <div class="box-row"></div>
    </Flex>
  </Flex>
  <Flex row nogutter>
    <Flex col :xs="[8, 4]">
      <div class="box-row"></div>
    </Flex>
  </Flex>
  <Flex row nogutter>
    <Flex col :xs="[9, 3]">
      <div class="box-row"></div>
    </Flex>
  </Flex>
  <Flex row nogutter>
    <Flex col :xs="[10, 2]">
      <div class="box-row"></div>
    </Flex>
  </Flex>
  <Flex row nogutter>
    <Flex col :xs="[11, 1]">
      <div class="box-row"></div>
    </Flex>
  </Flex>
</Flex>
```

### Auto width

```vue
<Flex nogutter>
  <Flex row nogutter>
    <Flex col>
      <div class="box-row"></div>
    </Flex>
    <Flex col>
      <div class="box-row"></div>
    </Flex>
  </Flex>
  <Flex row nogutter>
    <Flex col>
      <div class="box-row"></div>
    </Flex>
    <Flex col>
      <div class="box-row"></div>
    </Flex>
    <Flex col>
      <div class="box-row"></div>
    </Flex>
  </Flex>
</Flex>
```

### Stack

```vue
<Flex nogutter>
  <Flex col nogutter>
    <Flex row nogutter justify="end">
      <div class="box-row" style="width: 100px;"></div>
      <div class="box-row" style="width: 100px;"></div>
    </Flex>
  </Flex>
  <Flex col stack nogutter>
    <Flex row justify="end" nogutter>
      <div class="box-row" style="width: 100px;"></div>
      <div class="box-row" style="width: 100px;"></div>
    </Flex>
  </Flex>
</Flex>
```

### Nested Grids

Nest grids inside grids inside grids.

```vue
<Flex row>
  <Flex col :xs="7">
    <div class="box box-container">
      <Flex row>
        <Flex col :xs="9">
          <div class="box-first box-container">
            <Flex row>
              <Flex col :xs="4">
                <div class="box-first"></div>
              </Flex>
              <Flex col :xs="8">
                <div class="box-first"></div>
              </Flex>
            </Flex>
          </div>
        </Flex>
        <Flex col :xs="3">
          <div class="box-first box-container">
            <Flex row>
              <Flex col :xs="true">
                <div class="box-first"></div>
              </Flex>
            </Flex>
          </div>
        </Flex>
      </Flex>
    </div>
  </Flex>
  <Flex col :xs="5">
    <div class="box box-container">
      <Flex row>
        <Flex col :xs="12">
          <div class="box-first box-container">
            <Flex row>
              <Flex col :xs="6">
                <div class="box-first"></div>
              </Flex>
              <Flex col :xs="6">
                <div class="box-first"></div>
              </Flex>
            </Flex>
          </div>
        </Flex>
      </Flex>
    </div>
  </Flex>
</Flex>
```

### Reordering

Add classes to reorder columns.

`first`

```vue
<Flex row>
  <Flex col :xs="12">
    <div class="box box-container">
      <Flex row>
        <Flex col :xs="2">
          <div class="box-first">1</div>
        </Flex>
        <Flex col :xs="2">
          <div class="box-first">2</div>
        </Flex>
        <Flex col :xs="2">
          <div class="box-first">3</div>
        </Flex>
        <Flex col :xs="2">
          <div class="box-first">4</div>
        </Flex>
        <Flex col :xs="2">
          <div class="box-first">5</div>
        </Flex>
        <Flex col :xs="2" first>
          <div class="box-highlighted">6</div>
        </Flex>
      </Flex>
    </div>
  </Flex>
</Flex>
```

`last`

```vue
<Flex row>
  <Flex col :xs="12">
    <div class="box box-container">
      <Flex row>
        <Flex col :xs="2" last>
          <div class="box-highlighted">1</div>
        </Flex>
        <Flex col :xs="2">
          <div class="box-first">2</div>
        </Flex>
        <Flex col :xs="2">
          <div class="box-first">3</div>
        </Flex>
        <Flex col :xs="2">
          <div class="box-first">4</div>
        </Flex>
        <Flex col :xs="2">
          <div class="box-first">5</div>
        </Flex>
        <Flex col :xs="2">
          <div class="box-first">6</div>
        </Flex>
      </Flex>
    </div>
  </Flex>
</Flex>
```
