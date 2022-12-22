const ItemDetails = ({ route, navigation }) => {
    const { post } = route.params
    const safeInsets = useSafeAreaInsets()
    const opacity = useRef(new Animated.Value(0)).current
    

    useEffect(() => {
        Animated.timing(opacity, {
            toValue:1,
            duration: 250, 
            delay: 500,
            useNativeDriver: true,
        }).start()
    },[])

    return (
        <View>
            <Animated.View
            style={{
                opacity,
                positon: 'absolute',
                top: safeInsets.top,
                left: safeInsets.left,
                right: safeInsets.right,
                zIndex: 1, 
                flexDirection: 'row',
                justifyContent: 'space-between'
            }}
            >
                <Icon name='x' onPress={() => navigation.goBack()} />
                <Icon name='like'/>
            </Animated.View>

            <SharedElement id={post.key}>
                <Image source={post.imageURL}/>
            </SharedElement>

            <View >
                <Text >{post.name}</Text>
                <Text >{post.size}</Text>
                <Text >{post.ingredients}</Text>

            </View>
        </View>
    )
    
}
export default ItemDetails;