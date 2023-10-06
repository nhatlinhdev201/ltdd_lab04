import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Screen2_b = () => {
  return (
    <View>
      <View style= {styles.product}>
        <Image
            source={require('../Image/usb.png')}
            style={styles.imageProduct}
        />
        <Text style={styles.txtProduct}>
            USB Bluetooth Music Receiver {'\n'}HJX-001- Biến loa thường thành loa bluetooth
        </Text>
      </View>
    </View>
  )
}

export default Screen2_b

const styles = StyleSheet.create({})