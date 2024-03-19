import React = require("react")

interface IColoredLine {
    border: string,
    height?: string,
    width: string,
    margin?: string,
    padding?: string
}

export const ColoredLine: React.FunctionComponent<IColoredLine> = (props) => {
    return (
        <hr style={{
            'border': props.border,
            height: props.height,
            width: props.width,
            margin: props.margin,
            padding: props.padding
        }}></hr>
    )
}