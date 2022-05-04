import React from "react";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {AddMessageFormType} from "../Dialogs";
import {maxLengthCreator, required} from "../../../utils/validators/validators";
import {Textarea} from "../../common/FormsControls/FormsControls";

const maxLength50 = maxLengthCreator(50)

export const AddMessageForm: React.FC<InjectedFormProps<AddMessageFormType>> = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <Field component={Textarea}
                   name='newMessageText'
                   placeholder='Enter your message'
                   validate={[required, maxLength50]}
            />
            <button>add message</button>
        </form>
    );
};

export const AddMessageReduxForm = reduxForm<AddMessageFormType>({form: 'dialogAddMessageForm'})(AddMessageForm)