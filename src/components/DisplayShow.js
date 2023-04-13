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
                        <p>Rating: {selectedTvShow.rating.average}</p>
                    </ImageContainer>
                    <button onClick={handleSaveButtonClick}>
            Save to My Shows
          </button>
                    <InfoContainer>
                        <HeaderText>{selectedTvShow.name}</HeaderText>
                        <InfoText>{selectedTvShow.summary}</InfoText>
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
`

const Wrap = styled.div`
    background-color: black;
    display: flex;
    position: fixed;
    width: 100%;
    height: 40%;
    z-index: 100000;
    top: 30%;
    left: 0;
    right: 0;
    bottom: 0;
`

const CloseButton = styled.button`
    position: absolute;
    top: 3%;
    right: 3%;
    padding: 0.5rem 1rem;
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
`
const HeaderText = styled.h1`
    color: white;
`

const InfoText = styled.p`
    color: white;
    margin-right: 11rem;
`
