import React from 'react'
import './SearchPage.css'
import TuneOutlinedIcon from '@material-ui/icons/TuneOutlined';
import Image from './img/download.jpeg'
import ChannelRow from './ChannelRow'
import VideoRow from './VideoRow'


function SearchPage() {
    return (
        <div className="searchPage">
            <div className="searchPage__filter">
            <TuneOutlinedIcon/> <h2>FILTER</h2>
            </div>
            <hr/>

            <ChannelRow
                image="https://upload.wikimedia.org/wikipedia/commons/7/73/YouTube_Music.png"
                channel="dragonatom4"
                verified
                subs="660K" 
                noOfVideos={382}
                description="Become a Web Developer in 10 minutes | 2019/2020 No certifications or awards here. 
                            We focus on giving you real developer skills that bring you real results: Clients, 
                            jobs, self-improvement, and profit. Our students aren't just satisfied... 
                            They've gotten real results as developers 👇." 
            />
            <hr/>
            <VideoRow
            views="1.4M" 
            subs="659k" 
            description="Become a Web Developer in 10 minutes | 2019/2020" 
            timestamp="1 minute ago"
            channel="Clever Programmer" 
            title="🔴 Day in the life of a College Student"
            image={Image}
            />
            <VideoRow
            views="1.4M" 
            subs="659k" 
            description="Become a Web Developer in 10 minutes | 2019/2020" 
            timestamp="1 minute ago"
            channel="Clever Programmer" 
            title="🔴 Day in the life of a College Student"
            image={Image}
            />           
             <VideoRow
            views="1.4M" 
            subs="659k" 
            description="Become a Web Developer in 10 minutes | 2019/2020" 
            timestamp="1 minute ago"
            channel="Clever Programmer" 
            title="🔴 Day in the life of a College Student"
            image={Image}
            />           
             <VideoRow
            views="1.4M" 
            subs="659k" 
            description="Become a Web Developer in 10 minutes | 2019/2020" 
            timestamp="1 minute ago"
            channel="Clever Programmer" 
            title="🔴 Day in the life of a College Student"
            image={Image}
            />            
            <VideoRow
            views="1.4M" 
            subs="659k" 
            description="Become a Web Developer in 10 minutes | 2019/2020" 
            timestamp="1 minute ago"
            channel="Clever Programmer" 
            title="🔴 Day in the life of a College Student"
            image={Image}
            />            
            <VideoRow
            views="1.4M" 
            subs="659k" 
            description="Become a Web Developer in 10 minutes | 2019/2020" 
            timestamp="1 minute ago"
            channel="Clever Programmer" 
            title="🔴 Day in the life of a College Student"
            image={Image}
            />
            
        </div>
    )
}

export default SearchPage
