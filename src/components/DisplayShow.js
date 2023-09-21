import React from 'react'
import styled from 'styled-components'

const SelectedTvShow = (props) => {
    const { selectedTvShow, onSaveButtonClick } = props

    const handleSaveButtonClick = () => {
        onSaveButtonClick(selectedTvShow);
      };

    return (
        <div>
            <WrapContainer>
                <Wrap>
                    {/* <ApiArray tvShow={selectedTvShow} /> */}
                    <CloseButton onClick={props.closeSetSelectedTvShow}>
                        X
                    </CloseButton>
                    <ImageContainer>
                        {selectedTvShow.image ? (
                            <img
                                src={selectedTvShow.image.medium}
                                alt={selectedTvShow.name}
                            />
                        ) : null}
                        <Rating>Rating: {selectedTvShow.rating.average}</Rating>
                    </ImageContainer>

                    <InfoContainer>
                        <HeaderText>{selectedTvShow.name}</HeaderText>
                        <InfoText>{selectedTvShow.summary}</InfoText>
                        <SaveButton onClick={handleSaveButtonClick}>
            Must see!
          </SaveButton>
                    </InfoContainer>
                    {/* <h1>{selectedTvShow.language}</h1>
      <h1>{selectedTvShow.genres}</h1>
      <h1>[selectedTvShow.rating]</h1> */}
                </Wrap>
            </WrapContainer>
        </div>
    )
}

export default SelectedTvShow

const WrapContainer = styled.div `
   backdrop-filter: blur(2px);
    display: flex;
    position: fixed;
    width: 100%;
    height: 100%;
    z-index: 10000;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;

    @media screen and (max-width: 690px) {
        background-color: black;
        overflow: scroll;

    }
`

const Wrap = styled.div`
    background-color: black;
    display: flex;
    position: fixed;
    width: 100%;
    height: 65%;
    z-index: 100000;
    top: 20%;
    left: 0;
    right: 0;
    bottom: 0;

    @media screen and (max-width: 690px) {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        height: auto;
        top: 0;


    }
`

const CloseButton = styled.button`
    position: absolute;
    top: 3%;
    right: 3%;
    width: 4rem;
    height: 4rem;
    border-radius: 50%;
    font-weight: 900;
`

const ImageContainer = styled.div`
    background-color: black;
    width: 30vw;
    height: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin-top: 2rem;
`

const InfoContainer = styled.div`
    background-color: black;
    width: 70vw;
    margin-top: 2rem;

    @media screen and (max-width: 690px) {
        width: 100vw;
        display: flex;
        align-items: center;
        flex-direction: column;
        justify-content: center;
    }

`
const HeaderText = styled.h1`
    color: white;
`

const InfoText = styled.p`
    color: white;
    margin-right: 11rem;


    @media screen and (max-width: 690px) {
        margin-right: 2rem;
        margin-left: 2rem;
    }
`

const SaveButton = styled.button `
height: 4rem;
width: 10rem;
border-radius: 50%;
font-size: larger;
font-weight: 600;

&:hover {
        transform: scale(1.3);
    }
`

const Rating = styled.p`
color: white;
`
