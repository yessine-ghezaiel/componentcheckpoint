import React from 'react'
import img from './picyess.jpg';


const ProfilePhoto = () => {
    return (
        <div>
            <img style={{height: 'auto',width:'auto',maxWidth:500,maxHeight: 400}} src={img} />
        </div>
    )
}

export default ProfilePhoto
