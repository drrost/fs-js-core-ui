import React from 'react'
import PropTypes from 'prop-types'


export default function HelloWorld(props) {
    const {
        greetee = 'World'
    } = props

    return (
        <div>Hello, {greetee}!</div>
    )
}

// See more about PropType validation here:
// https://reactjs.org/docs/typechecking-with-proptypes.html

HelloWorld.propTypes = {
    greetee: PropTypes.string
}

export {Label} from '../../src/lib/components/atoms/Label/Label';
export {Checkbox} from '../../src/lib/components/atoms/Checkbox/Checkbox';

export {getFullClassName} from '../../src/lib/utils/utils';

