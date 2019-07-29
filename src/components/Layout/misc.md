## Nesting

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

## Hidden

```vue
<Flex>
  <Flex xs="row">
    <Flex xs="col" />
    <Flex xs="col,hidden" sm="col" />
  </Flex>
</Flex>
```
