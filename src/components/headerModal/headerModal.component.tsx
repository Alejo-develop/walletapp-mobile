import Icon from 'react-native-vector-icons/FontAwesome';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {height, width} from '../../utils/constants/style.constants';
import {HeaderModalProps} from '../../interfaces/modal.interface';

const HeaderModalComponent = ({onClose, text}: HeaderModalProps) => {
  return (
    <View style={styles.headerModal}>
      <TouchableOpacity onPress={onClose} style={styles.back}>
        <Icon
          name="arrow-left"
          style={{color: 'white', fontSize: height * 0.025}}
        />
      </TouchableOpacity>

      <Text style={styles.title}>{text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  headerModal: {
    flexDirection: 'row',
    width: width * 1,
    height: height * 0.07,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    color: 'white',
    fontSize: height * 0.026,
    fontWeight: '800',
    textAlign: 'center'
  },
  back:{
    position: 'absolute',
    left: 20
  }
});

export default HeaderModalComponent;
