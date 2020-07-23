import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import MapView, { Marker, Callout } from 'react-native-maps';

export default class Map extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render() {
        return(
            <View style={styles.container}>
                <MapView
                //provider={PROVIDER_GOOGLE} // remove if not using Google Maps
                style={styles.map}
                region={{
                    latitude: -1.45502,
                    longitude: -48.5024,
                    latitudeDelta: 0.08,
                    longitudeDelta: 0.05,
                }}>
                <Marker coordinate={{latitude: -1.45413223, longitude: -48.50511611}} title='Forte do Castelo' description='Forte da cidade de Belém' />
                <Marker coordinate={{latitude: -1.44762192, longitude: -48.49877536}} title='Estação das Docas' description='Porto de Belém'/>
                <Marker coordinate={{latitude: -1.45248052, longitude: -48.49349678}} title='Teatro da Paz' description='Maior teatro de Belém' />
                <Marker coordinate={{latitude: -1.465115, longitude: -48.50563109}} title='Mangal das Garças' description='O parque ecológico de Belém' />
                <Marker coordinate={{latitude: -1.46006336, longitude: -48.4897846}} title='Praça Batisata Campos' description='2ª melhor praça da cidade' />
                </MapView>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
      ...StyleSheet.absoluteFillObject,
      height: '100%',
      width: '100%',
      justifyContent: 'flex-end',
      alignItems: 'center',
    },
    map: {
      ...StyleSheet.absoluteFillObject,
    },
});