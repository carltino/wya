import { StyleSheet, Text, View } from 'react-native'
import React, {useState, useEffect} from 'react'
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';
import { InnerContainer, MyContainer, PageTitle, SubTitle, MyTextBox } from '../../styles';
import axios from 'axios'


const HomeScreen = () => {

  const [markers, setMarkers] = useState([]);
  
  useEffect(() => {
    axios.get('http://localhost:5000/markers')
    .then(resp => {
      console.log("my markerss " +resp.data)
      setMarkers(resp.data);
  })
    .catch(err => console.log(err));
  }, []);

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
                latitude: 33.7528,
                longitude: -84.3863,
                latitudeDelta: 0.031,
                longitudeDelta: 0.0121,
              }}
            >

            {markers.map((marker, index) => (
                    <Marker
                        key={index}
                        coordinate={{ latitude: marker.latitude, longitude: marker.longitude }}
                        title={marker.username}
                        description={marker.username}
                    />
                ))}
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