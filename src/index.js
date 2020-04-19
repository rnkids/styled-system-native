import React, { createContext, useContext, memo, useState, } from 'react'
import * as ReactIs from "react-is";
import styled from 'styled-components'
import * as N from 'react-native'
import { transparentize } from 'polished'

const Box = memo(styled(N.View)(props => _css(props)))

const _css = p => {
    const _a = [
        "alignContent",
        "alignItems",
        "alignSelf",
        "aspectRatio",
        "backfaceVisibility",
        "backgroundColor",
        "borderBottomColor",
        "borderBottomLeftRadius",
        "borderBottomRightRadius",
        "borderBottomWidth",
        "borderColor",
        "borderLeftColor",
        "borderLeftWidth",
        "borderRadius",
        "borderRightColor",
        "borderRightWidth",
        "borderStyle",
        "borderTopColor",
        "borderTopLeftRadius",
        "borderTopRightRadius",
        "borderTopWidth",
        "borderWidth",
        "bottom",
        "color",
        "decomposedMatrix",
        "direction",
        "display",
        "elevation",
        "flex",
        "flexBasis",
        "flexDirection",
        "flexGrow",
        "flexShrink",
        "flexWrap",
        "fontFamily",
        "fontSize",
        "fontStyle",
        "fontVariant",
        "fontWeight",
        "height",
        "includeFontPadding",
        "justifyContent",
        "left",
        "letterSpacing",
        "lineHeight",
        "margin",
        "marginBottom",
        "marginHorizontal",
        "marginLeft",
        "marginRight",
        "marginTop",
        "marginVertical",
        "maxHeight",
        "maxWidth",
        "minHeight",
        "minWidth",
        "opacity",
        "overflow",
        "overlayColor",
        "padding",
        "paddingBottom",
        "paddingHorizontal",
        "paddingLeft",
        "paddingRight",
        "paddingTop",
        "paddingVertical",
        "position",
        "resizeMode",
        "right",
        "rotation",
        "scaleX",
        "scaleY",
        "shadowColor",
        "shadowOffset",
        "shadowOpacity",
        "shadowRadius",
        "textAlign",
        "textAlignVertical",
        "textDecorationColor",
        "textDecorationLine",
        "textDecorationStyle",
        "textShadowColor",
        "textShadowOffset",
        "textShadowRadius",
        "tintColor",
        "top",
        "transform",
        "transformMatrix",
        "translateX",
        "translateY",
        "width",
        "writingDirection",
        "zIndex",
        "border",
        "boxShadow",
        "flexFlow",
        "font",
        "textShadow",
        "textDecoration",
        "textDecorationLine",
        "transform",
        "bg",
        "size",
        "m", "mt", "mb", "ml", "mr", "mx", "my",
        "p", "pt", "pb", "pl", "pr", "px", "py",
        "backgroundImage",
        "backgroundSize",
        "backgroundPosition",
        "backgroundRepeat",
        "overflow",
        "transition"
    ]

    const _c = k => {
        switch (k) {
            case "bg": return "backgroundColor";
            case "m": return "margin";
            case "mt": return "marginTop";
            case "mr": return "marginRight";
            case "mb": return "marginBottom";
            case "ml": return "marginLeft";
            case "mx": return "marginX";
            case "my": return "marginY";
            case "p": return "padding";
            case "pt": return "paddingTop";
            case "pr": return "paddingRight";
            case "pb": return "paddingBottom";
            case "pl": return "paddingLeft";
            case "px": return "paddingX";
            case "py": return "paddingY";
            default: return k;
        }
    }

    return Object.keys(p)
        .filter(key => _a.includes(key))
        .filter(key => p[key] !== true)
        .filter(key => p[key] !== null)
        .reduce((obj, key) => {
            if (key === "size") {
                obj["width"] = p[key]
                obj["height"] = p[key]
            } else {
                obj[_c(key)] = p[key];
            }
            return obj;
        }, {});
}

// const View = props => <Box as={N.View} {...props} />;
const View = ({ src, ...props }) => src ? <Box as={N.ImageBackground} source={src} {...props} style={{ width: '100%', height: '100%', ..._css(props) }} /> : <Box as={N.View} {...props} />
// const View = ({ src, ...props }) => src ? <Box as={N.ImageBackground} source={src} {...props} /> : <Box as={N.View} {...props} />

const Text = props => <Box as={N.Text} {...props} />;
// const Image = props => <Box as={N.Image} {...props} />
const Image = ({ src, ...props }) => src ? <Box as={N.Image} source={{ uri: src }} {...props} /> : <Box as={N.Image} {...props} />

