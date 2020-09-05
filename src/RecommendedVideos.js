import React from 'react'
import "./RecommendedVideos.css"
import VideoCard from './VideoCard';
import Image from './img/download.jpeg'

function RecommendedVideos() {
    return (
        <div className="recommendedVideos">
            <h2>Videos</h2>
            <div className="recommendedVideos__videos">
                <VideoCard 
                    image={Image}
                    title="Become a Web Developer in 10 minutes | 2019/2020" 
                    channel="dragonatom4"
                    views="2.3M Views" 
                    timestamp="3 days ago"
                    channelImage="https://upload.wikimedia.org/wikipedia/commons/7/73/YouTube_Music.png"
                />
               <VideoCard 
                    image={Image}
                    title="Become a Web Developer in 10 minutes | 2019/2020" 
                    channel="dragonatom4"
                    views="2.3M Views" 
                    timestamp="3 days ago"
                    channelImage="https://upload.wikimedia.org/wikipedia/commons/7/73/YouTube_Music.png"
                />               <VideoCard 
                image={Image}
                title="Become a Web Developer in 10 minutes | 2019/2020" 
                channel="dragonatom4"
                views="2.3M Views" 
                timestamp="3 days ago"
                channelImage="https://upload.wikimedia.org/wikipedia/commons/7/73/YouTube_Music.png"
            />               <VideoCard 
            image={Image}
            title="Become a Web Developer in 10 minutes | 2019/2020" 
            channel="dragonatom4"
            views="2.3M Views" 
            timestamp="3 days ago"
            channelImage="https://upload.wikimedia.org/wikipedia/commons/7/73/YouTube_Music.png"
        />               <VideoCard 
        image={Image}
        title="Become a Web Developer in 10 minutes | 2019/2020" 
        channel="dragonatom4"
        views="2.3M Views" 
        timestamp="3 days ago"
        channelImage="https://upload.wikimedia.org/wikipedia/commons/7/73/YouTube_Music.png"
    />               <VideoCard 
    image={Image}
    title="Become a Web Developer in 10 minutes | 2019/2020" 
    channel="dragonatom4"
    views="2.3M Views" 
    timestamp="3 days ago"
    channelImage="https://upload.wikimedia.org/wikipedia/commons/7/73/YouTube_Music.png"
/>               <VideoCard 
                    image={Image}
                    title="Become a Web Developer in 10 minutes | 2019/2020" 
                    channel="dragonatom4"
                    views="2.3M Views" 
                    timestamp="3 days ago"
                    channelImage="https://upload.wikimedia.org/wikipedia/commons/7/73/YouTube_Music.png"
                />               <VideoCard 
                image={Image}
                title="Become a Web Developer in 10 minutes | 2019/2020" 
                channel="dragonatom4"
                views="2.3M Views" 
                timestamp="3 days ago"
                channelImage="https://upload.wikimedia.org/wikipedia/commons/7/73/YouTube_Music.png"
            />
            </div>
        </div>
    )
}

export default RecommendedVideos
