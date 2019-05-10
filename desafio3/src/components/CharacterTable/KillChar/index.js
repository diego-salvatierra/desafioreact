import React from 'react'
import { ShireContext } from '../../../contexts'

// Renders kill button
const KillChar = (props) => (
    <ShireContext.Consumer>
      { context => (
        <div id={props.name} onClick={context.handleKillChar}>☠ Kill</div>
      )
      }
    </ShireContext.Consumer>
    )   


export default KillChar

