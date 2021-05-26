import React from 'react';
import styled from 'styled-components';
import Information from '../../molecules/Information'
import InformationImg from '../../molecules/InformationImg'


const InformationCard = ({ title, imgTitle, subtitle, imgSubtitle, info, src }) => {
    return (
        <Container>
            <InformationImg title={imgTitle} subtitle={imgSubtitle} src={src} />
            <Information title={title}  subtitle={subtitle}information={info} />
        </Container>
    )
}

export default InformationCard


const Container = styled.div`
margin: 50px;
display: flex;
align-items: stretch;

`