import React, {useEffect, useState} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {View, Text} from 'react-native';
import {TuitionItem} from './TuitionItem';

const TuitionDetail = ({route, tuitionList}) => {
  const {enqId} = route.params;
  const [enquire, setEnquire] = useState(undefined);
  useEffect(() => {
    if (tuitionList.data) {
      console.log('t', tuitionList);
      const tui = tuitionList.data.find((tuition) => tuition.enqId === enqId);
      if (tui) {
        setEnquire(tui);
      }
    }
  }, [enqId, tuitionList]);
  return (
    <View style={{flex: 1}}>
      {enquire ? (
        <TuitionItem {...enquire} onSelect={console.log} />
      ) : (
        <Text>Details not found for {enquire}</Text>
      )}
    </View>
  );
};

const mapStateToProps = (state) => {
  return {tuitionList: state.tuition.list};
};
export default connect(mapStateToProps)(TuitionDetail);
