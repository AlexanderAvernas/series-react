import React, { useState } from 'react'
import styled from 'styled-components'
// import { UserContext } from '../UserContext/UserContext'

function SavedTvShows(props) {
    const { savedTvShows } = props
    const [showComponent, setShowComponent] = useState(false)

    console.log(savedTvShows);

    return (
        <>
            <Button onClick={() => setShowComponent(true)}>Saved <br />{savedTvShows.length}</Button>
            <Overlay
                style={{ display: showComponent ? 'flex' : 'none' }}
                onClick={() => setShowComponent(false)}
            >
                <Wrap>
                    <SaveTvShowHeader>Must see!</SaveTvShowHeader>
                    {savedTvShows.length > 0 ? (
                        <SavedSerieContainer>
                            {savedTvShows.map((tvShow) => (
                                <SavedSerieCard key={tvShow.id}>

                                    {tvShow.image ? (
                                        <img
                                            src={tvShow.image.medium}
                                            alt={tvShow.name}
                                        />
                                    ) : null}
                                    {tvShow.name}
                                </SavedSerieCard>
                            ))}
                        </SavedSerieContainer>
                    ) : (
                        <NoShow>No saved TV shows.</NoShow>
                    )}
                    <CloseButton onClick={() => setShowComponent(false)}>
                        X
                    </CloseButton>
                </Wrap>
            </Overlay>
        </>
    )
}

export default SavedTvShows

const SavedSerieContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    margin: 20px;

`

const SaveTvShowHeader = styled.h1`
color: white;
margin-top: 5vh;

`

const SavedSerieCard = styled.div`
display: flex;
flex-direction: column;
color: white;
font-size: larger;
background-color: black;
margin: 5vh;

`

const NoShow = styled.h2`
color: White;
font-size: xx-large;
margin-top: 20%;
`

const Button = styled.button`
    position: fixed;
    right: 1rem;
    top: 2vh;
    background-color: white;
    color: black;
    line-height: 1rem;
    font-weight: 700;
    font-size: 18px;
    width: 4.5rem;
    height: 4.5rem;
    border-radius: 50%;
    border: none;
    z-index: 1000;

    &:hover {
        transform: scale(1.5);
    }

    @media screen and (max-width: 690px) {
        top: 89vh;
    }
`

const Overlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: black;
    z-index: 1000000;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: auto;
`

const Wrap = styled.div`
    position: relative;
    background-color: black;
    padding: 20px;
    height: 100%;
    width: 90vw;
    text-align: center;
`

const CloseButton = styled.button`
    position: absolute;
    font-size: x-large;
    font-weight: bolder;
    top: 2vh;
    right: 2vw;
    background-color: #fff;
    color: #000;
    border: none;
    font-size: 18px;
    width: 4rem;
    height: 4rem;
    border-radius: 50%;
    cursor: pointer;

    &:hover {
        transform: scale(1.3);
    }
`
