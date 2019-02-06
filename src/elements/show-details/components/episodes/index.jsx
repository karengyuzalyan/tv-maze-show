// Module imports
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import groupBy from 'lodash/groupBy';

// Internal imports
import { EpisodesListPropTypes } from 'src/prop-types';
import { TabContents } from './../tab-contents';
import { NavItems } from './../nav-items';

export class Episodes extends Component {
  static propTypes = {
    episodesList: PropTypes.arrayOf(EpisodesListPropTypes),
    showID: PropTypes.string,
  };
  static defaultProps = {
    episodesList: [],
    showID: '',
  };

  state = {
    activeTab: 1
  };

  /**
   * Function below sets the active tab.
   * @param {Event} event - Synthetic event
   */
  toggleTabs = event => {
    const { value } = event.currentTarget;
    if (this.state.activeTab !== value) {
      this.setState({
        activeTab: value
      });
    }
  };

  render() {
    const episodesBySeasons = groupBy(this.props.episodesList, 'season');
    const seasons = Object.keys(episodesBySeasons);

    return (<div>
        <NavItems
          activeTab={this.state.activeTab}
          toggleTabs={this.toggleTabs}
          seasons={seasons}
        />
        <TabContents
          activeTab={this.state.activeTab}
          episodesBySeasons={episodesBySeasons}
          showID={this.props.showID}
        />
      </div>);
  };
};
