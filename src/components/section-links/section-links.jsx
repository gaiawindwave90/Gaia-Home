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
                link={'https://gaiamod-main.github.io/GaiaMod-Packager/'}
            />
            <ButtonComponent
                intl={intl}
                label={'Credits'}
                link={'https://gaiamod-main.github.io/credits.html'}
            />
            <ButtonComponent
                intl={intl}
                label={'GitHub'}
                link={'https://github.com/GaiaMod-Main/'}
            />
            <ButtonComponent
                intl={intl}
                label={'Gaia Zone'}
                link={'https://gaiawindwave90.github.io/'}
            />
        </div>
    )
}

SectionLinksComponent.propTypes = {
    intl: intlShape
};

export default injectIntl(SectionLinksComponent);