import React from 'react'
import { ShireContext } from '../../contexts'
import useForm from '../../hooks/useForm.js'


function CharacterForm() {
    return (
    <ShireContext.Consumer>
      { props => {
        if (props.addChar) {
            return (<form>
                <input type="text" name="text" value='' onChange=''/> 
                <input type="text" age="text" value='' onChange=''/>
                <input type="text" weapon="text" value='' onChange=''/>
            </form>
            )
          }
          else {
            return (
               <button onClick={useForm}>Add character</button>
            )
          } 
        }
      }
    </ShireContext.Consumer>
    )
}

export default CharacterForm
