import React from 'react'
import './web.css'

function Web() {
    return <div className="web">
        <div className="web-option">
            <a href="#project">
                <i class="fas fa-file-code option-icon"></i> Projects 
            </a>
        </div>
        <div className="web-option">
            <a href="#skills">
                <i class="fas fa-wrench option-icon"></i> Skills
            </a>
        </div>
        <div className="web-option">
            <a href="#work">
                <i class="fas fa-briefcase option-icon"></i> Work 
            </a>
        </div>
        <div className="web-option">
            <a href="#contact">
                <i class="fas fa-address-card option-icon"></i> Contact
            </a>
        </div>
    </div>;
}

export default Web;
