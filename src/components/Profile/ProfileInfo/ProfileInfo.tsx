import React, {ChangeEvent, useState} from "react";
import s from './ProfileInfo.module.css'
import {Preloader} from "../../common/Preloader/Preloader";
import {ProfileType} from "../../../redux/profile-reducer";
import {ProfileStatusWithHooks} from "./ProfileStatusWithHooks";
import userPhoto from "../../../assets/images/user.jpg";
import {ProfileDataFormReduxForm} from "./ProfileDataForm";
import {FormDataType} from "../../Login/Login";
import {useSelector} from "react-redux";
import {AppStateType} from "../../../redux/redux-store";

type ProfileInfoProps = {
  profile: any | null
  status: string
  updateStatus: (status: string) => void
  isOwner: boolean
  savePhoto: (photo: File) => void
  saveProfile: (formData: FormDataType) => any
}

export const ProfileInfo = ({profile, status, updateStatus, isOwner, savePhoto, saveProfile}: ProfileInfoProps) => {
  const [editMode, setEditMode] = useState(false)
  if (!profile) {
    return <Preloader/>
  }

  const onMainPhotoSelected = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      savePhoto(e.target.files[0])
    }
  }

  const onSubmit = (formData: FormDataType) => {
    saveProfile(formData)
      .then(() => {
        setEditMode(false)
      })
  }
  // @ts-ignore
  return (
    <div>
      <div className={s.descriptionBlock}>
        <img src={profile.photos.large || userPhoto} className={s.mainPhoto} alt="photo"/>
        {isOwner && <input type={'file'} onChange={onMainPhotoSelected}/>}
        <ProfileStatusWithHooks status={status} updateStatus={updateStatus}/>
        {editMode ? <ProfileDataFormReduxForm onSubmit={onSubmit} initialValues={profile}/> :
          <ProfileData profile={profile} isOwner={isOwner} goToEditMode={() => setEditMode(true)}/>}
      </div>
    </div>
  )
}

type ContactPropsType = {
  contactTitle: string
  contactValue: string
}

export const Contact = (props: ContactPropsType) => {
  return (
    <div className={s.contact}><b>{props.contactTitle}</b>: {props.contactValue}</div>
  )
}

type ProfileDataType = {
  profile: ProfileType
  isOwner: boolean
  goToEditMode: () => void
}

export const ProfileData = ({profile, isOwner, goToEditMode}: ProfileDataType) => {

  const fullName = useSelector<AppStateType, string | null>(state => state.auth.login)

  return (
    <>
      {isOwner && <button onClick={goToEditMode}>edit</button>}
      <h2>{fullName}</h2>
      <div><b>About Me: </b> {profile.aboutMe}</div>
      <div><b>Looking for a job: </b> {profile.lookingForAJob ? 'yes' : 'no'}</div>
      {profile.lookingForAJob &&
        <div><b>My professional skills: </b> {profile.lookingForAJobDescription}</div>}
      <div>
        <b>Contacts</b>: {Object.keys(profile.contacts).map(key => {
        return <Contact key={key} contactTitle={key} contactValue={profile.contacts[key]}/>
      })}
      </div>
    </>
  )
}


