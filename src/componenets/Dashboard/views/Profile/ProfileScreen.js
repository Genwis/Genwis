/**
 * Created by iampamungkas on 2/13/18.
 */
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Dimensions, View, StatusBar, StyleSheet, ScrollView, Text, TouchableOpacity, TextInput, Image } from 'react-native'
import { UserData, Logout, EditProfile, UploadPhotoProfile } from '../../../../actions/UserActions'
import { ngeDelete } from '../../../../actions/actions'
import { NavBarComponent } from "./NavBarComponent";
import Ionicons from 'react-native-vector-icons/Ionicons'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import ImagePicker from 'react-native-image-picker'

let d = Dimensions.get('window')

const style = StyleSheet.create({
  container: {
    backgroundColor: '#f7f7f7',
    flex: 1,
  },
  profilePicture: {
    height: 85,
    width: 85,
    borderRadius: 50,
  },
  profilePictureContainer: {
    height: 85,
    width: 85,
    borderRadius: 50,
    backgroundColor: '#eeeeee',
    alignItems: 'center',
  },
  textMyProfile: {
    fontSize: 20,
    fontFamily: 'Poppins-SemiBold',
    color: '#27ae60',
    textAlign: 'center',
    marginBottom: 20,
  },
  containerHead: {
    alignItems: 'center',
    justifyContent: 'center',
  },

  containerEmpty: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  textUsername: {
    marginTop: 16,
    fontFamily: 'Poppins-Regular',
    fontSize: 14,
    color: '#5c5c5c',
  },
  textEmail: {
    fontFamily: 'Lato-Regular',
    fontSize: 12,
    color: '#616161',
    marginBottom: 2,
  },
  containerCard: {
    margin: 20,
    padding: 20,
    backgroundColor: 'white',
    elevation: 1,
  },
  textContactDetail: {
    fontFamily: 'Poppins-Medium',
    fontSize: 14,
    color: '#4b93cf',
    marginBottom: 10,
  },
  textName: {
    fontFamily: 'Poppins-Regular',
    fontSize: 12,
    color: '#bdbdbd',
  },
  textNameValue: {
    fontFamily: 'Lato-Regular',
    fontSize: 16,
    color: '#616161',
    marginBottom: 2,
  },
  textLogout: {
    fontFamily: 'Poppins-Medium',
    fontSize: 15,
    color: '#e74c3c',
    textAlign: 'center',
  },
  fab: {
    width: 50,
    height: 50,
    borderRadius: 30,
    backgroundColor: '#4b93cf',
    position: 'absolute',
    bottom: 20,
    right: 20,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 3,
  },
  profilePictureFab: {
    width: 25,
    height: 25,
    borderRadius: 15,
    backgroundColor: '#4b93cf',
    position: 'absolute',
    bottom: 0,
    right: 0,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 3,
  },
  buttonLogin: {
    backgroundColor: '#27ae60',
    borderRadius: d.height * 0.07 / 2,
    paddingTop:8,
    paddingBottom:8,
    paddingLeft:34,
    paddingRight:34,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 25,
  },
  loginText: {
    fontFamily: 'Poppins-Medium',
    fontSize: 12,
    color: 'white',
    justifyContent:'center'
  },
  parag: {
    textAlign:'center',fontSize:12,lineHeight:18.7,letterSpacing:0.44,fontFamily:'Latto-Regular',color:'#bdbdbd',
  }
})
function mapStateToProps(state) {
  const { users } = state
  return {
    users,
  }
}

