import classNames from 'classnames';
import omit from 'lodash.omit';
import PropTypes from 'prop-types';
import React from 'react';
import {defineMessages, injectIntl, intlShape} from 'react-intl';

import MenuBar from '../../containers/menu-bar.jsx';
import FooterCustom from '../../containers/footer.jsx';
import SectionInfo from '../../containers/section-info.jsx';
import RecentChanges from '../../containers/recent-changes.jsx';
import Gap from '../../containers/gap.jsx';
import SignUpGui from '../../containers/signup-gui.jsx';
import SectionLinks from '../../containers/section-links.jsx';
import WhatsNew from '../../containers/whats-new.jsx';

import {BRAND_NAME} from '../../lib/brand.js';
import {BRAND_LOGO} from '../../lib/logo.js';
import Utils from '../../lib/utils';

import exampleCards from '../../lib/example-cards';

import styles from './gui.css';

/* eslint-disable react/no-multi-comp */

const pathname = window.location.pathname;

const messages = defineMessages({
    homePageText: {
        id: "home.section.welcomemessage",
        defaultMessage: 'Welcome to the Home Page of GaiaMod!',
        description: 'welcome text'
    },
    noMentionText: {
        id: "home.section.nometion",
        defaultMessage: 'Please don\'t mention GaiaMod on Scratch! We have different rules compared to the ones on Scratch!',
        description: 'no mentioning text'
    },
    examplesPageText: {
        id: "home.section.examplesmessage",
        defaultMessage: 'Welcome to the Projects Page of GaiaMod!',
        description: 'examples text'
    },
})

const ExampleCard = props => {
    const { intl, name, href, iconURL } = props;
    return (
        <div className="image-card">
            <img src={iconURL} alt="Image"/>
            <h3>{name}</h3>
            <a href={href}>Try it out!</a>
        </div>
    )
}

ExampleCard.propTypes = {
    intl: intlShape,
    name: PropTypes.string.isRequired,
    href: PropTypes.string.isRequired,
    iconURL: PropTypes.any.isRequired,
}


const GUIComponent = props => {
    const {
        intl,
        ...componentProps
    } = omit(props, 'dispatch')

    const isExamplesPage = pathname.includes("examples");
    const isInSignUpPage = pathname.includes("signup");

    const exampleCardsArray = [];

    exampleCards.forEach(card => {
        exampleCardsArray.push(<ExampleCard
            name={card.name}
            href={card.href}
            iconURL={card.iconURL}
        />)
    });

    return (
        <React.Fragment>
            <MenuBar
                intl={intl}
                {...componentProps}
            />
            {(!isInSignUpPage && (
                <div className="thats enough divs!!!">
                    <SectionInfo
                        intl={intl}
                        {...componentProps}
                    />
                    <SectionLinks
                        intl={intl}
                        {...componentProps}
                    />
                    <section>
                        <h1><img src={BRAND_LOGO} alt="Logo"/></h1>
                        <p>{isExamplesPage ? Utils.formatMessage(messages.examplesPageText, intl, "Welcome to the Scratch Page of GaiaMod!") : Utils.formatMessage(messages.noMentionText, intl, "Please don\'t mention GaiaMod on Scratch! We have different rules compared to the ones on Scratch!")}</p>
                    </section>
                    {(!!isExamplesPage && (
                        <React.Fragment>
                            <Gap size="18px" />
                            <div className="section-content">
                                {exampleCardsArray}
                            </div>
                        </React.Fragment>
                    ))}
                    <Gap size="18px" />
                    <div className="containers">
                        <RecentChanges
                            intl={intl}
                            {...componentProps}
                        />
                        <WhatsNew
                            intl={intl}
                            {...componentProps}
                        />
                    </div>
                    <Gap size="18px" />
                    <FooterCustom
                        intl={intl}
                        {...componentProps}
                    />
                </div>
            ))}
            {(!!isInSignUpPage && (
                <div className="page-wrapper">
                    <SignUpGui
                        intl={intl}
                        {...componentProps}
                    />
                </div>
            ))}
        </React.Fragment>
    )
}

GUIComponent.propTypes = {
    intl: intlShape
}

export default injectIntl(GUIComponent);