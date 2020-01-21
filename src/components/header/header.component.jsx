import React from 'react';
import { Link } from 'react-router-dom';
import './header.styles.scss';
import { auth } from '../../firebase/firebase.utils';
import CustomButton from '../custom-button/custom-button.component';
import { signInWithGoogle } from '../../firebase/firebase.utils';



const Header = ({currentUser}) => (
    <div className = "header">
        <Link className="logo-container, custom-button" to ="/">
            HOME
        </Link>

        <div className = "options">
            <Link className = "custom-button" to='/about'>ABOUT</Link>
            <Link className = "custom-button" to='/contact'>CONTACT</Link>
            <Link>
            {
                currentUser ?
                <div className = 'custom-button' onClick={() => auth.signOut()}> SIGN OUT </div>
                :
                <CustomButton onClick={signInWithGoogle}> Sign in with Google </CustomButton>

            }

            </Link>
        </div>

    </div>
)

export default Header;
