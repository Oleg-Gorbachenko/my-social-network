import React, {ChangeEvent, useState} from "react";

type ProfileStatusProps = {
    status: string
    updateStatus: (status: string) => void
}

export const ProfileStatusWithHooks = (props: ProfileStatusProps) => {

    const [editMode, setEditMode] = useState(false)
    const [status, setStatus] = useState(props.status)

    const activateEditMode = () => {
        setEditMode(true)
    }
    const deactivateEditMode = () => {
        setEditMode(false)
        props.updateStatus(status)
    }
    const onStatusChange = (e: ChangeEvent<HTMLInputElement>) => {
        setStatus(e.currentTarget.value)
    }
    //
    // componentDidUpdate(prevProps: ProfileStatusProps, prevState: any) {
    //     if (prevProps.status !== this.props.status) {
    //         this.setState({
    //             status: this.props.status
    //         })
    //     }
    // }


    return (
        <>
            {editMode
                ?
                <div>
                    <input onChange={onStatusChange} autoFocus={true} onBlur={deactivateEditMode}
                           value={status}/>
                    {/*<span>{'My status'}</span>*/}
                </div>
                :
                <div>
                    <span>{'My status: '}</span>
                    <span onDoubleClick={activateEditMode}>{props.status || "Change your status"}</span>
                </div>
            }
        </>
    )
}