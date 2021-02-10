import React from 'react'
import {Card,Image} from 'antd';

import './Character.css';

const {Meta}=Card;
const Character = ({imgurl,description,name,nickname,status}) => {
    return (
        <div  className="card-col col-lg-4 col-md-6 col-sm-12 mt-4">
        <Card
         hoverable
         style={{width:'auto',height:'45em'}}
         cover={<Image alt="altName"  height='35em'  style={{border:'3px solid white',borderRadius:'0.2rem',objectFit:'cover'}} src={imgurl}/>}
        >
        <Meta title={`${name} | ${nickname}`} description={status}/>
        <p className='text-info fw-bold mt-2 occu'>{description.slice(0,2).join(' / ')}</p>
        </Card>
        </div>
        
    )
}

export default Character
