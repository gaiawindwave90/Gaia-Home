import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import {defineMessages, injectIntl, intlShape} from 'react-intl';

import './section-links.css';

import ButtonComponent from './button.jsx';

const SectionLinksComponent = function (props) {
    const {
        intl
    } = props;
    return (
        <div
            className="sectionLinks"
        >
            <ButtonComponent
                intl={intl}
                label={'Packager'}
                link={'https://gaiamod-main.github.io/Gaia-Home/GaiaMod-Packager'}
            />
            <ButtonComponent
                intl={intl}
                label={'Credits'}
                link={'https://gaiamod-main.github.io/Gaia-Home/credits.html'}
            />
            <ButtonComponent
                intl={intl}
                label={'GitHub'}
                link={'https://github.com/GaiaMod-Main'}
            />
        </div>
    )
}

SectionLinksComponent.propTypes = {
    intl: intlShape
};

export default injectIntl(SectionLinksComponent);