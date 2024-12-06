import {Text, View} from 'react-native';
import {useAuth} from '../../contexts/auth.context';
import styles from './styles';

interface LayoutProps {
  children: React.ReactNode;
}

const LayoutComponent = ({children}: LayoutProps) => {
  const auth = useAuth();
  const name = auth.name;
  return (
    <View>
      <View style={styles.containerHeader}>
        <Text style={styles.cashify}>Cashify</Text>
        <View>
          <Text style={styles.welcome}>
            Welcome{' '}
            {name}
          </Text>
        </View>
      </View>

      <View style={styles.children}>{children}</View>
    </View>
  );
};

export default LayoutComponent;
