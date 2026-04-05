import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import {defineMessages, injectIntl, intlShape} from 'react-intl';

import Utils from '../../lib/utils';

import styles from './footer.css';

const messages = defineMessages({
    notaffiliatedText: {
        id: "home.footer.notaffiliated",
        defaultMessage: 'GaiaMod is not affiliated with Scratch, TurboWarp, PenguinMod, the Scratch Team, or the Scratch Foundation.',
        description: 'not affiliated text'
    },
    websiteText: {
        id: "home.footer.website",
        defaultMessage: 'Website',
        description: 'create button title'
    },
    donateText: {
        id: "home.footer.donate",
        defaultMessage: 'Donate',
        description: 'donate button title'
    },
    communityText: {
        id: "home.footer.community",
        defaultMessage: 'Community',
        description: 'community button title'
    },
    row1EditorText: {
        id: "home.footer.row1.editor",
        defaultMessage: 'Editor',
        description: 'community button title'
    },
    row1CreditsText: {
        id: "home.footer.row1.credits",
        defaultMessage: 'Credits',
        description: 'credits button title'
    },
    row1ExamplesText: {
        id: "home.footer.row1.examples",
        defaultMessage: 'Examples',
        description: 'another examples button title'
    },
    row1SourceText: {
        id: "home.footer.row1.source",
        defaultMessage: 'Source',
        description: 'source button title'
    },
    row1StatusText: {
        id: "home.footer.row1.status",
        defaultMessage: 'Status',
        description: 'another status button title'
    },
    row2IssueText: {
        id: "home.footer.row2.issue",
        defaultMessage: 'Report an Issue',
        description: 'report an issue button title'
    }
})

const FooterComponent = function (props) {
    const { intl } = props;

    return (
        <footer className="footer">
            <h1>{Utils.formatMessage(messages.notaffiliatedText, intl, "GaiaMod is not affiliated with Scratch, TurboWarp, PenguinMod, the Scratch Team, or the Scratch Foundation.")}</h1>
            <div className="footer-row">
                <h3>{Utils.formatMessage(messages.websiteText, intl, "Website")}</h3>
                <a href="https://gaiamod-main.github.io/GaiaMod/editor.html">{Utils.formatMessage(messages.row1EditorText, intl, "Editor")}</a>
                <a href="https://gaiamod-main.github.io/GaiaMod/credits.html">{Utils.formatMessage(messages.row1CreditsText, intl, "Editor")}</a>
                <a href="/Gaia-Home/examples">{Utils.formatMessage(messages.row1ExamplesText, intl, "Editor")}</a>
                <a href="https://github.com/gaiamod-main">{Utils.formatMessage(messages.row1SourceText, intl, "Editor")}</a>
                <a href="https://gaiamod.betteruptime.com/">{Utils.formatMessage(messages.row1StatusText, intl, "Editor")}</a>
            </div>
            <div className="footer-row">
                <h3>{Utils.formatMessage(messages.communityText, intl, "Community")}</h3>
                <a href="https://github.com/gaiamod-main/gaia-home/issues">{Utils.formatMessage(messages.row2IssueText, intl, "Editor")}</a>
            </div>
            <div className="footer-row">
                <h3>{Utils.formatMessage(messages.donateText, intl, "Donate")}</h3>
                <a href="https://penguinmod.com/donate">PenguinMod</a>
                <a href="https://github.com/sponsors/GarboMuffin">TurboWarp</a>
                <a href="https://www.scratchfoundation.org/donate">Scratch</a>
            </div>
        </footer>
    )
}

FooterComponent.propTypes = {
    intl: intlShape
};

const IntlFooter = injectIntl(FooterComponent);
export default (IntlFooter);