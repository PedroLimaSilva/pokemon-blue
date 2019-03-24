import React, { Component } from 'react';

import Background from '../sprites/route1.jpg';

import { Character } from './Character';

import { gameState } from '../state/store';

export const TILE_SIZE = 16;

export class Screen extends Component {

    x_tiles = 10;
    y_tiles = 9;

    state = gameState.getState();

    unsubscribe = gameState.subscribe(() => {
        this.setState(gameState.getState())
    })

    get screen_height() {
        return this.y_tiles * TILE_SIZE;
    }

    get screen_width() {
        return this.x_tiles * TILE_SIZE;
    }

    get screenStyle() {
        return {
            width: this.screen_width,
            height: this.screen_height,
            backgroundImage: 'url(' + Background + ')',
            backgroundPositionX: TILE_SIZE * (this.state.character.position.x + 6) + 'px',
            backgroundPositionY: TILE_SIZE * (this.state.character.position.y + 5) + 'px',
        };
    };

    render() {
        return (
            <div style={this.screenStyle} className="Screen">
                <Character />
            </div>
        );
    }
}
