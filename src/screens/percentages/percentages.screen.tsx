import {Text, View} from 'react-native';
import { height, primaryColor, width } from '../../utils/constants/style.constants';

const PercentagesScreen = () => {
  return (
    <View style={{backgroundColor: primaryColor, width: width * 1, height: height * 1}}>
      <Text>Hola desde percentages</Text>
    </View>
  );
};

export default PercentagesScreen;
