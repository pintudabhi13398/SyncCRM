import { IButtonStyles, IStackStyles, IStackTokens, Label, PrimaryButton, Stack } from "@fluentui/react";
import React = require("react");
import { ColoredLine } from "./CloredLine";
import { CustomeDialog } from "./CustomeDialog";

const stackTokens: IStackTokens = {};
const stackStyles: Partial<IStackStyles> = { root: { width: '100%' } };
const cardStackStyle: Partial<IStackStyles> = {
    root: {
        'border': '1px solid #dbdbdb',
        'margin': '14px',
        'border-radius': '0.3rem',
        'background-color': '#f3f8f9'
    }
}
const buttonStackStyle: Partial<IStackStyles> = {
    root: {
        'margin-bottom': '1rem'
    }
}
const reportHeaderStack: Partial<IStackStyles> = {
    root: {
        marginTop: '0.5rem'
    }
}
const reportStackStyle: Partial<IStackStyles> = {
    root: {
        'width': '50%',
    }
}
const cardDateStackStyle: Partial<IStackStyles> = {
    root: {
        'width': '50%',
    }
}
const startButtonStyles: Partial<IButtonStyles> = {
    root: {
        'background-color': '#FF0000',
        'border-color': '#FF0000',
        'color': 'rgb(255, 255, 255)',
    },
    rootHovered: {
        'background-color': '#e10101',
        'border-color': '#e10101',
        'color': 'rgb(255, 255, 255)'
    },
    rootPressed: {
        'background-color': 'rgb(191 0 0)',
        'border-color': '#e10101',
        'color': 'rgb(255, 255, 255)'
    }
};
const endButtonStyles: Partial<IButtonStyles> = {
    root: {
        'background-color': '#00CA00',
        'border-color': '#00CA00',
        'color': 'rgb(255, 255, 255)',
    },
    rootHovered: {
        'background-color': '#00a800',
        'border-color': '#00a800',
        'color': 'rgb(255, 255, 255)'
    },
    rootPressed: {
        'background-color': 'rgb(1 143 1)',
        'border-color': '#00a800',
        'color': 'rgb(255, 255, 255)'
    }
}

export interface IBrandingComponent {
    LastLoginAt: string;
    TotalHours: string;
    LoggedInUserName: string;
}

