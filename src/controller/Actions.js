import {SEARCH_BY_NAME,SEARCH_BY_EPISODE,RESET_SEARCH,SET_EPISODES,SET_CHARACTERS,SIGN_UP,SET_PASSWORD,LOGIN,LOGGED_IN,ADD_USER} from './Constants'



export const searchByName=(searchfield)=>({type:SEARCH_BY_NAME,payload:searchfield});
export const searchByEpisode=(searchfield)=>({type:SEARCH_BY_EPISODE,payload:searchfield});
export const resetSearch=()=>({type:RESET_SEARCH});
export const setInitialEpisodeState=(episodes)=>({type:SET_EPISODES,payload:{episodes}})
export const setInitialCharacterState=(characters)=>({type:SET_CHARACTERS,payload:{characters}})
export const signUp=()=>({type:SIGN_UP});
export const login=()=>({type:LOGIN});
export const setPassword=()=>({type:SET_PASSWORD});
export const loggedIn=()=>({type:LOGGED_IN});
export const addUserAndLogin=(users)=>({type:ADD_USER,payload:users})