import React, {useEffect} from 'react';
import {StyleSheet, FlatList} from 'react-native';
import {Text, View, Spinner} from 'native-base';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {fetchTuitionList} from './TuitionAction';
import {DATA_STATUS} from '../constants';
import {TuitionItem} from './TuitionItem';

const TuitionList = ({tuitionList, fetchTuition, navigation}) => {
  useEffect(() => {
    fetchTuition();
  });
  const renderItem = ({item}, onSelect) => {
    return <TuitionItem {...item} onSelect={onSelect} />;
  };
  const onSelect = (enqId) => {
    navigation.navigate('Detail', {
      enqId,
      name: tuitionList.data.find((e) => e.enqId === enqId).name,
    });
  };
  const renderTuitions = ({status, data, error}) => {
    switch (status) {
      case DATA_STATUS.LOADED:
        return (
          <FlatList
            data={data}
            renderItem={(dt) => renderItem(dt, onSelect)}
            keyExtractor={(item) => parseInt(item.enqId, 10)}
          />
        );
      case DATA_STATUS.ERRORED:
        return <Text style={styles.text}>{error}</Text>;
      default:
        return <Spinner style={{}} />;
    }
  };
  return <View style={styles.container}>{renderTuitions(tuitionList)}</View>;
};
const mapStateToProps = (state) => {
  return {tuitionList: state.tuition.list};
};
const mapDispatchToProps = (dispath) => ({
  fetchTuition: bindActionCreators(fetchTuitionList, dispath),
});
export default connect(mapStateToProps, mapDispatchToProps)(TuitionList);

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    display: 'flex',
  },
});
