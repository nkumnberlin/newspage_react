import React from 'react';
import {Card, CardPrimaryAction, CardActions, CardActionButton, CardMedia} from '@rmwc/card';
import {Typography} from '@rmwc/typography';
import {ListDivider, ListItemMeta} from '@rmwc/list';
import styled from 'styled-components';
import '@material/list/dist/mdc.list.css';
import '@material/typography/dist/mdc.typography.css';
import '@material/card/dist/mdc.card.css';
import '@material/button/dist/mdc.button.css';
import '@material/icon-button/dist/mdc.icon-button.css';

const StyledCard = styled(Card)`
width: 100% !important;
margin-top: 2rem !important;`;

const StyledImage = styled(CardMedia)`
    width: 245px;
    height: 190px;
`;

const Container = styled.div`
display: flex;
margin-top: 2rem !important`;

const StyledCardPrimary = styled(CardPrimaryAction)`
width: 100% !important`;

const renderTitle = (key, index) => (
    <Container>
        <StyledImage
            sixteenByNine
            style={{
                backgroundImage: `url(${key.urlToImage})`
            }}
        />
        <StyledCardPrimary key={index} onClick={() => window.open(`${key.url}, '_blank'`)}>
            <div style={{padding: '1rem'}}>
                <Typography use="headline5" tag="div">
                    {key.title}
                </Typography>
                <Typography use="body1" tag="p" theme="textSecondaryOnBackground">
                    {key.description}
                </Typography>
            </div>
        </StyledCardPrimary>
    </Container>
);

const RenderHeadlines = ({articles, source}) => {
    let nameOfHeadline = '';
    const Headlines = () => (
        <>
            {articles.map((key, index) => {
                nameOfHeadline = key.source.name;
                return renderTitle(key, index);
            })}
        </>
    );


    return (
        <StyledCard outlined style={{width: '21rem'}}>
            <Typography
                use="subtitle1"
                tag="div"
                style={{padding: '0.5rem 1rem'}}
                theme="textSecondaryOnBackground"
            >
                Headlines {nameOfHeadline}
            </Typography>

            <ListDivider/>
            { articles.length ? <Headlines/> : ''}
            <ListDivider/>
            <CardActions fullBleed>
                <CardActionButton
                    label="All Business Headlines"
                    trailingIcon="arrow_forward"
                />
            </CardActions>
        </StyledCard>
    );
};


export default RenderHeadlines;
