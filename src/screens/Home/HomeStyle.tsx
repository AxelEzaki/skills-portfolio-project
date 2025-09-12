import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    minHeight: '100%'
  },
  labelBio: {
    fontSize: 16,
    fontWeight: 'thin',
    textAlign: 'justify'
  },
  textContainer: {
    paddingHorizontal: 35
  },
  buttonLinksContainer: {
    width: '85%',
    flexDirection: 'column',
    gap: 3,
    alignItems: 'center'
  }
});

export const styleButtonNavigation = StyleSheet.create({
  buttonNavigationPortfolio: {
    width: '85%',
    backgroundColor: 'grey',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    height: 'auto',
    padding: 10,
    margin: 10
  },
  textNavigate: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 25
  }
})