Take a look at how simple you can define a layout all the way from `ps` (mobile) to `ts` (aproximately a portrait tablet). Notice the elements that get hidden when in mobile version.

> **NOTE:** the style depicted here, was inspired by this [amazing guide](https://css-tricks.com/snippets/css/a-guide-to-flexbox/) that I have used many years ago, when I first came in contact with flexbox. It is **not part of the package** you install in your project.

```vue
<Flex>
  <Flex ps="row">
    [header]
  </Flex>
  <Flex ps="col" ts="row,grow*">
    <Flex ps="12,row" ts="3,col">
      [sidebar]
    </Flex>
    <Flex ps="12,row" ts="9,col">
      <p>
      Oh, great scott. You get the cable, I'll throw the rope down to you. Well maybe you are and you just don't know it yet. Go. Go. You're gonna break his arm. Biff, leave him alone. Let him go. Let him go. Okay, but I don't know what to say.<br />Well, uh, listen, uh, I really- Oh, what I meant to day was- Hey you, get your damn hands off, oh. What's going on? Where have you been all week? I will.<br /><br />Mayor Goldie Wilson, I like the sound of that. Uh, well, I gotta go. Marty, that's completely out of the question, you must not leave this house. you must not see anybody or talk to anybody. Anything you do could have serious reprocautions on future events. Do you understand? And where's my reports? Alright, I'm ready.</p>
    </Flex>
  </Flex>
  <Flex ps="col">
    <Flex ps="12,row" ds="12">
      <Flex ps="12,col," ts="3,1" ds="4,0">Links 1</Flex>
      <Flex ps="12,col," ts="4">Links 2</Flex>
      <Flex ps="12,col," ts="4,row,right">Form</Flex>
    </Flex>
    <Flex ps="row,grow*,">
      <Flex ps="12,col" ts="5,row,center">[placeholder]</Flex>
      <Flex ps="hidden" ts="2,row,center">Logo</Flex>
      <Flex ps="12,col" ts="5,right,row">[placeholder]</Flex>
    </Flex>
  </Flex>
</Flex>
```
