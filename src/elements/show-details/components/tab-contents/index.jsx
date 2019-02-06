// Module imports
import React from 'react';
import PropTypes from 'prop-types';
import { TabContent, TabPane } from 'reactstrap';
import map from 'lodash/map';

// Internal imports
import { EpisodesListPropTypes } from 'src/prop-types';
import { EpisodesList } from './../episodes-list';

export function TabContents({ episodesBySeasons, activeTab, showID }) {
    return(
        <TabContent activeTab={activeTab}>
            {map(episodesBySeasons, (episodes, index) => (
                <TabPane tabId={+index} key={index}>
                <EpisodesList episodes={episodes} showID={showID} />
                </TabPane>
            ))}
        </TabContent>
    );
}

TabContents.propTypes = {
    [PropTypes.string]: PropTypes.shape(EpisodesListPropTypes),
    activeTab: PropTypes.number,
    showID: PropTypes.string,
};

TabContents.defaultProps = {
    seasons: [],
    activeTab: 1,
    showID: '1',
};