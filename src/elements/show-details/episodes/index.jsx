// Module imports
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { TabContent, TabPane, Nav, NavItem, NavLink } from 'reactstrap';
import classnames from 'classnames';
import map from 'lodash/map';
import groupBy from 'lodash/groupBy';

// Internal imports
import { EsisodesListPropTypes } from 'src/prop-types';
import { EpisodesList } from './episodes-list';

export class Episodes extends Component {
  static propTypes = {
    episodesList: PropTypes.arrayOf(EsisodesListPropTypes),
  };
  static defaultProps = {
    episodesList: []
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

  /**
   * Function below will generate The NavItem by Seasons.
   * Here(line: 41) is checked equality of the activeTab and the season without typeChecking.
   * Because currentTarget returns as a value number when even it set the "1".
   * And instead of parse the Object.keys, preffered to parse here.
   * @param {Array} seasons - Array of numbers.
   * @returns {Element}
   */
  generateNavItems = seasons => (
    <Nav tabs>
      {seasons.map(season => (
        <NavItem
          value={season}
          key={season}
          onClick={this.toggleTabs}
        >
          <NavLink className={classnames({ active: this.state.activeTab === +season })}>
            {`Season ${season}`}
          </NavLink>
        </NavItem>
      ))}
    </Nav>
  );

  /**
   * Function below generates the TabContents.
   * The keys of the TabPane is unique and doesn't change the order
   * because it is seasons which groupped.
   * @param {Object} episodesBySeasons - An Object which key is a number of season and value is a episodes array.
   * @returns {Element}
   */
  generateTabContents = episodesBySeasons => (
    <TabContent activeTab={this.state.activeTab}>
      {map(episodesBySeasons, (episodes, index) => (
        <TabPane tabId={+index} key={index}>
          <EpisodesList episodes={episodes} showID={this.props.showID} />
        </TabPane>
      ))}
    </TabContent>
  );

  render() {
    const episodesBySeasons = groupBy(this.props.episodesList, 'season');
    const seasons = Object.keys(episodesBySeasons);

    return (<div>
        {this.generateNavItems(seasons)}
        {this.generateTabContents(episodesBySeasons)}
      </div>);
  };
};
