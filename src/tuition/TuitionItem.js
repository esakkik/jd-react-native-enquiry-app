import React from 'react';
import {StyleSheet, TouchableOpacity, View, Dimensions, Linking} from 'react-native';
import {Text, Icon} from 'native-base';
import {timeSince, dayFirst} from '../util';

export const TuitionItem = ({
  name,
  phoneNumber,
  location,
  classLocPref,
  categoryName,
  postedOn,
  enqId,
  onSelect,
}) => (
  <TouchableOpacity onPress={() => onSelect(enqId)}>
    <View style={styles.boxContainer}>
      <View style={styles.labelBox}>
        <View
          style={[styles.labelContainer, {backgroundColor: randomColor[parseInt(enqId, 10) % 3]}]}>
          <Text style={styles.labelText}>{name.charAt(0).toUpperCase()}</Text>
        </View>
      </View>
      <View style={styles.infoBox}>
        <Text style={styles.nameText}>{name}</Text>
        <Text style={styles.infoText}>{categoryName}</Text>
        <Text style={styles.infoText}>{location}</Text>
        <Text style={styles.infoText}>{classLocPref}</Text>
      </View>
      <View style={styles.phoneBox}>
        <Text style={styles.phoneText}>{timeSince(dayFirst(postedOn))} ago</Text>
        <TouchableOpacity onPress={() => Linking.openURL(`tel:${phoneNumber}`)}>
          <Icon
            style={{fontSize: 24, marginTop: 10, color: randomColor[parseInt(enqId) % 3]}}
            type="Entypo"
            name="mobile"
          />
        </TouchableOpacity>
      </View>
    </View>
  </TouchableOpacity>
);
const deviceWidth = Dimensions.get('window').width;
const styles = StyleSheet.create({
  labelText: {
    fontWeight: '800',
    width: 40,
    height: 40,
    lineHeight: 40,
    color: 'white',
    textAlign: 'center',
    backgroundColor: 'transparent',
  },
  labelContainer: {
    width: 40,
    height: 40,
    borderRadius: 25,
  },
  boxContainer: {
    padding: 10,
    display: 'flex',
    borderBottomWidth: 2,
    borderColor: '#f7f7f7',
    flexDirection: 'row',
    backgroundColor: 'white',
  },
  labelBox: {
    width: deviceWidth * 0.12,
    display: 'flex',
    alignItems: 'center',
  },
  infoBox: {
    width: deviceWidth * 0.6,
    marginLeft: 10,
  },
  phoneBox: {
    width: deviceWidth * 0.24,
    display: 'flex',
    alignItems: 'center',
  },
  nameText: {
    fontSize: 18,
    fontWeight: 'bold',
    paddingBottom: 4,
  },
  infoText: {
    fontSize: 12,
    fontWeight: '300',
    paddingBottom: 2,
  },
  phoneText: {
    fontSize: 10,
    color: '#616161',
  },
});

const randomColor = ['#7fe7ce', '#d89a82', '#4285f4'];
