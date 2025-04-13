import React from 'react';

const FooterStyle={
    'position': 'fixed',
    'bottom': '0',
    'left': '0',
    'width': '100%',
    'background': '#f8f8f8',
    'textAlign': 'center',
    'padding': '10px',
    'backgroundColor':'#ffabe4'
}

const Footer=()=>{
    return(
        <footer style={FooterStyle}>
            <h3>For more visit my Linkedin profile</h3>
        </footer>
    )
}
export default Footer;