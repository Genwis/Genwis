/**
 * Created by iampamungkas on 2/13/18.
 */
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Dimensions, View, StatusBar, StyleSheet, ScrollView, Text, TouchableOpacity, TextInput } from 'react-native'
import { UserData, Logout, EditProfile } from '../../../../actions/UserActions'
import Ionicons from 'react-native-vector-icons/Ionicons'
import FontAwesome from 'react-native-vector-icons/FontAwesome'

const style = StyleSheet.create({
  container: {
    backgroundColor: '#fcfcfc',
    flex: 1,
  },
  profilePicture: {
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
  textUsername: {
    marginTop: 16,
    fontFamily: 'Poppins-Regular',
    fontSize: 14,
    color: '#5c5c5c'
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
    color: '#bdbdbd'
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
    textAlign: 'center'
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
    elevation: 3
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
    elevation: 3
  }
})
function mapStateToProps(state) {
  const { users } = state
  return {
    users
  }
}
class ProfileScreen extends Component {
  constructor(props) {
    super(props)
  }
  state = {
    isEditOn: false,
    profile: this.props.users.profile
  }
  componentWillMount() {
    const { dispatch, users} = this.props
    if(!users.isUserData){
      dispatch(UserData(users))
    }
  }
  logout = () => {
    const { dispatch, users, navigation } = this.props
    const signup = new Promise((resolve, reject) => {
      const x = dispatch(Logout(users))
      resolve(x)
    })
      .then((result) => {
        if (!this.props.users.isLogin) {
          navigation.navigate('LoginNavigation')
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
      }
    })
  }
  onChangeLastName = (text) => {
    this.setState({
      ...this.state,
      profile: {
        ...this.state.profile,
        lastname: text,
      }
    })
  }
  onChangePhoneNUmber = (text) => {
    this.setState({
      ...this.state,
      profile: {
        ...this.state.profile,
        phone_number: text,
      }
    })
  }
  onFabPressed =() => {
    if (this.state.isEditOn) {
      const { dispatch, users} = this.props
      const edit = new Promise((resolve, reject) => {
        const x = dispatch(EditProfile(users, this.state.profile))
        resolve(x)
      })
        .then((result) => {
          if (this.props.users.isLogin) {
            dispatch(UserData(users))
            this.setState({isEditOn: false})
          } else {
            alert('Update Profile Failed')
          }
        })
    } else {
      this.setState({isEditOn: true})
    }
  }
  render() {
    const { users } = this.props
    // console.warn(users.profile)
    return (
      <View style={style.container}>
        <StatusBar backgroundColor="#27ae60" />
        <ScrollView style={{padding: 20}}>
          <Text style={style.textMyProfile}>
            My Profile
          </Text>
          <View style={style.containerHead}>
            <View style={style.profilePicture}>
              <Ionicons name="ios-person" size={85} color="grey"/>
              <TouchableOpacity style={style.profilePictureFab} onPress={() => null}>
                <FontAwesome name='camera' size={12} color='white' />
              </TouchableOpacity>
            </View>
            <Text style={style.textUsername}>
              {users.username}
            </Text>
            {/*<Text style={style.textEmail}>*/}
              {/*{users.profile.email}*/}
            {/*</Text>*/}
          </View>
          <View style={style.containerCard}>
            <Text style={style.textContactDetail}>
              Profile Detail
            </Text>
            <Text style={style.textName}>
              Firstname
            </Text>
            <TextInput placeholder={users.profile.firstname === '' ? '-' : users.profile.firstname} onChangeText={(text) => this.onChangeFirstName(text)} style={style.textNameValue} editable={this.state.isEditOn} selectTextOnFocus={this.state.isEditOn}/>
            <Text style={style.textName}>
              Lastname
            </Text>
            <TextInput placeholder={users.profile.lastname === '' ? '-' : users.profile.lastname} onChangeText={(text) => this.onChangeLastName(text)} style={style.textNameValue} editable={this.state.isEditOn} selectTextOnFocus={this.state.isEditOn}/>
            <Text style={style.textName}>
              Phone Number
            </Text>
            <TextInput placeholder={users.profile.phone_number === '' ? '-' : users.profile.phone_number} onChangeText={(text) => this.onChangePhoneNUmber(text)} style={style.textNameValue} editable={this.state.isEditOn} selectTextOnFocus={this.state.isEditOn}/>
            <Text style={style.textName}>
              Email
            </Text>
            <TextInput placeholder={users.profile.email === '' ? '-' : users.profile.email}  style={style.textEmail} editable={false} selectTextOnFocus={false}/>
            <Text style={style.textName}>
              Password
            </Text>
            <TextInput placeholder={Array(10).join('*')} style={style.textNameValue} editable={false} selectTextOnFocus={false}/>
          </View>
          <TouchableOpacity onPress={()=>{this.logout()}}>
            <Text style={style.textLogout}>
              LOGOUT
            </Text>
          </TouchableOpacity>
          <View style={{height: 100}}/>
        </ScrollView>
        <TouchableOpacity style={style.fab} onPress={() => this.onFabPressed()}>
          {
            this.state.isEditOn ?
              <Text style={{fontSize: 14, fontFamily: 'Poppins-Regular', color: 'white'}}>Save</Text>
              :
              <FontAwesome name='edit' size={20} color='white' />
          }
        </TouchableOpacity>
      </View>
    )
  }
}
export default connect(mapStateToProps)(ProfileScreen)
