import { StyleSheet } from "react-native";
import { height, primaryColor, secondaryColor, width } from "../../utils/constants/style.constants";

export const styles = StyleSheet.create({
    button: {
      backgroundColor: secondaryColor,
      paddingVertical: height * 0.018,
      paddingHorizontal: width * 0.042,
      width: width * 0.480,
      borderRadius: 10,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 4 },
      shadowOpacity: 0.3,
      shadowRadius: 5,
      elevation: 6, 
    },
    buttonContent: {
      textAlign: 'center',
      fontSize: height * 0.016,
      fontWeight: '300',
      color: primaryColor,
    },
  });