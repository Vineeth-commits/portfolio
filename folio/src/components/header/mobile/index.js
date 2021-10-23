import React from 'react'
import './mobile.css'

function Mobile({isOpen, setIsOpen}) {
    return <div className="mobile">
        <div className="close-icon" onClick={() => setIsOpen(!isOpen)}>
            <i class="far fa-times-circle"></i>
        </div>
        <div className="mobile-options">
            <div className="mobile-option">
                <a href="#project">
                    <i class="fas fa-file-code option-icon"></i> Projects 
                </a>
            </div>
            <div className="mobile-option">
                <a href="#skills">
                    <i class="fas fa-wrench option-icon"></i> Skills
                </a>
            </div>
            <div className="mobile-option">
                <a href="#work">
                    <i class="fas fa-briefcase option-icon"></i> Work 
                </a>
            </div>
            <div className="mobile-option">
                <a href="#contact">
                    <i class="fas fa-address-card option-icon"></i> Contact
                </a>
            </div>
        </div>
    </div>;
}

export default Mobile;
