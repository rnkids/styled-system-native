# Styled System Native

React Native components for in-line styling, build with styled-components. 
Inspired from: styled-system-html

## Usage
```
$ npm i -S styled-system-native styled-components react-is
```
Then styled it like [styled-system](https://styled-system.com/api)
```jsx
import React from 'react';
import { Text, View, Button } from "styled-system-native";

const App = () => {
    return (
        <View flex={1} justifyContent="center" alignItems="center">
            <Button
                color="red"
                bg="blue"
                justifyContent="center"
                alignItems="center"
                size={64}
                onPress={() => {console.log("rnkids.github.io")}}
            >
                Press
            </Button>
        </View>
    );
}
export default App;
```

Created by rnkids