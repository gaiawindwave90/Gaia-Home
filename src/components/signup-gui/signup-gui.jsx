import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import {defineMessages, injectIntl, intlShape} from 'react-intl';

import Gap from '../../containers/gap.jsx';

import styles from './signup-gui.css';

import handleSubmit from './handleSubmit.js';

const SignUpGuiComponent = function (props) {
    const { intl } = props;
    return (
        <form id="signup-div" onSubmit={handleSubmit}>
            <h2>GaiaMod</h2>
            <Gap size="10px" />
            <p>Create your personal account</p>
            <Gap size="18px" />
            <div id="signup-username-div">
                <h3>Username</h3>
                <input type='text' id='signup-username-input' name='username' required/>
            </div>
            <Gap size="18px" />
            <div id="signup-email-div">
                <h3>Email</h3>
                <input type='email' id='signup-email-input' name='email' required/>
            </div>
            <Gap size="18px" />
            <div id="signup-password-div">
                <h3>Password</h3>
                <input type='password' id='signup-password-input' name='password' required/>
            </div>
            <Gap size="18px" />
            <p id='signup-error-message' style={{color: 'red', display: 'none', fontStyle: 'italic'}}></p>
            <Gap size="5px" />
            <button id='signup-submit-button' type="submit">Sign Up</button>
        </form>
    )
}

SignUpGuiComponent.propTypes = {
    intl: intlShape
};

const IntlSignUpGui = injectIntl(SignUpGuiComponent);
export default (IntlSignUpGui)