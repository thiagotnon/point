import { StyleSheet } from 'react-native';

const css = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  containerTop: {
    justifyContent: 'flex-start',
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
  area__tab: {
    backgroundColor: '#1E70D2',
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FFF',
  },
  area__menu: {
    flexDirection: 'row',
    paddingTop: 40,
    paddingBottom: 10,
    width: '100%',
    backgroundColor: '#1E70D2',
    alignItems: 'center',
    justifyContent: 'center'
  },
  button__home_page: {
    textAlign: 'left'
  },
  area__title: {
    width: '80%',
    fontWeight: 'bold',
    fontSize: 20,
    color: '#fff',
    textAlign: 'center'
  },
  button__logout: {
    textAlign: 'right'
  },
  container__form__profile: {
    width: '90%',
    marginTop: 10
  },
  profile__input: {
    backgroundColor: '#f5f5f5',
    padding: 15,
    marginBottom: 15,
    borderRadius: 10,
  },
  profile__button: {
    backgroundColor: '#1E70D2',
    padding: 12,
    borderRadius: 10,
  },
  profile__buttonText: {
    textAlign: 'center',
    fontSize: 20,
    color: '#FFF',
  },
  profile__error__msg: (text = 'none') => ({
    color: '#FFF1F4',
    backgroundColor: '#FF2451',
    padding: 10,
    borderRadius: 10,
    marginBottom: 15,
    marginTop: 10,
    display: text,
    textAlign: 'center',
  }),
  profile__success__msg: (text = 'none') => ({
    color: '#FFF1F4',
    backgroundColor: '#009414',
    padding: 10,
    borderRadius: 10,
    marginBottom: 15,
    marginTop: 10,
    display: text,
    textAlign: 'center',
  }),
  share__button: {
    color: '#FFF1F4',
    backgroundColor: '#009414',
    padding: 10,
    borderRadius: 10,
    marginBottom: 15,
    marginTop: 10,
    textAlign: 'center',
  },
});

export { css };