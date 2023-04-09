import React from 'react'
import styled from 'styled-components'

const SelectedTvShow = (props) => {
    const { selectedTvShow } = props
    return (
        <div>
            <Wrap>
                {/* <ApiArray tvShow={selectedTvShow} /> */}
                <ImageContainer>
                    {selectedTvShow.image ? (
                        <img
                            src={selectedTvShow.image.medium}
                            alt={selectedTvShow.name}
                        />
                    ) : null}
                    <p>Rating: {selectedTvShow.rating.average}</p>
                </ImageContainer>
                <InfoContainer>
                    <HeaderText>{selectedTvShow.name}</HeaderText>
                    <InfoText>{selectedTvShow.summary}</InfoText>
                </InfoContainer>
                {/* <h1>{selectedTvShow.language}</h1>
      <h1>{selectedTvShow.genres}</h1>
      <h1>[selectedTvShow.rating]</h1> */}
            </Wrap>
        </div>
    )
}

export default SelectedTvShow

const Wrap = styled.div`
    background-color: black;
    display: flex;
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
const HeaderText = styled.h1 `
color: white;`

const InfoText = styled.p `
color: white;
margin-right: 11rem;`
