import { Text, TouchableOpacity } from "react-native";
import { styles } from "./style";
import { ButtonProps } from "../../interfaces/button.props";

const ButtonComponent = ({ text, onPress }: ButtonProps) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.buttonContent}>{text}</Text>
    </TouchableOpacity>
  );
};

export default ButtonComponent;
