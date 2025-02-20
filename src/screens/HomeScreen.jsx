import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import { InnerContainer, MyContainer, PageTitle, SubTitle, MyTextBox } from '../../styles';


const HomeScreen = () => {
  return (
    <MyContainer>
        <PageTitle>Welcome To WYA</PageTitle>
        <SubTitle>Find other's near you below</SubTitle>
        <MyTextBox placeholder="Search for a Location" 
          placeholderTextColor = "#ffffff"/>
        <View style={styles.container}>
          <View style={styles.mapContainer}>
            <MapView
              provider={PROVIDER_GOOGLE} // remove if not using Google Maps
              style={styles.map}
              region={{
                latitude: 37.78825,
                longitude: -122.4324,
                latitudeDelta: 0.02,
                longitudeDelta: 0.0121,
              }}
            >
            </MapView>
          </View>
        </View>

    </MyContainer>
  )
};

export default HomeScreen

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    height: 600,
    width: 400,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  mapContainer: {
    width: '100%',
    height: '70%'
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
 });