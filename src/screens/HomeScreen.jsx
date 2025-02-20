import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import { InnerContainer, MyContainer } from '../../styles';


const HomeScreen = React.forwardRef((props, ref) => {
  return (
    <MyContainer>
      <InnerContainer>
        <Text>HomeScreen</Text>

        <MapView
          provider={PROVIDER_GOOGLE} // remove if not using Google Maps
          style={styles.map}
          region={{
            latitude: 37.78825,
            longitude: -122.4324,
            latitudeDelta: 0.015,
            longitudeDelta: 0.0121,
          }}
        >
     </MapView>
      </InnerContainer>

    </MyContainer>
  )
});

export default HomeScreen

const styles = StyleSheet.create({})