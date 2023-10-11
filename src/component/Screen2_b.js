import { Pressable,Alert, Image, StyleSheet, Text, TextInput, View } from 'react-native'
import Rating from '@mui/material/Rating';
import AddAPhotoIcon from '@mui/icons-material/AddAPhoto';
import React, { useEffect, useState } from 'react'

const Screen2_b = () => {

  const [ratePoint, setRatePoint] = useState(5);
  const [lableRating, setLableRating] = useState("Cực kỳ hài lòng");
  const [comment, setComment] = useState("")
  const [btnSendStyle, setBtnSendStyle] = useState(styles.btnSendDisable)
  const [stateForm, setStateForm] = useState(false)

  const handleRating = (newValue) => {
    setRatePoint(newValue);
    if (newValue === 5)
      setLableRating("Cực kỳ hài lòng")
    else if (newValue === 4)
      setLableRating("Hài lòng")
    else if (newValue === 3)
      setLableRating("Chưa hài lòng")
    else if (newValue === 2)
      setLableRating("Tệ")
    else if (newValue === 1)
      setLableRating("Rất tệ")
  }

  const handleCommentChange = (value) => {
    setComment(value);
    if (value) {
      setStateForm(true)
      setBtnSendStyle(styles.btnSend)
    } else {
      setStateForm(false)
      setBtnSendStyle(styles.btnSendDisable)
    }
  }

  const handleSend = () => {
    if (stateForm) {
      console.log({
        "status": stateForm,
        "rate point": ratePoint,
        "Comment": comment
      })
      /* Alert.alert("Chưa có bình luận !") */
      alert("Gửi thành công")
    } else {
      console.log({
        "status": stateForm,
        "rate point": ratePoint,
        "Comment": comment
      })
      /* Alert.alert("Chưa có bình luận !") */
      alert("Chưa có bình luận !")
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.product}>
        <Image
          source={require('../Image/usb.png')}
          style={styles.imageProduct}
        />
        <Text style={styles.txtProduct}>
          USB Bluetooth Music Receiver HJX-001- Biến loa thường thành loa bluetooth
        </Text>
      </View>
      <View style={styles.rate}>
        <Text style={styles.labelRate} >{lableRating}</Text>
        <Rating
          name='size-large'
          value={ratePoint}
          onChange={(even, newValue) => {
            handleRating(newValue)
          }}
          style={styles.rating}
        />
      </View>
      <Pressable
        style={styles.btnAddImage}
        onPress={() => {
          /*  */
        }}
      >
        <AddAPhotoIcon style={styles.btnIconAdd} />
        <Text style={styles.txtBtnAddImage}>
          Thêm hình ảnh
        </Text>
      </Pressable>
      <TextInput
        value={comment}
        style={styles.areaComment}
        multiline={true}
        rows={9}
        placeholder='hãy chia sẻ những điều bạn thích về sản phẩm'
        placeholderTextColor={'gray'}
        onChangeText={handleCommentChange}
      />
      <Pressable
        onPress={handleSend}
        style={btnSendStyle}
      >
        <Text style={styles.txtBtnSend}>Gửi</Text>
      </Pressable>
    </View>
  )
}

export default Screen2_b

const styles = StyleSheet.create({
  container: {
    width: '100%',
    padding: 10,
    alignItems: 'center'
  },
  product: {
    flexDirection: 'row'
  },
  imageProduct: {
    width: 80,
    height: 80,
    margin: 10
  },
  txtProduct: {
    fontSize: 17,
    fontWeight: 700
  },
  rate: {
    alignItems: 'center'
  },
  rating: {
    fontSize: 50,
    color: '#F2DD1B'
  },
  labelRate: {
    fontSize: 20,
    fontWeight: 650,
    margin: 20
  },
  btnAddImage: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: 'gray',
    width: '90%',
    height: 55,
    borderRadius: 8,
    marginTop: 30
  },
  btnIconAdd: {
    fontSize: 35,
    margin: 10
  },
  txtBtnAddImage: {
    fontSize: 20,
    fontWeight: 600
  },
  areaComment: {
    width: '90%',
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 8,
    padding: 10,
    marginTop: 10,
    fontSize: 19
  },
  btnSend: {
    alignItems: 'center',
    width: '90%',
    backgroundColor: '#0883e4',
    height: 45,
    justifyContent: 'center',
    marginTop: 20,
    borderRadius: 8
  },
  btnSendDisable: {
    alignItems: 'center',
    width: '90%',
    backgroundColor: 'gray',
    height: 45,
    justifyContent: 'center',
    marginTop: 20,
    borderRadius: 8
  },
  txtBtnSend: {
    fontSize: 20,
    fontWeight: 650,
    color: 'white'
  }
})