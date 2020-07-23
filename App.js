import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Alert } from 'react-native';

export default class App extends Component {

  constructor(props){
    super(props);

    this.state = {
      gameState: [
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0]
      ],
      currentPlayer: 1,
    }
  }

  componentDidMount() {
    this.initializeGame(); 
  }

  initializeGame = () => {
    this.setState({gameState: 
      [
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0]
      ],
      currentPlayer: 1,
    });
  }

  // returns 1 if player 1 won; -1 if player 2 won; 0 if no one has won
  getWinner = () => { 
    const numTiles = 3;
    var array = this.state.gameState;
    var sum;

    //check collumns
    for (var i = 0; i < numTiles; i++) {
      sum = array[0][i] + array[1][i] +array[2][i];
      if(sum == 3) {
        return 1;
      }
      else if(sum == -3){
        return -1;
      }
    }

    //check rows
    for (var i = 0; i < numTiles; i++) {
      sum = array[i][0] + array[i][1] +array[i][2];
      if(sum == 3) {
        return 1;
      }
      else if(sum == -3){
        return -1;
      }
    }

    //check diagonals
    sum = array[2][0] + array[1][1] + array[0][2];
    if(sum == 3) {
      return 1;
    }
    else if(sum == -3){
      return -1;
    }

    sum = array[0][0] + array[1][1] + array[2][2];
    if(sum == 3) {
      return 1;
    }
    else if(sum == -3){
      return -1;
    }

    //there is a tie
    return 0;
  }

  onTilePress = (row, col) => {
    //don't allow tiles to change
    var value = this.state.gameState[row][col];
    if(value !== 0) {
      return;
    }

    //grab current player
    var currentPlayer = this.state.currentPlayer;

    //set the correct tile
    var array = this.state.gameState.slice();
    array[row][col] = currentPlayer;
    this.setState({gameState: array})

    //switch to other player
    var nextPlayer = (currentPlayer == 1) ? -1 : 1;
    this.setState({currentPlayer: nextPlayer})

    //check for winners
    var winner = this.getWinner();
    if(winner == 1) {
      Alert.alert("Player 1 is the winner");
      this.initializeGame();
    }
    else if(winner == -1) {
      Alert.alert("Player 2 is the winner");
      this.initializeGame();
    }
  }

  onNewGamePress = () => {
    this.initializeGame();
  }

  renderIcon = (row, col) => {
    var value = this.state.gameState[row][col];
    switch(value)
    {
      case 1: return <Image source={require('./public/close.png')} style={styles.icons}/>;
      case -1: return <Image source={require('./public/dot.png')} style={styles.icons}/>;
      default: return <View />;
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={{flexDirection: "row"}}>
          <TouchableOpacity onPress={() => this.onTilePress(0, 0)} style={[styles.tile, {borderLeftWidth: 0, borderTopWidth: 0}]}>
            {this.renderIcon(0, 0)}
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.onTilePress(0, 1)} style={[styles.tile, {borderTopWidth: 0}]}>
            {this.renderIcon(0, 1)}
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.onTilePress(0, 2)} style={[styles.tile, {borderRightWidth: 0, borderTopWidth: 0}]}>
            {this.renderIcon(0, 2)}
          </TouchableOpacity>
        </View>

        <View style={{flexDirection: "row"}}>
          <TouchableOpacity onPress={() => this.onTilePress(1, 0)} style={[styles.tile, {borderLeftWidth:0}]}>
            {this.renderIcon(1, 0)}
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.onTilePress(1, 1)} style={styles.tile}>
            {this.renderIcon(1, 1)} 
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.onTilePress(1, 2)} style={[styles.tile, {borderRightWidth: 0}]}>
            {this.renderIcon(1, 2)}
          </TouchableOpacity>
        </View>

        <View style={{flexDirection: "row"}}>
          <TouchableOpacity onPress={() => this.onTilePress(2, 0)} style={[styles.tile, {borderLeftWidth: 0, borderBottomWidth: 0}]}>
            {this.renderIcon(2, 0)}
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.onTilePress(2, 1)} style={[styles.tile, {borderBottomWidth: 0}]}>
            {this.renderIcon(2, 1)}
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.onTilePress(2, 2)} style={[styles.tile, {borderRightWidth: 0, borderBottomWidth: 0}]}>
            {this.renderIcon(2, 2)}
          </TouchableOpacity>
        </View>

        <TouchableOpacity onPress={() => this.onNewGamePress()} style={styles.reset}>
          <Text style={styles.text}>Restart Game</Text>
        </TouchableOpacity>
      </View>
    ) 
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f4f4f4',
    alignItems:'center',
    justifyContent:'center'
  },

  tile: {
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 5,
    width: 100,
    height: 100
  },

  icons: {
    height: 50,
    width: 50
  },

  text: {
    fontFamily: 'roboto',
    fontSize: 25
  },

  reset: {
    alignItems: 'center',
    marginTop: 80,
    justifyContent: 'center',
    width: 200,
    height: 50,
    borderRadius: 20,
    backgroundColor: '#6ab04c'
  }
});