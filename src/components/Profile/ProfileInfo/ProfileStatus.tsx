import React from "react";
import classes from './ProfileInfo.module.css'

type ProfileStatusProps = {
    status: string
}

export class ProfileStatus extends React.Component<ProfileStatusProps, any> {
    state = {
        editMode: false
    }

    activateEditMode = () => {
        this.setState({
            editMode: true
        })
    }
    deactivateEditMode = () => {
        this.setState({
            editMode: false
        })
    }

    render() {
        return (
            <>
                {this.state.editMode
                    ?
                    <div>
                        <input autoFocus={true} onBlur={this.deactivateEditMode} value={this.props.status}/>
                    </div>
                    :
                    <div>
                        <span onDoubleClick={this.activateEditMode}>{this.props.status}</span>
                    </div>
                }
            </>
        )
    }
}