export const BrandingComponent: React.FunctionComponent<IBrandingComponent> = (props) => {
    const { LastLoginAt, TotalHours, LoggedInUserName } = props;
    const [hideDialog, setHideDialog] = React.useState<boolean>(true);
    const [startTime, setStartTime] = React.useState<Date | number>();
    const [elapsedTime, setElapsedTime] = React.useState<number>(0);
    const [currentDate, setCurrentDate] = React.useState<Date | string>(new Date());
    const [totalHours, setTotalHours] = React.useState<string>(TotalHours);
    const [lastReportTime, setLastReportTime] = React.useState<string>('');
    let intervalId: any;
    React.useEffect(() => {
        if (startTime) {
            // Start a timer to update elapsed time every second
            intervalId = setInterval(() => {
                const currentTime = new Date().getTime();
                const timePassed = currentTime - (startTime as number);
                setElapsedTime(timePassed);
            }, 1000);
        }

        // Clean up the interval when component  unmounts or when start time is reset
        return () => clearInterval(intervalId);
    }, [startTime]);
    const handleStart = () => {
        // Set start time when the user clicks the start button
        setStartTime(new Date().getTime());
    };
    const handleEnd = () => {
        // Splitting the time string into hours, minutes, and seconds
        const [h1, m1, s1] = totalHours.split(':').map(Number);

        // Creating a Date object from the timestamp
        const date = new Date(elapsedTime);

        // Extracting hours, minutes, and seconds from the Date object
        const h2 = date.getUTCHours();
        const m2 = date.getUTCMinutes();
        const s2 = date.getUTCSeconds();

        // Calculating total seconds for each time
        const totalSeconds1 = h1 * 3600 + m1 * 60 + s1;
        const totalSeconds2 = h2 * 3600 + m2 * 60 + s2;

        // Adding the total seconds
        const totalSecondsResult = totalSeconds1 + totalSeconds2;

        // Converting the total seconds back to hours, minutes, and seconds
        const hoursResult = Math.floor(totalSecondsResult / 3600);
        const minutesResult = Math.floor((totalSecondsResult % 3600) / 60);
        const secondsResult = totalSecondsResult % 60;

        // Formatting the result
        const formattedResult = `${String(hoursResult).padStart(2, '0')}:${String(minutesResult).padStart(2, '0')}:${String(secondsResult).padStart(2, '0')}`;
        setTotalHours(formattedResult);
        clearInterval(intervalId);
        setStartTime(0);
        setElapsedTime(0);
    }

    const getFormattedDate = () => {
        var dd: string | number = (currentDate as Date).getDate();
        dd = dd < 10 ? 0 + '' + dd : dd;
        var mm: string | number = (currentDate as Date).getMonth() + 1;
        const yyyy = (currentDate as Date).getFullYear();
        mm = mm < 10 ? 0 + '' + mm : mm;
        return `${dd}-${mm}-${yyyy}`;
    };

    const formatElapsedTime = (time: number) => {
        // Format elapsed time in hours, minutes, and seconds
        const seconds = Math.floor((time / 1000) % 60);
        const minutes = Math.floor((time / (1000 * 60)) % 60);
        const hours = Math.floor(time / (1000 * 60 * 60));

        return `${hours.toString().padStart(2, '0')}:${minutes
            .toString()
            .padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    };
    const toggleHideDialog = (e: any) => {
        setHideDialog(false);
    }
    return (
        <>
            {!hideDialog && <CustomeDialog title={"Select Project"} hideDialog={hideDialog} toggleHideDialog={function (): void {
                setHideDialog(true);
            }} />}
            <Stack verticalFill tokens={stackTokens} styles={stackStyles} verticalAlign="end">
                <Stack styles={reportHeaderStack} horizontal horizontalAlign="space-around">
                    <Stack styles={reportStackStyle} verticalAlign="center">
                        <Label>Last Report was made at {LastLoginAt} </Label>
                    </Stack>
                    {/* <Stack>
                    </Stack> */}
                    <ColoredLine border="0.001rem solid #cec8c8" margin="0" padding="0" width="0" />
                    <Stack styles={reportStackStyle} verticalFill verticalAlign="end" >
                        <Label>Total Hours</Label>
                        <Label>{totalHours}</Label>
                    </Stack>
                </Stack>
                <Stack styles={cardStackStyle} verticalFill verticalAlign="center">
                    <Stack>
                        <Label> Sync Projects Ltd.</Label>
                        <Label> {LoggedInUserName}</Label>
                    </Stack>
                    <ColoredLine border="0.001rem solid #cec8c8" height="0" width="100%" />
                    <Stack horizontal horizontalAlign="space-around">
                        <Stack styles={cardDateStackStyle}>
                            <Label>Date</Label>
                            <Label>{getFormattedDate()}</Label>
                        </Stack>
                        <ColoredLine border="0.001rem solid #cec8c8" margin="0" padding="0" width="0" />
                        <Stack styles={cardDateStackStyle}>
                            <Label>Time</Label>
                            <Label>{formatElapsedTime(elapsedTime)}</Label></Stack>
                    </Stack>
                    <ColoredLine border="0.001rem solid #cec8c8" height="0" width="98%" />
                    <Stack styles={buttonStackStyle} horizontal horizontalAlign="space-around">
                        <PrimaryButton onClick={handleStart} styles={startButtonStyles} text="Start" />
                        <PrimaryButton text="Switch Project" onClick={toggleHideDialog} />
                        <PrimaryButton onClick={handleEnd} styles={endButtonStyles} text="End" />
                    </Stack>
                </Stack>
            </Stack>
        </>
    );
}