const TextInput = props => <Box as={N.TextInput} {...props} />
const ScrollView = props => <Box as={N.ScrollView} {...props} />
const Picker = props => <Box as={N.Picker} {...props} />
// const Slider = props => <Box as={N.Slider} {...props} />
const Switch = props => <Box as={N.Switch} {...props} />
const FlatList = props => <Box as={N.FlatList} {...props} keyExtractor={(item, index) => index.toString()}/>
const SectionList = props => <Box as={N.SectionList} {...props} />
const ActivityIndicator = props => <Box as={N.ActivityIndicator} {...props} />
const Alert = props => <Box as={N.Alert} {...props} />
const Modal = props => <Box as={N.Modal} {...props} />
const StatusBar = props => <Box as={N.StatusBar} {...props} />

const ImageBackground = props => <Box as={N.ImageBackground} {...props} style={{ width: '100%', height: '100%', ..._css(props) }} />
const TouchableOpacity = props => <Box as={N.TouchableOpacity} {...props} />
const TouchableHighlight = props => <Box as={N.TouchableHighlight} {...props} />
const TouchableWithoutFeedback = props => <Box as={N.TouchableWithoutFeedback} {...props} />
const KeyboardAvoidingView = props => <Box as={N.KeyboardAvoidingView} {...props} />
const SafeAreaView = props => <Box as={N.SafeAreaView} {...props} />

const Button = ({ children, color = "darkmagenta", fontSize, fontFamily, fontWeight = "bold", lineHeight, letterSpacing, textAlign, fontStyle, textShadow, disabled, ...props }) => {
    return (
        <Box as={N.TouchableOpacity} flexDirection="row" justifyContent="center" alignItems="center" disabled={disabled} {...props} >
            {React.Children.map(children, child => ReactIs.isElement(child) ? child : <Text
                opacity={disabled ? 0.3 : 1}
                color={color}
                fontFamily={fontFamily}
                fontSize={fontSize}
                fontWeight={fontWeight}
                lineHeight={lineHeight}
                letterSpacing={letterSpacing}
                textAlign={textAlign}
                fontStyle={fontStyle}
                textShadow={textShadow} >{child}</Text>)}
        </Box>
    )
}

//Context 
const RCtx = createContext();

const Context = ({ children, value }) => <RCtx.Provider value={value}>{children}</RCtx.Provider>

const useValue = () => useContext(RCtx)
//SearchBar

const SearchBar = memo(({
    onSearch,
    ref,
    height = 32,
    margin = 2,
    color = "black",
    borderRadius = 5,
    bg = "white",
    cancelColor = "blue",
    placeholder = "search",
    ...props }) => {
    const [value, setValue] = useState("")
    const [iconVisible, setIconVisible] = useState(false)
    return (
        <View
            height={height}
            {...props}
            flexDirection="row"
            alignItems="stretch"
        >
            <View
                flex={1}
                flexDirection="row"
                alignItems="center"
                justifyContent="space-between"
                borderRadius={borderRadius}
                bg={bg}
            >

                <Text color={color ? transparentize(0.5, color) : "grey"} fontSize={22} mb={4}> ⌕ </Text>
                <TextInput
                    ref={ref}
                    value={value}
                    onChangeText={text => {
                        setValue(text)
                        onSearch(text)
                    }}
                    onFocus={() => setIconVisible(true)}
                    onBlur={() => setIconVisible(false)}
                    multiline={false}
                    placeholder={placeholder}
                    placeholderTextColor={color ? transparentize(0.5, color) : "grey"}
                    backgroundColor="transparent"
                    flex={1}
                    color={color}
                ></TextInput>
                {iconVisible ? (<TouchableOpacity onPress={() => {
                    setValue("");
                    onSearch("")
                }
                }>
                    <Text color={color ? transparentize(0.5, color) : "grey"} fontSize={18}> ⊗ </Text>
                </TouchableOpacity>) : null}
            </View>
            {iconVisible ? (<Button
                onPress={() => {
                    setValue("")
                    onSearch("")
                    N.Keyboard.dismiss();
                    setIconVisible(false);
                }}
                color={cancelColor ? cancelColor : "blue"}
                justifyContent="center"
                fontSize={20}
                fontWeight="200"
                m={2}
            >cancel</Button>) : null}
        </View>
    )
})

export {
    useValue,
    Context,
    View,
    Text,
    Button,
    Image,
    TextInput,
    ScrollView,
    Picker,
    FlatList,
    SectionList,
    Switch,
    ActivityIndicator,
    Alert,
    Modal,
    StatusBar,
    ImageBackground,
    TouchableOpacity,
    TouchableHighlight,
    TouchableWithoutFeedback,
    KeyboardAvoidingView,
    SafeAreaView,
    SearchBar,
}