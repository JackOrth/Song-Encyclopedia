import React from 'react';
import {useNavigate} from 'react-router-dom'
import styled from 'styled-components';

const Banner = styled.div`
    height: 35vh;
    background-size: cover;
    background-position: center;
    display:flex;
    justify-content:center;
    align-items: center;
`
const Intro = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 30%;
    margin-left: 30%;
    text-align: center;
    color: white;
`

const SongsBtn = styled.button`
    width: 30%;
    padding: 20px;
    background-color: rgba(255,255,255,0.9);
    font-size: 18px;
    text-transform: uppercase;
    font-weight: bold;
    &:hover {
     background-color: black;
     color: rgba(255,255,255,0.9);
     transition: 1s;
     cursor: pointer;
    }
`

function Home(){ 
    const navigate = useNavigate();
    const routeToSongs = () => {
        navigate('/songs')
    }
    
    
    return(
        <div className="home">
            <Intro>
            <h3>Here you can find all of the latest top tracks provided by iTunes. Click the button below to view!</h3>
            </Intro>
            <Banner> 
                <SongsBtn
                    onClick = {routeToSongs}
                    className = 'songs-button'
                    >
                    See All Songs
                </SongsBtn>  
            </Banner>            
        </div>
    )
}
export default Home