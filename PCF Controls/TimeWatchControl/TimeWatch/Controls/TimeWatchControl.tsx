import * as React from 'react';
import { IStackStyles, IStackTokens, Stack } from '@fluentui/react/lib/Stack';
import { LoogedInUserHeader } from './LoogedInUserHeader';
import { BrandingComponent } from './BrandingComponent';

const stackTokens: IStackTokens = {};
const stackStyles: Partial<IStackStyles> = { root: { width: '100%' } };

export const TimeWatchControl: React.FunctionComponent = () => {

    const [currentUserName, setCurrentUserName] = React.useState<string>('');
    const [lastLoginAt, setLastLoginAt] = React.useState<string>('');
    const [totalHours, setTotalHours] = React.useState<string>('00:56:36');


    React.useEffect(() => {
        setCurrentUserName("Komal Patel");
        setLastLoginAt('12:16');
        setTotalHours('00:56:36');
    }, []);



    return (
        <Stack verticalFill tokens={stackTokens} styles={stackStyles} verticalAlign="end">

            <LoogedInUserHeader LoggedInUser={currentUserName}></LoogedInUserHeader>

            <BrandingComponent LastLoginAt={lastLoginAt} TotalHours={totalHours} LoggedInUserName={currentUserName}></BrandingComponent>

        </Stack>
    );
};
