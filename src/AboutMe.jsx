// https://www.figma.com/community/file/949935753197381766/Portfolio

import React from "react";
import "./AboutMe.css";
import illustration from "./AboutMeIllustration.png"
import ResponsiveAppBar from "./navbar";
import BlackButton from "./blackButton";

export default function About() {
    return (
        <div className='about'>
            <ResponsiveAppBar />
            <div className="half">
                <div className='about__left'>
                    <h1>Hello,</h1>
                    <h1>I am Rain</h1>
                    <p>Penultimate Year Student</p>
                    <a href="https://connecthkuhk-my.sharepoint.com/:b:/g/personal/u3580090_connect_hku_hk/EXIS7hhnGQFIndkMn2hYWxsB7C4H89HGPjysTjVn3BUklg">
                        <BlackButton
                            label="Download CV"
                            onClick={() => alert('Redirect to OneDrive!')                          }
                        />
                    </a>
                </div>
                <div className='about__right'>
                    <img src={illustration}
                        alt='illustration'
                        style={{
                            maxWidth: '50%',
                            maxHeight: '50%',
                            boxShadow: '8px 8px 0px 0px black',
                            borderRadius: '5%'
                        }}
                    />
                </div>
            </div>
        </div>
    );
}