import React, {useState} from 'react'
import {Checkbox, Label} from "./lib";

const App = () => {

    const [checkboxSelected, setCheckboxSelected] = useState(false);

    return (
        <>
            <Label
                title={'Some text'}
                type={'HEADING'}
                subtype={'L'}
            />
            <Checkbox
                title={'Hit me'}
                selected={checkboxSelected}
                onChange={setCheckboxSelected}
            />
        </>
    )
}

export default App