class ProfileScreen extends Component {
  constructor(props) {
    super(props)
  }
  state = {
    isEditOn: false,
    profile: this.props.users.profile,
  }
  componentWillMount() {
    const { dispatch, users } = this.props
    if (!users.isUserData && users.isLogin) {
      const edit = new Promise((resolve, reject) => {
        const x = dispatch(UserData(users))
        resolve(x)
      })
        .then((result) => {
          if (this.props.users.isLogin) {
            this.setState({
              ...this.state,
              profile: this.props.users.profile,
            })
          } else {
            alert('Update Profile Failed')
          }
        })
    }
  }
  logout = () => {
    const { dispatch, users, navigation } = this.props
    const signup = new Promise((resolve, reject) => {
      dispatch(ngeDelete())
      const x = dispatch(Logout(users))
      resolve(x)
    })
      .then((result) => {
        if (!this.props.users.isLogin) {
          navigation.navigate('Home')
        } else {
          alert('Logout Failed')
        }
      })
  }
  onChangeFirstName = (text) => {
    this.setState({
      ...this.state,
      profile: {
        ...this.state.profile,
        firstname: text,
      },
    })
  }
  onChangeLastName = (text) => {
    this.setState({
      ...this.state,
      profile: {
        ...this.state.profile,
        lastname: text,
      },
    })
  }
  onChangePhoneNUmber = (text) => {
    this.setState({
      ...this.state,
      profile: {
        ...this.state.profile,
        phone_number: text,
      },
    })
  }
  onFabPressed =() => {
    if (this.state.isEditOn) {
      const { dispatch, users } = this.props
      const edit = new Promise((resolve, reject) => {
        // console.log("xyxy123")
        // console.log(this.state.profile)
        const x = dispatch(EditProfile(users, this.state.profile))
        resolve(x)
      })
        .then((result) => {
          if (this.props.users.isLogin) {
            dispatch(UserData(users))
            this.setState({ isEditOn: false })
          } else {
            alert('Update Profile Failed')
          }
        })
    } else {
      this.setState({ isEditOn: true })
    }
  }
  onImageFabPressed = () => {
  // More info on all the options is below in the README...just some common use cases shown here
    const options = {
      title: 'Select Profile Picture',
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    }

    ImagePicker.showImagePicker(options, (response) => {
      // console.log('Response = ', response)

      if (response.didCancel) {
        // console.log('User cancelled image picker')
      } else if (response.error) {
        // console.log('ImagePicker Error: ', response.error)
      } else if (response.customButton) {
        // console.log('User tapped custom button: ', response.customButton)
      } else {
        const source = { uri: response.uri }

        // You can also display the image using data:
        // let source = { uri: 'data:image/jpeg;base64,' + response.data };

        // console.log(source)

        const { dispatch, users } = this.props
        const edit = new Promise((resolve, reject) => {
          resolve(dispatch(UploadPhotoProfile(users, source)))
        })
          .then((result) => {
            // console.log('xxx24')
            dispatch(UserData(users))
          })
      }
    })
  }
  render() {
    const { users, navigation } = this.props
    // console.warn(users.profile)
    return (
      <View style={style.container}>
        <StatusBar backgroundColor="#229854" />
        <NavBarComponent/>
        {
          users.isLogin ?
            <ScrollView style={{ padding: 20 }}>
              <Text style={style.textMyProfile}>
                My Profile
              </Text>
              <View style={style.containerHead}>
                <View style={style.profilePictureContainer}>
                  {
                    users.profile.photo_profile != '' ?
                      <Image
                        source={{ uri: users.profile.photo_profile }}
                        style={style.profilePicture}
                      />
                      :
                      <Ionicons name="ios-person" size={85} color="grey" />
                  }
                  <TouchableOpacity style={style.profilePictureFab} onPress={() => this.onImageFabPressed()}>
                    <FontAwesome name="camera" size={12} color="white" />
                  </TouchableOpacity>
                </View>
                <Text style={style.textUsername}>
                  {users.username}
                </Text>
                {/* <Text style={style.textEmail}> */}
                {/* {users.profile.email} */}
                {/* </Text> */}
              </View>
              <View style={style.containerCard}>
                <Text style={style.textContactDetail}>
                  Profile Detail
                </Text>
                <Text style={style.textName}>
                  Firstname
                </Text>
                <TextInput placeholder={users.profile.firstname === '' ? '-' : users.profile.firstname} onChangeText={text => this.onChangeFirstName(text)} style={style.textNameValue} editable={this.state.isEditOn} selectTextOnFocus={this.state.isEditOn} />
                <Text style={style.textName}>
                  Lastname
                </Text>
                <TextInput placeholder={users.profile.lastname === '' ? '-' : users.profile.lastname} onChangeText={text => this.onChangeLastName(text)} style={style.textNameValue} editable={this.state.isEditOn} selectTextOnFocus={this.state.isEditOn} />
                <Text style={style.textName}>
                  Phone Number
                </Text>
                <TextInput placeholder={users.profile.phone_number === '' ? '-' : users.profile.phone_number} onChangeText={text => this.onChangePhoneNUmber(text)} style={style.textNameValue} editable={this.state.isEditOn} selectTextOnFocus={this.state.isEditOn} />
                <Text style={style.textName}>
                  Email
                </Text>
                <TextInput placeholder={users.profile.email === '' ? '-' : users.profile.email} style={style.textEmail} editable={false} selectTextOnFocus={false} />
                <Text style={style.textName}>
                  Password
                </Text>
                <TextInput placeholder={Array(10).join('*')} style={style.textNameValue} editable={false} selectTextOnFocus={false} />
              </View>
              <TouchableOpacity onPress={() => { this.logout() }}>
                <Text style={style.textLogout}>
                  LOGOUT
                </Text>
              </TouchableOpacity>
              <View style={{ height: 100 }} />
            </ScrollView>
            :
            <View style={style.containerEmpty}>
            <Image source={require('../../../../assets/user.png')} style={{height:83,width:70,marginLeft:15,marginBottom:20}} />
            <Text style={{fontFamily:'Poppins-Medium',color:'#616161',fontSize:16,lineHeight:18.3,letterSpacing:0.43,marginBottom:10}}>Login Now!</Text>
            <View>
              <Text style={style.parag}>You haven't logged to the application</Text>
              <Text style={style.parag}>Log in to see your profile!</Text>
            </View>
              <TouchableOpacity style={style.buttonLogin} onPress={() => navigation.navigate('LoginNavigation')}>
                <Text style={style.loginText}>LOGIN</Text>
              </TouchableOpacity>
            </View>
        }
        {
          users.isLogin ?
            <TouchableOpacity style={style.fab} onPress={() => this.onFabPressed()}>
              {
                this.state.isEditOn ?
                  <Text style={{ fontSize: 14, fontFamily: 'Poppins-Regular', color: 'white' }}>Save</Text>
                  :
                  <FontAwesome name="edit" size={20} color="white" />
              }
            </TouchableOpacity>
            :
            false
        }
      </View>
    )
  }
}
export default connect(mapStateToProps)(ProfileScreen)
