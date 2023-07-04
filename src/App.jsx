import React, {useState} from 'react'
import {Button, ButtonType, Checkbox, Label} from "./lib";
import {LabelSubtype, LabelType} from "./lib/components/atoms/Label/Label";

const App = () => {

    const [checkboxSelected, setCheckboxSelected] = useState(false);

    return (
        <>
            <Label
                title={'Heading L'}
                type={LabelType.HEADING}
                subtype={LabelSubtype.L}
            /><br/>
            <Label
                title={'Heading M'}
                type={LabelType.HEADING}
                subtype={LabelSubtype.M}
            /><br/>
            <Label
                title={'Heading S'}
                type={LabelType.HEADING}
                subtype={LabelSubtype.S}
            /><br/>

            <Label
                title={'Regular 20'}
                type={LabelType.REGULAR}
                subtype={LabelSubtype["20"]}
            /><br/>
            <Label
                title={'Regular 18'}
                type={LabelType.REGULAR}
                subtype={LabelSubtype["18"]}
            /><br/>
            <Label
                title={'Regular 16'}
                type={LabelType.REGULAR}
                subtype={LabelSubtype["16"]}
            /><br/>
            <Label
                title={'Regular 12'}
                type={LabelType.REGULAR}
                subtype={LabelSubtype["12"]}
            /><br/>

            <Checkbox
                title={'Hit me'}
                selected={checkboxSelected}
                onChange={setCheckboxSelected}
            />

            <Button type={ButtonType.PRIMARY} title={'PRIMARY'}/>
            <Button type={ButtonType.SECONDARY} title={'SECONDARY'}/>
            <Button type={ButtonType.DESTRUCTIVE} title={'DESTRUCTIVE'}/>
        </>
    )
}

export default App
