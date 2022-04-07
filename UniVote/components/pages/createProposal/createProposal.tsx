import React, { useState } from "react"
import { View, Text, SafeAreaView, Image, TouchableOpacity } from "react-native"
import { styles } from "../../shared/styles/styles"
import BlueHeader from "../../shared/components/blueHeader/blueHeader"
import { loginItem } from "../../shared/types"
import { isString, validateInputs } from "../../shared/components/inputComponent/validationFunctions"
import { renderForm } from "../../shared/components/inputComponent/renderForm"
import Menu, { NAVIGATION_ROUTES } from "../../shared/components/menu/menu"
import { styles as formStyles } from "../signUp/styles"
import { styles as addProposalStyles } from "./styles"
import * as ImagePicker from "expo-image-picker"
import { MaterialIcons } from "@expo/vector-icons"
import { length_factor } from "../../shared/styles/styles"
import Button from "../../shared/components/button/button"
import { BUTTON_COLORS } from "../../shared/components/button/button"
import DropDownButton from "../../shared/components/dropdown/renderDropDown"
import { DropDown } from "../../shared/types"
import { MenuContainer, MainScrollContainer } from "../../shared/components/containers/containers"
import { useDispatch, useSelector } from "react-redux"
import { RootState } from "../../../reducers"
import {
    setNewProposalNameAction,
    setNewProposalDetailsAction,
    setNewProposalImageAction,
    setNewProposalGroupAction,
    setNewProposalTypeAction,
    setSeeVotersAction,
    allowCommentsAction
} from "../../../actions/actions.createProposal"
import { PROPOSAL_TYPE } from "../../../reducers/types"
import { NavigationProps } from "../../shared/types"
export default function CreateProposalScreen({ navigation }: NavigationProps): JSX.Element {
    const dispatch = useDispatch()
    const createProposalState = useSelector((state: RootState) => state.newProposal)

    const [formIsValid, setValidStatus] = useState([true, true])
 

    const handleUpload = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1
        })

        if (!result.cancelled) {
            dispatch(setNewProposalImageAction(result.uri))
        }
    }

    const formItems: loginItem[] = [
        {
            label: "Proposal",
            placeholder: "Enter Proposal Name...",
            validator: isString,
            onChange: (name: string) => dispatch(setNewProposalNameAction(name)),
            value: createProposalState.name
        },
        {
            label: "Proposal Details",
            placeholder: "Enter Proposal Details...",
            validator: isString,
            onChange: (name: string) => dispatch(setNewProposalDetailsAction(name)),
            value: createProposalState.details
        }
    ]

    const proposalTypeDropDown: DropDown = {
        label: "Proposal type",
        items: [
            { label: "Private Proposal", value: "private" },
            { label: "Public Proposal", value: "public" }
        ],
        value: createProposalState.type,
        onChange: (type: PROPOSAL_TYPE) => dispatch(setNewProposalTypeAction(type)),
        placeholder: "Select...",
        accessibilityLabel: "Select proposal type"
    }

    const proposalGroupDropDown: DropDown = {
        label: "Private Proposal Group",
        items: [
            { label: "Filipino Society", value: "Filipino Society" },
            { label: "USRFC", value: "USRFC" }
        ],
        value: createProposalState.group,
        onChange: (name: string) => dispatch(setNewProposalGroupAction(name)),
        placeholder: "Select...",
        accessibilityLabel: "Select proposal group"
    }

    const seeVotersDropDown: DropDown = {
        label: "See Voters",
        items: [
            { label: "Yes", value: "Yes" },
            { label: "No", value: "No" }
        ],
        value: createProposalState.seeVoters,
        onChange: (text: string) => dispatch(setSeeVotersAction(text)),
        placeholder: "Select...",
        accessibilityLabel: "Select see voters"
    }

    const allowCommentsDropDown: DropDown = {
        label: "AllowComments",
        items: [
            { label: "Yes", value: "Yes" },
            { label: "No", value: "No" }
        ],
        value: createProposalState.allowComments,
        onChange: (text: string) => dispatch(allowCommentsAction(text)),
        placeholder: "Select...",
        accessibilityLabel: "Allow comments?"
    }
    const onCreate = () => {
        let isValidArray: boolean[] = validateInputs([createProposalState.name, createProposalState.details], formItems)
        if (isValidArray.every(Boolean)) navigation.navigate(NAVIGATION_ROUTES.THANKYOU_FOR_CREATING_PROPOSAL)
        else setValidStatus(isValidArray)
    }

    return (
        <View style={styles.centered_container}>
            <BlueHeader navigation={navigation} title="Create Proposal" showArrow={true} />
            <SafeAreaView
                style={[
                    styles.centered_container,
                    styles.screen_padding,
                    { width: "100%", justifyContent: "flex-start" }
                ]}
            >
                <MainScrollContainer>
                   
                        <View style={[formStyles.form_wrapper, { paddingTop: 28 * length_factor }]}>
                            {renderForm(formItems, formIsValid)}

                            <DropDownButton dropdown={proposalTypeDropDown} />
                            <DropDownButton dropdown={proposalGroupDropDown} />
                            <DropDownButton dropdown={seeVotersDropDown} />
                            <DropDownButton dropdown={allowCommentsDropDown} />

                            <Text style={addProposalStyles.upload_text}>Upload Image</Text>
                            <View style={addProposalStyles.image_container}>
                                {createProposalState.image ? (
                                    <Image
                                        source={{ uri: createProposalState.image }}
                                        style={addProposalStyles.upload_image}
                                    />
                                ) : (
                                    <TouchableOpacity onPress={handleUpload} style={addProposalStyles.upload_button}>
                                        <MaterialIcons name="image" size={36 * length_factor} color="#bebebe" />
                                    </TouchableOpacity>
                                )}
                            </View>
                        </View>
                        <Button
                            text="CREATE"
                            color={BUTTON_COLORS.BLUE}
                            onPress={onCreate}
                            showPlusIcon={true}
                            width={160}
                            paddingTop={14}
                        />
    
                </MainScrollContainer>
                <MenuContainer>
                    <Menu navigation={navigation} />
                </MenuContainer>
            </SafeAreaView>
        </View>
    )
}
