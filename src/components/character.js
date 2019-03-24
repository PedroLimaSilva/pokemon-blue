import React, { Component } from 'react';

import { gameState } from '../state/store';


import CharacterSprite from '../sprites/char_main.png';

import { TILE_SIZE } from './Screen';

export class Character extends Component {

    state = gameState.getState();

    unsubscribe = gameState.subscribe(() =>
        this.setState(gameState.getState())
    )

    get characterStyle() {
        return {
            width: TILE_SIZE,
            height: TILE_SIZE,
            backgroundImage: 'url(' + CharacterSprite + ')',
            backgroundPositionY: this.characterDirection(),
            transform: this.characterTransform(),
            top: 'calc( 4 * ' + TILE_SIZE + 'px)',
            left: 'calc( 4 * ' + TILE_SIZE + 'px)'
        }
    }

    characterTransform(){
        let scaleX = (this.state.character.position.f === 'E') ? -1 : 1;
        return 'scaleX(' + scaleX + ')';
    }

    characterDirection() {
        switch (this.state.character.position.f) {
            case 'S':
                return -TILE_SIZE * 0;
            case 'E':
                return -TILE_SIZE * 2;
            case 'W':
                return -TILE_SIZE * 2;
            case 'N':
            default:
                return -TILE_SIZE * 1;
        }
    }

    render() {
        return (
            <div style={this.characterStyle} className="Character">
            </div>
        );
    }
}