import React from 'react';
import {UsersPropsType} from "./UsersContainer";
import styles from "./Users.module.css";
import {v1} from "uuid";

export const Users = (props: UsersPropsType) => {
    debugger
    if (props.users.length === 0) {
        props.setUsers([{
                id: v1(),
                photoUrl: 'https://sun9-4.userapi.com/impf/c855632/v855632921/11825e/jKosXt3qBxI.jpg?size=960x1280&quality=96&sign=774bc0b1e2023e05ad4d49e6138f1ccf&type=album',
                followed: true,
                fullName: 'Oleg',
                status: 'I am frontend developer!',
                location: {city: 'Ussuriisk', country: 'Russia'}
            },
                {
                    id: v1(),
                    photoUrl: 'https://sun9-1.userapi.com/impf/DhBAuckyigQlEKPM0bZLCu2wOkjJDTI2ltbRmA/CErcP8CsPhA.jpg?size=828x1472&quality=96&sign=ec29e6be5ba11823fb3320476aa3b937&type=album',
                    followed: true,
                    fullName: 'Viktoriya',
                    status: 'I am operator!',
                    location: {city: 'Ussuriisk', country: 'Russia'}
                },
                {
                    id: v1(),
                    photoUrl: 'https://sun9-19.userapi.com/impf/c854524/v854524440/116983/vD8XywHl0VU.jpg?size=1620x2160&quality=96&sign=9a284b1c5ea8d4b08e439312a3470f8a&type=album',
                    followed: false,
                    fullName: 'Andrey',
                    status: 'I am station duty!',
                    location: {city: 'Pogranichnyi', country: 'Russia'}
                },
                {
                    id: v1(),
                    photoUrl: 'https://sun9-54.userapi.com/impf/c841432/v841432833/64e38/GndpG2dY0FU.jpg?size=1080x1080&quality=96&sign=ee1952c024ab6d7313001c97608bb800&type=album',
                    followed: false,
                    fullName: 'Anton',
                    status: 'I am realtor!',
                    location: {city: 'Vladivostok', country: 'Russia'}
                }]
        )
    }
    return (
        <div>
            {props.users.map((u) => <div key={u.id}>
                <span>
                    <div>
                        <img src={u.photoUrl} alt="ava" className={styles.userPhoto}/>
                    </div>
                    <div>
                        {u.followed ? <button onClick={() => {
                            props.unfollow(u.id)
                        }}>Unfollow</button> : <button onClick={() => {
                            props.follow(u.id)
                        }}>Follow</button>}
                    </div>
                </span>
                    <span>
                    <span>
                        <div>{u.fullName}</div>
                        <div>{u.status}</div>
                    </span>
                    <span><div>{u.location.country}</div>
                        <div>{u.location.city}</div>
                    </span>
                    </span>
                </div>
            )}
        </div>
    );
};
