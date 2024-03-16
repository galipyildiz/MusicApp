import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  innerContainer: {
    padding: 10,
    flex: 1,
    justifyContent: 'center',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 27,
  },
  infoContainer: {
    flex: 1,
    flexDirection: 'row',
  },
  year: {
    marginLeft: 10,
  },
  soldoutContainer: {
    borderWidth: 1,
    borderColor: 'red',
    padding: 5,
    borderRadius: 5,
  },
  soldoutText: {
    color: 'red',
  },
  content: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
