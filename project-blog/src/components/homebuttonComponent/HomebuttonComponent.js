import React, { Component } from 'react';
import './HomebuttonComponent.css';

class HomebuttonComponent extends Component {
    render() {
        return (
            <div class="Homebutton">
                <button class="Homebutton-blogButton">BLOG</button>
                <button className="Homebutton-galleryButton">Gallery</button>
                <button class="Homebutton-aboutMeButton">AboutMe</button>
                <button class="Homebutton-contactMeButton">ContactMe</button>
            </div>
        );
    }
}

export default HomebuttonComponent;
