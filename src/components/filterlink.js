import React from 'react'
import {setVisible} from '../redux/actions'
import {connect} from 'react-redux'

const filterlink = ({title, actiontype, dispatch}) => (
    <a href="#" onClick={() => dispatch(setVisible(actiontype))}>
        {title}
    </a>
)   


export default connect()(filterlink)
