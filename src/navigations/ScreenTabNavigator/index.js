
import React from 'react';
import {
  AppRegistry,
  Text,
  View,
  StyleSheet,
  Image,
  TouchableOpacity
} from 'react-native';

import {createMaterialTopTabNavigator} from 'react-navigation-tabs'

class EtiketScreen extends React.Component {
  render() {
    return (
      <View style={{flex:1,paddingTop:16,paddingLeft:10,paddingRight:10}}>
        <TouchableOpacity style={{backgroundColor:'white',paddingLeft:40,borderRadius:12}}>
            <Image source={require('../../../assets/logo/ct.png')} style={{marginTop:10,height:18}}></Image>
            <Text style={{fontSize:16,fontWeight:'500',paddingTop:5}}>Mamuju</Text>
            <Text style={{fontSize:12,fontWeight:'200',paddingTop:1}}>14.30</Text>
            <Text style={{fontSize:14,fontWeight:'500',paddingLeft:40,paddingTop:4}}>50m (Langsung)</Text>
            <Text style={{fontSize:16,fontWeight:'500',paddingTop:10}}>Makassar</Text>
            <Text style={{fontSize:12,fontWeight:'200',paddingBottom:12}}>15.40</Text>
          <View style={{position:'absolute'}}>
            <Text style={{paddingLeft:240,paddingTop:100,fontWeight:'bold'}}>IDR 700.169</Text>
          </View>
          <View style={{position:'absolute',paddingLeft:280,paddingTop:40}}>
            <Image source={require('../../../assets/promo/ic.png')} style={{width:30,height:30}}></Image>
          </View>
          <View style={{position:'absolute',paddingTop:35,paddingLeft:10}}>
          <Image source={require('../../../assets/promo/aa.png')} style={{width:20,height:20}}></Image>
          </View>
          <View style={{position:'absolute',paddingTop:95,paddingLeft:10}}>
          <Image source={require('../../../assets/promo/aa.png')} style={{width:20,height:20}}></Image>
          </View>
          <View style={{flex:1,position:'absolute'}}>
          <Image source={require('../../../assets/promo/line.png')} style={{marginLeft:-21,marginTop: 55,height:40}}></Image>
          </View>         
        </TouchableOpacity>
      </View>
      
      )
  }
}

class DetailPembelianScreen extends React.Component {
  render() {
    return (
      <View style={{flex:1,paddingTop:16,paddingLeft:10,paddingRight:10}}>
      <View>
        <Text style={{fontWeight:'bold',fontSize:15,marginBottom:10,marginLeft:10}}>10 April 2019</Text>
      </View>
      <TouchableOpacity style={{backgroundColor:'white',paddingLeft:40,borderRadius:12}}>
          <Image source={require('../../../assets/logo/ct.png')} style={{marginTop:10,height:18}}></Image>
          <Text style={{fontSize:16,fontWeight:'500',paddingTop:5}}>Mamuju</Text>
          <Text style={{fontSize:12,fontWeight:'200',paddingTop:1}}>14.30</Text>
          <Text style={{fontSize:14,fontWeight:'500',paddingLeft:40,paddingTop:4}}>50m (Langsung)</Text>
          <Text style={{fontSize:16,fontWeight:'500',paddingTop:10}}>Makassar</Text>
          <Text style={{fontSize:12,fontWeight:'200',paddingBottom:12}}>15.40</Text>
        <View style={{position:'absolute'}}>
          <Text style={{paddingLeft:240,paddingTop:100,fontWeight:'bold'}}>IDR 700.169</Text>
        </View>
        <View style={{position:'absolute',paddingLeft:280,paddingTop:40}}>
          <Image source={require('../../../assets/promo/ic.png')} style={{width:30,height:30}}></Image>
        </View>
        <View style={{position:'absolute',paddingTop:35,paddingLeft:10}}>
          <Image source={require('../../../assets/promo/aa.png')} style={{width:20,height:20}}></Image>
          </View>
          <View style={{position:'absolute',paddingTop:95,paddingLeft:10}}>
          <Image source={require('../../../assets/promo/aa.png')} style={{width:20,height:20}}></Image>
          </View>
          <View style={{flex:1,position:'absolute'}}>
          <Image source={require('../../../assets/promo/line.png')} style={{marginLeft:-21,marginTop: 55,height:40}}></Image>
          </View>
      </TouchableOpacity>
    </View>
    
    )
  }
}

const MainScreenNavigator = createMaterialTopTabNavigator({
  Etiket: { 
    screen: EtiketScreen,
    navigationOptions: {
    tabBarLabel:'E-TIKET',

    }
},
  DetailPembelian: { 
    screen: DetailPembelianScreen,
    navigationOptions:{
    tabBarLabel:'DAFTAR PEMBELIAN',
    }
  }
  }, { tabBarOptions: {activeTintColor: 'black',
  inactiveTintColor: 'lightgray', style: {backgroundColor: '#FFFFFF'},indicatorStyle: {backgroundColor:'red'} } , 
  

});

export default MainScreenNavigator

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center'
  }
})