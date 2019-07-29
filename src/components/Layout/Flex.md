Take a look at how simple you can define a layout all the way from `xs` (mobile) to `sm` (aproximately a portrait tablet). Notice the elements that get hidden when in mobile version.

> **NOTE:** the style depicted here, was inspired by this [amazing guide](https://css-tricks.com/snippets/css/a-guide-to-flexbox/) that I have used many years ago, when I first came in contact with flexbox. It is **not part of the package** you install in your project.

```vue
<Flex>
  <Flex xs="row">
    [header]
  </Flex>
  <Flex xs="col" sm="row">
    <Flex xs="row" sm="3,col">
      [sidebar]
    </Flex>
    <Flex xs="row" sm="9,col">
      <p>
      Oh, great scott. You get the cable, I'll throw the rope down to you. Well maybe you are and you just don't know it yet. Go. Go. You're gonna break his arm. Biff, leave him alone. Let him go. Let him go. Okay, but I don't know what to say.<br />Well, uh, listen, uh, I really- Oh, what I meant to day was- Hey you, get your damn hands off, oh. What's going on? Where have you been all week? I will.<br /><br />Mayor Goldie Wilson, I like the sound of that. Uh, well, I gotta go. Marty, that's completely out of the question, you must not leave this house. you must not see anybody or talk to anybody. Anything you do could have serious reprocautions on future events. Do you understand? And where's my reports? Alright, I'm ready.</p>
    </Flex>
  </Flex>
  <Flex xs="row">
    <Flex xs="row">
      <Flex xs="12,col" sm="4">Links 1</Flex>
      <Flex xs="12,col" sm="4">Links 2</Flex>
      <Flex xs="12,col" sm="4,row,right">Form</Flex>
    </Flex>
    <Flex xs="row">
      <Flex xs="12,col" sm="5,row,center">[placeholder]</Flex>
      <Flex xs="hidden" sm="2,row,center">Logo</Flex>
      <Flex xs="12,col" sm="5,right,row">[placeholder]</Flex>
    </Flex>
  </Flex>
</Flex>
```
