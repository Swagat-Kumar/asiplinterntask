import {SEARCH_BY_NAME,SEARCH_BY_EPISODE,RESET_SEARCH,SET_EPISODES,SET_CHARACTERS,SET_PASSWORD,SIGN_UP,ADD_USER,LOGIN,LOGGED_IN} from './Constants'
const initialAppState={
    search:'',
    appState:'login',
    characters:[],
    episodes:[],
    resultCharacters:[],
    users:[{email:'swagatkumarrocky@gmail.com',password:'swagat'}]
}
export const rootReducer=(state=initialAppState,action)=>{
    switch(action.type){
        case RESET_SEARCH:
            return {...state,search:'',resultCharacters:state.characters}
        case SET_EPISODES:
            return {...state,episodes:action.payload.episodes}
        case SET_PASSWORD:
            return {...state,appState:'forgot'}
        case ADD_USER:
            return {...state,users:action.payload,appState:'login'}
        case LOGIN:
            return {...state,appState:'login'}
        case SIGN_UP:
            return {...state,appState:'signup'}
        case LOGGED_IN:
            return {...state,appState:'loggedin'}
        case SET_CHARACTERS:
            return {...state,characters:action.payload.characters,resultCharacters:action.payload.characters}
        case SEARCH_BY_NAME:
            return {...state,search:action.payload,resultCharacters:state.characters.filter(char=>char.name.toLowerCase().includes(action.payload.toLowerCase())||char.nickname.toLowerCase().includes(action.payload.toLowerCase()))}
        case SEARCH_BY_EPISODE:
            const filteredEpisode=state.episodes.filter(ep=>ep.title.toLowerCase().includes(action.payload.toLowerCase())||ep.episode.toLowerCase().includes(action.payload.toLowerCase()));
            var unique=[]
            for (var i=0;i<filteredEpisode.length;i++){
                for(var c=0;c<filteredEpisode[i].characters.length;c++){
                    if(unique.includes(filteredEpisode[i].characters[c])){
                        continue;
                    }
                    else{
                        unique.push(filteredEpisode[i].characters[c].toLowerCase())
                    }
                }
            }
            // console.log(unique);
            var result=[];
            for (var k=0;k<state.characters.length;k++){
                if(unique.includes(state.characters[k].name.toLowerCase()) || unique.includes(state.characters[k].nickname.toLowerCase())){
                    result.push(state.characters[k])
                }
            }
            return {...state,search:action.payload,resultCharacters:result}
        default:
            return state
    }
}