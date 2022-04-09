import React from "react"
import { View, Text, SafeAreaView, Image } from "react-native"
import { MainContainer, MenuContainer } from "../../shared/components/containers/containers"
import { styles } from "../../shared/styles/styles"
import { NAVIGATION_ROUTES } from "../../shared/components/menu/menu"
import Button from "../../shared/components/button/button"
import { BUTTON_COLORS } from "../../shared/components/button/button"
import { TEXT_THEMES } from "../../shared/components/button/button"
import { styles as pageStyles } from "./styles"
import { Navigation } from "../../shared/types"

interface Props {
    navigation: Navigation
    route: any
}

export default function ThankYouScreen({ route, navigation }: Props): JSX.Element {
    const onPress = () => navigation.navigate(NAVIGATION_ROUTES.TRENDING_PROPOSALS)
    const { type } = route.params
    const raphael = require("../../../assets/raphael.png")
    return (
        <SafeAreaView style={[styles.centered_container, { width: "100%" }]}>
            <MainContainer>
                <Text style={pageStyles.title}>Thank You!</Text>

                <Text style={pageStyles.subtitle}>Your {type} has been registered</Text>
                <Image style={pageStyles.image} source={raphael} />
            </MainContainer>
            <MenuContainer>
                <View style={pageStyles.button_container}>
                    <Button
                        onPress={onPress}
                        color={BUTTON_COLORS.BLUE}
                        textTheme={TEXT_THEMES.ALL_CAPS}
                        width={280}
                        text="BACK"
                    />
                </View>
            </MenuContainer>
        </SafeAreaView>
    )
}