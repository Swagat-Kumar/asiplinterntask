import React from 'react'
import {Card,Image} from 'antd';
const {Meta}=Card;
const Character = ({imgurl,description,name,key,nickname,status}) => {
    return (
        <div className="card-col col-lg-4 col-md-6 col-sm-12 mt-4">
        <Card
         hoverable
         key={key}
         style={{width:'auto',height:'580px'}}
         cover={<Image alt="altName"  height='450px'  style={{border:'3px solid white',borderRadius:'0.2rem',objectFit:'cover'}} src={imgurl}/>}
        >
        <Meta title={`${name} | ${nickname}`} description={status}/>
        <p className='text-muted mt-2'>{description.map(item=>item+' ')}</p>
        </Card>
        </div>
        
    )
}

export default Character
