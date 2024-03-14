import { IStackStyles, IStackTokens, Label, Stack } from "@fluentui/react";
import React = require("react");

const stackTokens: IStackTokens = {};
const stackStyles: Partial<IStackStyles> = { root: { width: '100%' } };

export interface IBrandingComponent {
    LastLoginAt: string;
    TotalHours: string;
    LoggedInUserName: string;
}

export const BrandingComponent: React.FunctionComponent<IBrandingComponent> = (props) => {
    const { LastLoginAt, TotalHours, LoggedInUserName } = props;
    return (
        <Stack verticalFill tokens={stackTokens} styles={stackStyles} verticalAlign="end">
            <Stack horizontal>
                <Stack>
                    <Label>Last Report was made at {LastLoginAt} | </Label>
                </Stack>
                <Stack>                    
                </Stack>
                <Stack verticalFill verticalAlign="end">
                    <Label>Total Hours</Label>
                    <Label>{TotalHours}</Label>
                </Stack>
            </Stack>
            <Stack>
                <Label> Sync Projects Ltd.</Label>
                <Label> {LoggedInUserName}</Label>
            </Stack>
        </Stack>
    );
}