import React, {ChangeEvent, useEffect, useState} from "react";

type ProfileStatusProps = {
    status: string
    updateStatus: (status: string) => void
}

export const ProfileStatusWithHooks = (props: ProfileStatusProps) => {

    const [editMode, setEditMode] = useState(false)
    const [status, setStatus] = useState(props.status)

    useEffect(() => {
        setStatus(props.status)
    }, [props.status])

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

    return (
        <>
            {editMode
                ?
                <div>
                    <input onChange={onStatusChange} autoFocus={true} onBlur={deactivateEditMode}
                           value={status}/>
                </div>
                :
                <div>
                    <b>{'My status: '}</b>
                    <span onDoubleClick={activateEditMode}>{props.status || "Change your status"}</span>
                </div>
            }
        </>
    )
}