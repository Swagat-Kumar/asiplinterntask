import {SEARCH_BY_NAME,SEARCH_BY_EPISODE,RESET_SEARCH,SET_EPISODES,SET_CHARACTERS} from './Constants'
export const searchByName=(searchfield)=>({type:SEARCH_BY_NAME,payload:searchfield});
export const searchByEpisode=(searchfield)=>({type:SEARCH_BY_EPISODE,payload:searchfield});
export const resetSearch=()=>({type:RESET_SEARCH});
export const setInitialEpisodeState=(episodes)=>({type:SET_EPISODES,payload:{episodes}})
export const setInitialCharacterState=(characters)=>({type:SET_CHARACTERS,payload:{characters}})
