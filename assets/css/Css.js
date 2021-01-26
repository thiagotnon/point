import { StyleSheet } from 'react-native';

const css = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  containerFlexRow: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textPage: {
    backgroundColor: 'white',
    padding: 20,
    textAlign: 'center'
  },
  buttonIcon: {
    width: 50,
    height: 50,
  },
  button__home: {
    margin: 50,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  login__logo: {
    width: 130,
    height: 140,
    marginBottom: 10
  },
  pointBg: {
    backgroundColor: '#2680eb',
  },
  login__msg: (text = 'none') => ({
    color: '#FFF1F4',
    backgroundColor: '#FF2451',
    padding: 10,
    borderRadius: 10,
    marginBottom: 15,
    marginTop: 10,
    display: text
  }),
  login__form: {
    width: "80%",

  },
  login__input: {
    backgroundColor: '#1E70D2',
    padding: 15,
    marginBottom: 15,
    borderRadius: 10,
  },
  login__button: {
    backgroundColor: '#fff',
    color: '#1E70D2',
    padding: 12,
    borderRadius: 10,
  },
  login__buttonText: {
    textAlign: 'center',
    fontSize: 22,
    color: '#1E70D2',
  },
});

export { css };