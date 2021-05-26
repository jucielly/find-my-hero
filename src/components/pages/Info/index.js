import React from 'react';
import Header from '../../organisms/Header'
import NavigationOptions from '../../molecules/NavigationOptions'
import InformationCard from '../../organisms/InformationCard'



const Info = ({title,subtitle,imgTitle, imgSubtitle, info, src}) => {
    return (
        <>
            <Header navigationOptions={<NavigationOptions />} />
            <InformationCard 
            title={title} 
            subtitle={subtitle} 
            imgTitle={imgTitle} 
            src={src}
            imgsubtitle={imgSubtitle}
            info={info}
            />

        </>
    )
}

export default Info


