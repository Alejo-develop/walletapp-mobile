import {Text, TouchableOpacity, View} from 'react-native';
import {useAuth} from '../../contexts/auth.context';
import styles from './styles';

interface LayoutProps {
  children: React.ReactNode;
}

const LayoutComponent = ({children}: LayoutProps) => {
  const auth = useAuth();
  const name = auth.name;

  const handlePress = () => {
    auth.signOut()
  }

  return (
    <View>
      <View style={styles.containerHeader}>
        <View style={styles.sectionLeft}>
          <Text style={styles.cashify}>Cashify</Text>
          <TouchableOpacity onPress={handlePress}>
            <Text style={{color: 'white'}}>Log Out</Text>
          </TouchableOpacity>
        </View>
        <View>
          <Text style={styles.welcome}>Welcome {name}</Text>
        </View>
      </View>

      <View style={styles.children}>{children}</View>
    </View>
  );
};

export default LayoutComponent;
