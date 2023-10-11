import { Pressable, StyleSheet, Text, View,TextInput } from 'react-native'
import DoneIcon from '@mui/icons-material/Done';
import React, { useState } from 'react'

const Screen2_c = () => {

    const [passwordLength, setPasswordLength] = useState('')
    const [lowerCase, setLowerCase] = useState(false)
    const [upCase, setUpCase] = useState(false)
    const [addNumber, setAddNumber] = useState(false)
    const [addSpecialsymbol, setAddSpecialsymbol] = useState(false)

    const handleInputLength = (element) => {
        setPasswordLength(element.target.value)
    } 
    const handleLowerCaseCheck = () => {
        setLowerCase(!lowerCase)
    } 
    const handleUpCaseCheck = () => {
        setUpCase(!upCase)
    }
    const handleAddNumberCheck = () => {
        setAddNumber(!addNumber)
    }
    const handleAddSpecialsymbolCheck = () => {
        setAddSpecialsymbol(!addSpecialsymbol)
    }

    const generatePassword = () => {
        console.log({
            "password length" : passwordLength,
            "include lower case" : lowerCase,
            "include upcase letters" : upCase,
            "include number " : addNumber,
            "inclue special symbol " : addSpecialsymbol
        })
        alert('ok')
    }

    return (
        <View style={styles.container}>
            <View style={styles.mainContent}>
                <View style={styles.header}>
                    <Text style={styles.headingPage} >PASSWORD GENERATOR</Text>
                </View>
                <TextInput
                    style={styles.passwordResults}
                    disabled={true}
                    placeholder='Results'
                />
                <View style={styles.rowItem}>
                    <Text style={styles.lableItem}>Password length</Text>
                    <TextInput 
                        value={passwordLength}
                        keyboardType="numeric"
                        style={styles.txtlengthInput}
                        onChange={handleInputLength}
                    />
                </View> 
                <View style={styles.rowItem}>
                    <Text style={styles.lableItem}>Include lower case letters</Text>
                    <Pressable
                        style={styles.boxCheckbox}
                        onPress={handleLowerCaseCheck}
                    >
                        {lowerCase && <DoneIcon style={styles.doneIcon}/>}
                    </Pressable>
                </View>
                <View style={styles.rowItem}>
                    <Text style={styles.lableItem}>Include upercase letters</Text>
                    <Pressable
                        style={styles.boxCheckbox}
                        onPress={handleUpCaseCheck}
                    >
                        {upCase && <DoneIcon style={styles.doneIcon}/>}
                    </Pressable>
                </View>
                <View style={styles.rowItem}>
                    <Text style={styles.lableItem}>Include number</Text>
                    <Pressable
                        style={styles.boxCheckbox}
                        onPress={handleAddNumberCheck}
                    >
                        {addNumber && <DoneIcon style={styles.doneIcon}/>}
                    </Pressable>
                </View>
                <View style={styles.rowItem}>
                    <Text style={styles.lableItem}>Include special symbol</Text>
                    <Pressable
                        style={styles.boxCheckbox}
                        onPress={handleAddSpecialsymbolCheck}
                    >
                        {addSpecialsymbol && <DoneIcon style={styles.doneIcon}/>}
                    </Pressable>
                </View>
                <Pressable 
                    style={styles.btnGeneratePassword}
                    onPress={generatePassword}
                >
                    <Text style={styles.txtBtnGp}>GENERATE PASSWORD</Text>
                </Pressable>
            </View>
        </View>
    )
}

export default Screen2_c

const styles = StyleSheet.create({
    container: {
        width: '100%',
        alignItems: 'center',
        padding: 10,
        height: '100%',
    },
    mainContent: {
        width: '100%',
        height: '100%',
        backgroundColor: '#23235B',
        padding: 20,
        elevation: 4, 
        boxShadowColor: '#000000', 
        boxShadowOffset: { width: 0, height: 4 },
        boxShadowOpacity: 0.4,
        boxShadowRadius: 4,
        borderRadius: 8,
    },
    header: {
        alignItems: 'center'
    },
    headingPage: {
        width: '50%',
        textAlign: 'center',
        fontSize: 25,
        color: 'white'
    },
    passwordResults: {
        backgroundColor: '#151537',
        fontSize: 20,
        height: 60,
        width: '100%',
        borderRadius: 8,
        padding: 10,
        marginTop: 20
    },
    rowItem: {
        marginTop: 20,
        marginBottom: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    lableItem: {
        color: 'white',
        fontSize: 17,
        fontWeight: 500
    },
    txtlengthInput: {
        backgroundColor: 'white',
        height: 30,
        width: 120
    },
    boxCheckbox : {
        backgroundColor : 'white',
        width : 25,
        height : 25
    },
    doneItem : {

    },
    btnGeneratePassword : {
        backgroundColor : '#3B3B98',
        height : 50,
        justifyContent : 'center',
        alignItems : 'center',
        margin : 20,
        borderRadius : 8
    },
    txtBtnGp : {
        textAlign : 'center',
        fontSize : 19,
        color : 'white'
    }
})