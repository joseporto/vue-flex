## Nesting

```vue
<Flex>
  <Flex ps="row">
    <Flex ps="7,col,gutter">
      <Flex>
        <Flex ps="row">
          <Flex ps="7,col,gutter">
            <Flex>
              <Flex ps="row">
                <Flex ps="4,col,gutter" />
                <Flex ps="8,col,gutter" />
              </Flex>
            </Flex>
          </Flex>
          <Flex ps="5,col,gutter">
            <Flex>
              <Flex ps="row">
                <Flex ps="col,grow,gutter" />
              </Flex>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
    <Flex ps="5,col,gutter">
      <Flex>
        <Flex ps="row">
          <Flex ps="12,col,gutter">
            <Flex>
              <Flex ps="row">
                <Flex ps="6,col,gutter" />
                <Flex ps="6,col,gutter" />
              </Flex>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  </Flex>
</Flex>
```

## Hidden

```vue
<Flex>
  <Flex ps="row">
    <Flex ps="col,grow" />
    <Flex ps="col,grow,hidden" ts="col,visible" />
  </Flex>
</Flex>
```

## default breakpoints geometry

![logo](https://gitlab.com/porto/vue-flex/raw/master/src/assets/schematic.svg)
