import React from 'react'
import {useDispatch,useSelector} from 'react-redux';

import {Input,Select,BackTop} from 'antd';
import {SearchOutlined} from '@ant-design/icons';

import {setInitialEpisodeState,setInitialCharacterState,searchByEpisode,searchByName,resetSearch} from '../controller/Actions';
import Character from '../components/Character';
const {Option} = Select;
const CharacterCatalogue = () => {
    const dispatch=useDispatch();
    const onSearch= event => {
        if (searchParam==='name'){
        dispatch(searchByName(event.target.value))}
        else{
        dispatch(searchByEpisode(event.target.value))
        }
        setSearch(event.target.value);
    };
    const [search,setSearch]=React.useState('');
    const [error,setError]=React.useState(null);
    const [isCharComplete,setIsCharComplete]=React.useState(false);
    const displayCharacters=useSelector(state=>state.resultCharacters);
    const [searchParam,setSearchParam]=React.useState('name');
    const [searchPlaceHolder,setSearchPlaceHolder]=React.useState('Search by Name of the Character');
    
    React.useEffect(() => {
        fetch("https://www.breakingbadapi.com/api/characters")
        .then(response=> response.json())
        .then((chars)=>{
            setIsCharComplete(true);
            dispatch(setInitialCharacterState(chars))
        },(error)=>{
            setIsCharComplete(true);
            setError(error);
        })
        fetch("https://www.breakingbadapi.com/api/episodes")
        .then(response=> response.json())
        .then((episodes)=>{
            dispatch(setInitialEpisodeState(episodes))
        },error=>{
            setError(error);
        })
    },[dispatch])
    const handleSearchParamChange = (value)=> {
        dispatch(resetSearch());
        setSearchParam(value);
        setSearch('');
        if (value==='episode'){
            setSearchPlaceHolder('Search by Episode Name or Number');
        }else{
            setSearchPlaceHolder('Search by Name or NickName of the Character');
        }
    }
    return (
        <>
        <div className="container-fluid">
            <div className="row">
                <div className="col-11 mt-4 mb-5 mx-auto">
                    <div className="col-lg-5 mx-auto">
                    <Input.Group compact>
                    <Input size="large" onChange={onSearch} value={search} allowClear style={{borderRadius:'0.3em',width:'68%'}} placeholder={searchPlaceHolder} prefix={<SearchOutlined />} />
                    <Select defaultValue="name" size="large" style={{width:'32%'}} onChange={handleSearchParamChange}>
                        <Option value="name">Name</Option>
                        <Option value="episode">Episode</Option>
                    </Select>
                    </Input.Group>
                    </div>

                    <div className="row mt-2">
                        {error?<div className="text-muted mt-5">Error : {error.message}</div>:isCharComplete?displayCharacters.map((item)=>(<Character imgurl={item.img} key={item.char_id} name={item.name} nickname={item.nickname} description={item.occupation} status={item.status}/>)):<div className="text-white mt-5 pt-5 h2">Loading...</div>}
                    </div>
                    
                </div>
            </div>
            
        </div>
        <BackTop>
        <div style={{height:'40px',width:'5rem',lineHeight:'40px',backgroundColor:'black',textAlign:'center',color:'white',fontSize:'10.5px',borderRadius:'13px'}}>back to top👆</div>
        </BackTop>)
        </>
    )
}

export default CharacterCatalogue
