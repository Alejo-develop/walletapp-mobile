import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';

interface TabBarIconProps {
  routeName: string;
  color: string;
  size: number;
}

const TabBarIcon: React.FC<TabBarIconProps> = ({ routeName, color, size }) => {
  let iconName: string;

  switch (routeName) {
    case 'home':
      iconName = 'home';
      break;
    case 'share':
      iconName = 'share';
      break;
    default:
      iconName = 'percent';
  }

  return <Icon name={iconName} color={color} size={size} />;
};

export default TabBarIcon;