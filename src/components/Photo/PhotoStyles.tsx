import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  imagem: {
    height: 200,
    width: 200,
    borderWidth: 5,
    borderColor: 'black',
    borderRadius: 100,
    resizeMode: 'cover',
  },
  labelName: {
    fontSize: 50,
    fontWeight: 'bold'
  }
});