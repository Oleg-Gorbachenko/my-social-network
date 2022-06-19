import React, {ChangeEvent} from 'react';
import {InjectedFormProps, reduxForm} from "redux-form";
import {createField, Input} from "../common/FormsControls/FormsControls";
import {required} from "../../utils/validators/validators";
import {connect, useDispatch, useSelector} from "react-redux";
import {login, logout, setCaptchaUrl} from "../../redux/auth-reducer";
import {AppStateType} from "../../redux/redux-store";
import {Navigate} from "react-router-dom";
import styles from "../common/FormsControls/FormsControls.module.css";


export type FormDataType = {
  email: string
  password: string
  rememberMe: boolean
}

export const LoginForm: React.FC<InjectedFormProps<FormDataType>> = ({handleSubmit, error}) => {

  const dispatch = useDispatch()
  const captchaUrl = useSelector<AppStateType, string | null>(state => state.auth.captchaUrl)

  const InputHandler = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(setCaptchaUrl(e.currentTarget.value))
    console.log(captchaUrl)
  }

  return (
    <form onSubmit={handleSubmit}>
      {createField('Email', 'email', [required], Input)}
      {createField('Password', 'password', [required], Input, {type: 'password'})}
      {createField(null, 'rememberMe', [], Input, {type: 'checkbox'}, 'remember me')}
      {captchaUrl && <img src={captchaUrl} alt="captcha"/>}
      {captchaUrl && <div><input type="text" onChange={InputHandler} placeholder='symbols from image'/></div>}
      {error && <div className={styles.formSummaryError}>
        {error}
      </div>}
      <div>
        <button>Login</button>
      </div>
    </form>
  );
};

const LoginReduxForm = reduxForm<FormDataType>({form: 'login'})(LoginForm)

type mapDispatchPropsType = {
  login: (email: string, password: string, rememberMe: boolean) => void
  logout: () => void
}

type mapStateToPropsType = {
  isAuth: boolean
}

const mapStateToProps = (state: AppStateType): mapStateToPropsType => ({
  isAuth: state.auth.isAuth,
})

type LoginPropsType = mapStateToPropsType & mapDispatchPropsType

export const Login = (props: LoginPropsType) => {

  const userId = useSelector<AppStateType, number | null>(state => state.auth.userId)

  const onSubmit = (formData: FormDataType) => {
    props.login(formData.email, formData.password, formData.rememberMe)
  }

  if (props.isAuth) {
    return <Navigate to={`/profile/${userId}`}/>
  }
  return (
    <div>
      <h1>LOGIN</h1>
      <LoginReduxForm onSubmit={onSubmit}/>
      <div>
        <h3>Данные для тестового аккаунта:</h3>
        <div>Email: free@samuraijs.com</div>
        <div>Password: free</div>
      </div>
    </div>
  );
};

export default connect(mapStateToProps, {login, logout})(Login);