import React, { useRef } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { GameEngine } from 'react-native-game-engine';
import Matter from 'matter-js';
import Bird from '../components/Bird';
import Wall from '../components/Wall';
import Physics from '../components/Physics';
import Constants from '../Constants';

const GameScreen = () => {
  const gameEngineRef = useRef(null);
  setupWorld = () => {
    let engine = Matter.Engine.create({ enableSleeping: false });
    let world = engine.world;

    let bird = Matter.Bodies.rectangle( Constants.MAX_WIDTH / 4, Constants.MAX_HEIGHT / 2, 50, 50);
    let floor = Matter.Bodies.rectangle(Constants.MAX_WIDTH / 2, Constants.MAX_HEIGHT - 75, Constants.MAX_WIDTH, 50, { isStatic: true});
    let ceiling = Matter.Bodies.rectangle(Constants.MAX_WIDTH / 2, 25, Constants.MAX_WIDTH, 50, { isStatic: true });

    Matter.World.add(world, [bird, floor]);


    return {
        physics: { engine: engine, world: world },
        bird: { body: bird, size: [50, 50], color: 'red', renderer: Bird },
        floor: { body: floor, size: [Constants.MAX_WIDTH, 50], color: 'green', renderer: Wall },
        // ceiling: { body: ceiling, size: [Constants.MAX_WIDTH, 50], color: 'green', renderer: Wall }
    }
}
;
  const entities = setupWorld();

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <GameEngine 
        ref={gameEngineRef}
        entities={entities}
        style={styles.gameContainer}
        systems={[Physics]}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
      flex: 1,
      backgroundColor: '#fff',
  },
  gameContainer: {
      position: 'absolute',
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
  },
});

export default GameScreen;