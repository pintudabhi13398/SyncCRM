import { ILabelStyleProps, ILabelStyles, IStackStyles, IStackTokens, Label, Stack } from "@fluentui/react";
import React = require("react");

const stackTokens: IStackTokens = { };
const stackStyles: Partial<IStackStyles> = { root: { width: '100%' } };


const logUserStackStyle: Partial<IStackStyles> = {
    root: {
        height: '50px',
        backgroundColor: '#eceaeb',
        color: '#5d5d5d',
        textAlign: 'right'
    }
};

const reportingStackStyle: Partial<IStackStyles> = {
    root: {
        height: '50px',
        backgroundColor: '#005395',
        color: '#fff',
        textAlign: 'right'
    }
};

const loggedInUserLabelStyles: Partial<ILabelStyles> = {
    root: {
        color: '#000',
        margin: '10px'
    }
}

const reportingPreLabelStyles: Partial<ILabelStyles> = {
    root: {
        color: '#fff',
        margin: '10px'
    }
}

export interface ILoogedInUserHeader {
    LoggedInUser: string;
}

export const LoogedInUserHeader: React.FunctionComponent<ILoogedInUserHeader> = (props) => {
    const { LoggedInUser } = props;
    return (
        <Stack verticalFill tokens={stackTokens} styles={stackStyles} verticalAlign="end">
            <Stack styles={logUserStackStyle}>
                <Label styles={loggedInUserLabelStyles}>Hello, {props.LoggedInUser}</Label>
            </Stack>

            <Stack styles={reportingStackStyle}>
                <Label styles={ reportingPreLabelStyles}> Reporting Presence</Label>
            </Stack>
        </Stack>

    );
}