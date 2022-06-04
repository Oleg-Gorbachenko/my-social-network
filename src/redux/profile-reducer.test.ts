import {addPostAC, deletePost, PostType, profileReducer} from "./profile-reducer";


const state = {
    posts: [
        {id: '1', message: 'How are you!', likesCount: 15},
        {id: '2', message: 'It\'s my first post', likesCount: 26}
    ] as Array<PostType>,
    profile: null,
    status: '',
}


test('new post should be added', () => {
    // test data
    let action = addPostAC('it-kamasutra')
    //action
    let newState = profileReducer(state, action)
    //expectation
    expect(newState.posts.length).toBe(3)
})

test('message of new post should be correct', () => {
    // test data
    let action = addPostAC('it-kamasutra')
    //action
    let newState = profileReducer(state, action)
    //expectation
    expect(newState.posts[0].message).toBe('it-kamasutra')
})

test('after deleting length of messages should be decrement', () => {
    // test data
    let action = deletePost('1')
    //action
    let newState = profileReducer(state, action)
    //expectation
    expect(newState.posts.length).toBe(1)
})

test('likesCount of new post should be correct', () => {
    // test data
    let action = addPostAC('it-kamasutra')
    //action
    let newState = profileReducer(state, action)
    //expectation
    expect(newState.posts[0].likesCount).toBe(0)
})

test(`after deleting length shouldn't be decrement if ID is incorrect`, () => {
    // test data
    let action = deletePost('1000')
    //action
    let newState = profileReducer(state, action)
    //expectation
    expect(newState.posts.length).toBe(2)
})