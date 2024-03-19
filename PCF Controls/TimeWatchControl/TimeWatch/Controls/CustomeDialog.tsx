import { DefaultButton, Dialog, DialogFooter, DialogType, Dropdown, IDialogContentProps, IDropdownOption, IModalProps, IStackStyles, IStackTokens, PrimaryButton, Stack } from "@fluentui/react"
import React = require("react")

interface ICustomeDialog {
    hideDialog: boolean;
    toggleHideDialog: () => void;
    value?: string;
    title: string;
}

export const CustomeDialog: React.FunctionComponent<ICustomeDialog> = (props) => {
    // Properties for dialog content and style
    const dialogContentProps: IDialogContentProps = {
        type: DialogType.close,
        title: props.title,
        // subText: 'Your Inbox has changed. No longer does it include favorites, it is a singular destination for your emails.',
    }
    const modelProps: IModalProps = {
        isBlocking: true,
        styles: { main: { maxWidth: 450 } },
    };
    const richErrorStackStyles: Partial<IStackStyles> = { root: { height: 24, color: 'red' } };
    const saveFolder = () => {
        // if (this.state.value != null && this.state.value != undefined && this.state.value != "") {
        // props._saveFolder(this.state.value);
        props.toggleHideDialog();
        // }
    };
    const richErrorStackTokens: IStackTokens = { childrenGap: 8 };
    const options: IDropdownOption[] = [
        { key: 'Project 1', text: 'Project 1' },
        { key: 'Project 2', text: 'Project 2' },
        { key: 'Project 3', text: 'Project 3' },
        { key: 'Project 4', text: 'Project 4' },
        { key: 'Project 5', text: 'Project 5' },
        { key: 'Project 6', text: 'Project 6' },
    ]
    return (
        <Dialog
            hidden={props.hideDialog}
            onDismiss={props.toggleHideDialog}
            dialogContentProps={dialogContentProps}
            modalProps={modelProps}>
            <Dropdown
                label="Project"
                placeholder="Select an option" options={options} />
            <Stack styles={richErrorStackStyles} verticalAlign="center" horizontal tokens={richErrorStackTokens}>
                {/* <Icon iconName="Error" styles={props.richErrorIconStyles} /> */}
                <span className="errorSpan">Input must contain value.</span>
            </Stack>
            <DialogFooter>
                <PrimaryButton onClick={saveFolder.bind(props)} text="Save" />
                <DefaultButton onClick={props.toggleHideDialog} text="Cancel" />
            </DialogFooter>
        </Dialog>
    )
}