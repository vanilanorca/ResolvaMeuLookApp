import { StatusBar } from 'expo-status-bar';
import React, { useState, Component } from 'react';
import { StyleSheet, Text, View, Button, TouchableHighlight, ImageBackground, Image, Alert, SafeAreaView, ScrollView } from 'react-native';
import Modal from 'react-native-modal';
import Constants from 'expo-constants'

const axios = require('axios');
const paths = require('./assets/paths')


class App extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      isModalVisible: false,
      horoscopo: {},
      currentSign: {},
      imageHeader: {},
      ano: new Date().getFullYear(),
      dia: new Date().getDate() < 10 ? '0' + new Date().getDate() : new Date().getDate(),
      mes: (+new Date().getMonth() + 1) < 10 ? '0' + (+new Date().getMonth() + 1) : (+new Date().getMonth() + 1)
    };
  }

  componentDidMount = () => {
    axios.get('https://apiv2.resolvaclub.com/api/horoscope/test?dt=' + this.state.ano + '-' + this.state.mes + '-' + this.state.dia)
      .then((res) => {
        this.setState({
          horoscopo: res.data.result[0].horoscopes
        })
      })
  }

  

  clickBotao = (signName) => {
    this.state.horoscopo.forEach((signo) => {
      if (signo.sign == signName) {
        this.setState({
          currentSign: signo,
          isModalVisible: !this.state.isModalVisible,
        })
        if (signo.sign == 'Aquário') { this.setState({ imageHeader: paths.AQUARIO_HEADER})}
        if (signo.sign == 'Áries') { this.setState({ imageHeader: paths.ARIES_HEADER }) }
        if (signo.sign == 'Câncer') { this.setState({ imageHeader: paths.CANCER_HEADER }) }
        if (signo.sign == 'Capricórnio') { this.setState({ imageHeader: paths.CAPRICORNIO_HEADER }) }
        if (signo.sign == 'Escorpião') { this.setState({ imageHeader: paths.ESCORPIAO_HEADER }) }
        if (signo.sign == 'Gêmeos') { this.setState({ imageHeader: paths.GEMEOS_HEADER }) }
        if (signo.sign == 'Leão') { this.setState({ imageHeader: paths.LEAO_HEADER }) }
        if (signo.sign == 'Libra') { this.setState({ imageHeader: paths.LIBRA_HEADER }) }
        if (signo.sign == 'Peixes') { this.setState({ imageHeader: paths.PEIXES_HEADER }) }
        if (signo.sign == 'Sagitário') { this.setState({ imageHeader: paths.SAGITARIO_HEADER }) }
        if (signo.sign == 'Touro') { this.setState({ imageHeader: paths.TOURO_HEADER }) }
        if (signo.sign == 'Virgem') { this.setState({ imageHeader: paths.VIRGEM_HEADER }) }
      }
    });
  }


  fechar = () => {
    this.setState({
      isModalVisible: !this.state.isModalVisible
    })
  }

  error = () => {
    Alert.alert('Ops! Algo deu errado!')
  }

  render() {
    return (
      <View style={styles.container}>

        <View style={styles.header}>
          <ImageBackground source={require('./assets/imgs/app-header.png')} style={styles.headerTopImage}>
            <TouchableHighlight underlayColor="transparent" onPress={this.error}>
                <View style={styles.headerContent}>
                  <Image source={require('./assets/imgs/arrow-icon.png')} style={styles.backIcon} />
                  <Text>  Horóscopo </Text>
                </View>
            </TouchableHighlight>
          </ImageBackground>
        </View>

        <Text style={{fontSize: 13, textAlign: 'left', width: '100%', paddingLeft: 10, marginTop: 80, marginBottom: 10}}>  Escolha um signo e descubra o horóscopo do dia! </Text>

        <View style={styles.signButtonContainer}>
          <TouchableHighlight underlayColor="transparent" style={styles.signButton} onPress={() => this.clickBotao('Aquário')}>
            <View>
              <Image source={require('./assets/imgs/icon/Aquário-icon.jpg')} style={styles.signButtonImage} />
              <Text style={styles.signButtonText}>  Aquário </Text>
            </View>
          </TouchableHighlight>

          <TouchableHighlight underlayColor="transparent" style={styles.signButton} onPress={() => this.clickBotao('Áries')}>
            <View>
              <Image source={require('./assets/imgs/icon/Áries-icon.jpg')} style={styles.signButtonImage} />
              <Text style={styles.signButtonText}>  Áries </Text>
            </View>
          </TouchableHighlight>

          <TouchableHighlight underlayColor="transparent" style={styles.signButton} onPress={() => this.clickBotao('Câncer')}>
            <View>
              <Image source={require('./assets/imgs/icon/Câncer-icon.jpg')} style={styles.signButtonImage} />
              <Text style={styles.signButtonText}>  Câncer </Text>
            </View>
          </TouchableHighlight>

          <TouchableHighlight underlayColor="transparent" style={styles.signButton} onPress={() => this.clickBotao('Capricórnio')}>
            <View>
              <Image source={require('./assets/imgs/icon/Capricórnio-icon.jpg')} style={styles.signButtonImage} />
              <Text style={styles.signButtonText}>  Capricórnio </Text>
            </View>
          </TouchableHighlight>

          <TouchableHighlight underlayColor="transparent" style={styles.signButton} onPress={() => this.clickBotao('Escorpião')}>
            <View>
              <Image source={require('./assets/imgs/icon/Escorpião-icon.jpg')} style={styles.signButtonImage} />
              <Text style={styles.signButtonText}>  Escorpião </Text>
            </View>
          </TouchableHighlight>

          <TouchableHighlight underlayColor="transparent" style={styles.signButton} onPress={() => this.clickBotao('Gêmeos')}>
            <View>
              <Image source={require('./assets/imgs/icon/Gêmeos-icon.jpg')} style={styles.signButtonImage} />
              <Text style={styles.signButtonText}>  Gêmeos </Text>
            </View>
          </TouchableHighlight>

          <TouchableHighlight underlayColor="transparent" style={styles.signButton} onPress={() => this.clickBotao('Leão')}>
            <View>
              <Image source={require('./assets/imgs/icon/Leão-icon.jpg')} style={styles.signButtonImage} />
              <Text style={styles.signButtonText}>  Leão </Text>
            </View>
          </TouchableHighlight>

          <TouchableHighlight underlayColor="transparent" style={styles.signButton} onPress={() => this.clickBotao('Libra')}>
            <View>
              <Image source={require('./assets/imgs/icon/Libra-icon.jpg')} style={styles.signButtonImage} />
              <Text style={styles.signButtonText}>  Libra </Text>
            </View>
          </TouchableHighlight>

          <TouchableHighlight underlayColor="transparent" style={styles.signButton} onPress={() => this.clickBotao('Peixes')}>
            <View>
              <Image source={require('./assets/imgs/icon/Peixes-icon.jpg')} style={styles.signButtonImage} />
              <Text style={styles.signButtonText}>  Peixes </Text>
            </View>
          </TouchableHighlight>

          <TouchableHighlight underlayColor="transparent" style={styles.signButton} onPress={() => this.clickBotao('Sagitário')}>
            <View>
              <Image source={require('./assets/imgs/icon/Sagitário-icon.jpg')} style={styles.signButtonImage} />
              <Text style={styles.signButtonText}>  Sagitário </Text>
            </View>
          </TouchableHighlight>

          <TouchableHighlight underlayColor="transparent" style={styles.signButton} onPress={() => this.clickBotao('Touro')}>
            <View>
              <Image source={require('./assets/imgs/icon/Touro-icon.jpg')} style={styles.signButtonImage} />
              <Text style={styles.signButtonText}>  Touro </Text>
            </View>
          </TouchableHighlight>

          <TouchableHighlight underlayColor="transparent" style={styles.signButton} onPress={() => this.clickBotao('Virgem')}>
            <View>
              <Image source={require('./assets/imgs/icon/Virgem-icon.jpg')} style={styles.signButtonImage} />
              <Text style={styles.signButtonText}>  Libra </Text>
            </View>
          </TouchableHighlight>
        </View>

        <Modal
          isVisible={this.state.isModalVisible}
          swipeDirection="down"
          onSwipeComplete={(e) => { this.setState({ isModalVisible: !this.state.isModalVisible})  }}>
          
          <View style={styles.modal}>
            
              <View style={styles.DragIndicator}></View>
                <ImageBackground source={this.state.imageHeader} style={styles.headerImage}>
                      <TouchableHighlight underlayColor="transparent" style={styles.closeButton} onPress={this.fechar}>
                        <Image source={require('./assets/imgs/close-icon.png')} style={styles.closeButtonX} />
                      </TouchableHighlight>
                </ImageBackground>
              

              
                <View style={styles.modalInfo}>
                  
                    <Text style={styles.signName}>{this.state.currentSign.sign}</Text>
                    <Text style={styles.date}>{this.state.dia + ' / ' + this.state.mes + ' / ' + this.state.ano}</Text>
                    <Text style={styles.description}>{this.state.currentSign.description}</Text>

                    <Image source={require('./assets/imgs/img-1.jpg')} style={styles.commomImage} />

                    <TouchableHighlight underlayColor="black" style={styles.verTodos} onPress={this.fechar}>
                      <Text style={styles.verTodosText}>  Veja o horóscopo de outros signos!</Text>
                    </TouchableHighlight>
                </View>
            </View>
        </Modal>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  headerTopImage: {
    width: '100%',
    borderTopLeftRadius: 50,
    alignItems: 'flex-start',
  },
  header: {
    position: 'absolute',
    top: 0,
    width:'100%',
    height: 70,
    marginTop: Constants.statusBarHeight,
  },
  headerContent:{
    height: '100%',
    paddingLeft: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  backIcon: {
    transform: [{ rotate: '180deg' }],
    width: '20%',
    height: '20%'
  },

  signButtonContainer:{
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    width: '90%',
    height: '80%',
  },
  signButton:{
    width: 100,
    height: 130,
    marginBottom: 20
  },
  signButtonText: {
    color: "#000",
    fontSize: 16,
    textAlign: 'center',
    marginTop: 5
  },
  signButtonImage: {
    width: 100,
    height: 100,
    borderRadius: 50
  },

  DragIndicator:{
    width: 100,
    height: 5,
    backgroundColor: '#ababab',
    position: 'absolute',
    top: -15,
    borderRadius: 50
  },
  modal:{
    alignItems: "center",
    justifyContent: "center",
    position: 'absolute',
    bottom: -20,
    left: '-5%', 
    backgroundColor: 'white',
    height: '97%',
    width: '110%',
  },
  closeModal:{
    position: 'absolute',
    top: 0,
    right: 0,
    width: 20,
    height: 50,
  },
  

  
  headerImage: {
    position: 'absolute',
    top: 0,
    width: '100%',
    height: 200,
    borderTopLeftRadius: 50
  },

  closeButton:{
    position: 'absolute',
    right: 5,
    height: 40,
    width: 40,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 15
  },
  closeButtonX:{
    height: 25,
    width: 25,
  },
  closeButtonText: {
    color: "#fff",
    fontSize: 16,
  },




  modalInfo:{
    alignItems: "center",
    justifyContent: "space-around",
    marginTop: '48%',
    width: "99%",
    height: '65%',
  },
  signName:{
    fontWeight: 'bold',
    fontSize: 25,
    letterSpacing: 1,
  },
  date:{
    fontSize: 16,
    marginTop: 5,
  },
  description:{
    textAlign: 'center',
    width: '85%',
    marginTop: 5,
  },

  commomImage:{
    width: '70%',
    height: '50%',
    marginTop: 20
  },


  verTodos: {
    backgroundColor: "#3a383a",
    borderRadius: 50,
    height: 40,
    width: "90%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 15
  },
  verTodosText: {
    color: "#fff",
    fontSize: 16,
  },
});

export default App;


//https://stackoverflow.com/questions/60647843/how-to-implement-modal-swipe-to-down-like-instagram
//https://github.com/react-native-modal/react-native-modal/blob/master/README.md