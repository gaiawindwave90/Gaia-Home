import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import {defineMessages, injectIntl, intlShape} from 'react-intl';

import styles from './section-info.css';

import codeIcon from './icons/code.svg';

import openEditor from './button.js';

const SectionInfoComponent = function (props) {
    const { intl } = props;
    return (
        <div className="section-info"><h2>Block-based coding with many special capabilities</h2><h2> Built off of <a style={{ color: 'orange' }} href="https://scratch.mit.edu"> Scratch</a>, <a style={{ color: 'red' }} href="https://turbowarp.org"> TurboWarp</a>, and
			<a style={{ color: 'cyan'}} href="https://penguinmod.com"> PenguinMod</a>.</h2> <button onClick={openEditor} ><img src={codeIcon}></img>Try it out!</button></div>
    )
}

SectionInfoComponent.propTypes = {
    intl: intlShape
};

const IntlSectionInfo = injectIntl(SectionInfoComponent);
export default (IntlSectionInfo)