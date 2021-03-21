import React, {Component} from 'react'
import {patchy, plain, skinny, slender, sporty, spotted, stocky, striped} from '../assets/index'

const propertyMap = {
    backgroundColor: {black: '#263238', 
        white: '#CFD8DC', 
        green: '#A5D6A7', 
        red: '#DD6711', 
        blue: '#0277BD'},
    build: {slender, skinny, sporty, stocky},
    pattern: {plain, striped, spotted, patchy},
    size: {small: 100, big: 150, giant: 200}
}

class DragonAvatar extends Component {
    get DragonImage() {
        const dragonPropertyMap = {}
        this.props.dragon.traits.forEach(trait => {
            const {traitType, traitValue} = trait
            dragonPropertyMap[traitType] = propertyMap[traitType][traitValue]
        })
        const {backgroundColor, build, pattern, size} = dragonPropertyMap
        const sizing = {width: size, height: size}
        return(
        <div className="dragon-avatar-image-wrapper">
            <div className='dragon-avatar-image-background' style={{backgroundColor: backgroundColor, width: sizing.width, height: sizing.height}}></div>
            <img src={pattern} className='dragon-avatar-image-pattern' style={{width: sizing.width, height: sizing.height}}/>
            <img src={build} className='dragon-avatar-image' style={{width: sizing.width, height: sizing.height}}/>
        </div>
        )
    }
    render(){
        const {generationId, dragonId, traits} = this.props.dragon
        if(!dragonId) return <div></div>
        return(
            <div>
                <span>G{generationId}.</span>
                <span>I{dragonId}. </span>

                {traits.map(trait => trait.traitValue).join(', ')}
                {this.DragonImage}
            </div>
        )
    }
}

export default DragonAvatar