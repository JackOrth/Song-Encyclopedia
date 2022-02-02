import React, {useState} from 'react'
import styled from 'styled-components'

const SongsWrapper = styled.div`
    text-align: center;
    display: flex;
    align-content: center;
    justify-content: center;
    background-color: black;
    margin-top: 0%;
`
const FormInput = styled.form`
    padding: 2%;
`
const SearchBox = styled.input`
    padding-top: .5%;
    padding-right: 10%;
`

const SongsContent = styled.div`
    text-align: center;
    width: 80%;
    background-color:black;
`

const SongDiv= styled.div`
    text-align: center;
    display: flex;
    flex-wrap: wrap;
    align-content:center;
    justify-content:center;
`

const Song = styled.div`
    text-align: center;
    background-color: white;
    display: flex;
    flex-direction: column;
    width: 200px;
    height: 275px; 
    margin: 5px;
    &:hover {
     background-color: black;
     color: rgba(255,255,255,0.9);
     transition: .5s;
    }
`
const SongImg = styled.img`
   width: 200px;
   height: 200px;
   object-fit: scale-down;
`
const Price = styled.div`
    font-size: 14px;
    padding: 3px 0px;
    font-weight: bold;
    `

const Title = styled.div`
    font-size: 14px;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    padding: 0px 0px 0px 0px;
`


export default function Songs(props){
    const { songs} = props
    const [query, setQuery] = useState('');
    
    return(
        <SongsWrapper>
            <SongsContent>
            <div>
                <FormInput>
                    <SearchBox placeholder="Search by artists..." onChange={e=> setQuery(e.target.value)}/>
                </FormInput>
            <SongDiv>
            {
            songs.filter(song => {
                if(query === ''){
                    return song
                }else if(song.artistName.toLowerCase().includes(query.toLowerCase())){
                    return song
                }
            }).map((song, i)=> (
                <Song key={i}>
                    <SongImg 
                        className='songs-list-image'
                        src={song.artworkUrl100}
                        alt={song.trackName} />
                    <Title>{song.trackName}</Title>
                    <Title>{song.artistName}</Title>
                    <Title>{song.primaryGenreName}</Title>
                    <Price>${song.trackPrice}</Price>
                </Song>
            ))}
            </SongDiv>
          </div>      
        </SongsContent>
        </SongsWrapper>

    )
}