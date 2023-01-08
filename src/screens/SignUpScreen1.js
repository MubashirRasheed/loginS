import React, {Component} from 'react';
import {Text, View, StyleSheet, TouchableOpacity, Image} from 'react-native';
import {colors} from '../config/Colors';
import Icon from 'react-native-vector-icons/FontAwesome';
import PrimaryInputForm from '../components/PrimaryInputForm';
import PrimaryButton from '../components/PrimaryButton';


export class SignUpScreen1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      languageModalVisible: false,
    };
    
  }

  handleClick = () => {
    this.setState({languageModalVisible: !this.state.languageModalVisible});
  };
  
   
  
  render() {
    
    return (
      
      <View style={styles.container}>
        <View style={styles.sectionTop}>
          <View style={styles.languageContainer}>
            <TouchableOpacity
              onPress={() => {
                this.handleClick();
              }}>
              <Text>
                <Text>English (United States) </Text>
                <Icon name="caret-down" />
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.sectionMiddle}>
          <View>
            <Image
              resizeMode={'contain'}
              style={styles.instaLogo}
              source={require('../assets/images/spectrumLogo.png')}
            />
          </View>

          <View style={styles.inputItem}>
            <PrimaryInputForm
              placeHolderText={'User Name'}
            />
          </View>

          <View style={styles.inputItem}>
            <PrimaryInputForm
              placeHolderText={'Email'}
            />
          </View>

          <View style={styles.inputItem}>
            <PrimaryInputForm placeHolderText={'Password'} />
          </View>

          <View style={styles.inputItem}>
            <PrimaryButton
              buttonBg={colors.primary}
              text={colors.secondary}
              label={'Sign Up'}
            />
          </View>

          <View style={styles.inputItem}>
            <Text style={styles.subTitle}>
              
              
            </Text>
            
          </View>
          
        </View>

        <View style={styles.sectionBottom}>
          <View style={styles.bottomContainer}>
            <Text style={styles.subTitle}>
              <Text style={styles.noAccount}>Already Have an account?</Text>{' '}
              <TouchableOpacity onPress={() => {navigation.navigate('login')}}>
                  <Text style={styles.link}>Login.</Text>
              </TouchableOpacity>
              
            </Text>
          </View>
        </View>
      </View>
    );
  }
}

export default SignUpScreen1;

export const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
  },
  sectionTop: {
    display: 'flex',
    flex: 1,
  },
  sectionMiddle: {
    display: 'flex',
    flex: 1,
    justifyContent: 'center',
  },
  sectionBottom: {
    display: 'flex',
    flex: 1,
    justifyContent: 'flex-end',
  },
  languageContainer: {
    display: 'flex',
    flex: 1,
    alignItems: 'center',
  },
  instaLogo: {
    width: '100%',
    height: '70%',
    alignSelf: 'center',
  },
  inputItem: {
    marginBottom: 10,
    marginLeft: 10,
    marginRight: 10,
  },
  subTitle: {
    textAlign: 'center',
  },
  forgotPasswordText: {
    color: colors.gray,
  },
  link: {
    color: colors.primary,
  },
  subTitleOR: {
    textAlign: 'center',
    margin: 15,
  },
  bottomContainer: {
    borderTopWidth: 1,
    borderColor: colors.gray1,
    padding: 15,
  },
  noAccount: {
    color: colors.gray,
  },
});
