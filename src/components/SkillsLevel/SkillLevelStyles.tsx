import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    gap: 5,
    minWidth: '100%'
  },
  starContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    gap: 2
  }
});

export const styleImages = StyleSheet.create({
    imageLogo: {
        height: 40,
        width: 40
    },
    imageStar: {
        height: 40,
        width: 40
    },
})