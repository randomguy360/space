import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  Platform,
  StatusBar,
  ImageBackground,
  Image
} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
export default class BlackHoleFacts extends Component {
  render() {
    return (
      <View>
        <ScrollView>
          <ImageBackground style={{ backgroundColor: 'indigo' }}>
            <View style={styles.titleBar}>
              <Text style={styles.titleText}> Black Hole Facts</Text>
            </View>
            <Image
              source={require('../assets/Blackhole')}
              style={{
                fontSize: 50,
                marginRight: 10,
                marginLeft: 10,
                marginTop: 10,
                width: 300,
                height: 200,
              }}
            />
            <Text style={styles.textPicture}>
              {' '}
              Black holes are some of the strangest and most fascinating objects
              in outer space. They're extremely dense, with such strong
              gravitational attraction that even light cannot escape their grasp
              if it comes near enough. Albert Einstein first predicted the
              existence of black holes in 1916, with his general theory of
              relativity. The term "black hole" was coined many years later in
              1967 by American astronomer John Wheeler. After decades of black
              holes being known only as theoretical objects, the first physical
              black hole ever discovered was spotted in 1971. Then, in 2019 the
              Event Horizon Telescope (EHT) collaboration released the first
              image ever recorded of a black hole. The EHT saw the black hole in
              the center of galaxy M87 while the telescope was examining the
              event horizon, or the area past which nothing can escape from a
              black hole. The image maps the sudden loss of photons (particles
              of light). It also opens up a whole new area of research in black
              holes, now that astronomers know what a black hole looks like. So
              far, astronomers have identified three types of black holes:
              stellar black holes, supermassive black holes and intermediate
              black holes. Stellar black holes — small but deadly When a star
              burns through the last of its fuel, the object may collapse, or
              fall into itself. For smaller stars (those up to about three times
              the sun's mass), the new core will become a neutron star or a
              white dwarf. But when a larger star collapses, it continues to
              compress and creates a stellar black hole. Black holes formed by
              the collapse of individual stars are relatively small, but
              incredibly dense. One of these objects packs more than three times
              the mass of the sun into the diameter of a city. This leads to a
              crazy amount of gravitational force pulling on objects around the
              object. Stellar black holes then consume the dust and gas from
              their surrounding galaxies, which keeps them growing in size.
              According the Harvard-Smithsonian Center for Astrophysics, "the
              Milky Way contains a few hundred million" stellar black holes.
              Supermassive black holes — the birth of giants Small black holes
              populate the universe, but their cousins, supermassive black
              holes, dominate. These enormous black holes are millions or even
              billions of times as massive as the sun, but are about the same
              size in diameter. Such black holes are thought to lie at the
              center of pretty much every galaxy, including the Milky Way.
              Scientists aren't certain how such large black holes spawn. Once
              these giants have formed, they gather mass from the dust and gas
              around them, material that is plentiful in the center of galaxies,
              allowing them to grow to even more enormous sizes. Supermassive
              black holes may be the result of hundreds or thousands of tiny
              black holes that merge together. Large gas clouds could also be
              responsible, collapsing together and rapidly accreting mass. A
              third option is the collapse of a stellar cluster, a group of
              stars all falling together. Fourth, supermassive black holes could
              arise from large clusters of dark matter. This is a substance that
              we can observe through its gravitational effect on other objects;
              however, we don't know what dark matter is composed of because it
              does not emit light and cannot be directly observed.
            </Text>

            <Image
              source={require('../assets/Blackhole1')}
              style={{
                fontSize: 50,
                marginRight: 10,
                marginLeft: 10,
                marginTop: 10,
                width: 300,
                height: 200,
              }}
            />

            <TouchableOpacity
              style={styles.routeCard}
              onPress={() => this.props.navigation.navigate('Home')}>
              <Text style={styles.routeText}>Back</Text>
            </TouchableOpacity>
          </ImageBackground>
        </ScrollView>
      </View>
    );
  }
}
var styles = StyleSheet.create({
  textPicture: {
    marginTop: 40,
    marginLeft: 10,
    marginRight: 10,
    color: 'white',
    fontSize: 17,
  },
  titleText: {
    fontSize: 40,
    marginLeft: 10,
    marginRight: 10,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
  },

  routeText: {
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'black',
    marginTop: 5,
  },

  routeCard: {
    flex: 0.25,
    marginLeft: 30,
    marginRight: 30,
    marginTop: 30,
    marginBottom: 50,
    borderRadius: 120,
    backgroundColor: 'white',
  },
});
//<Text style={styles.textPicture}> </Text>
