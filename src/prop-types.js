import PropTypes from 'prop-types';

const ImagePropTypes = PropTypes.shape({
    original: PropTypes.string,
    medium: PropTypes.string,
});

const HeadersPropTypes = PropTypes.shape({
    'cache-control': PropTypes.string,
    'content-type': PropTypes.string,
});

export const EpisodePropTypes = PropTypes.shape({
    airstamp: PropTypes.string,
    summary: PropTypes.string,
    airdate: PropTypes.string,
    runtime: PropTypes.number,
    airtime: PropTypes.string,
    number: PropTypes.number,
    season: PropTypes.number,
    name: PropTypes.string,
    url: PropTypes.string,
    image: ImagePropTypes,
    id: PropTypes.number,
});

export const EsisodesListPropTypes = PropTypes.shape({
    data: PropTypes.arrayOf(EpisodePropTypes),
    statusText: PropTypes.string,
    headers: HeadersPropTypes,
    config: PropTypes.shape(),
    status: PropTypes.number,
});

export const ShowDetailsPropTypes = PropTypes.shape({
    data: PropTypes.shape({
        genres: PropTypes.arrayOf(PropTypes.string),
        webChannel: PropTypes.shape({}),
        officialSite: PropTypes.string,
        externals: PropTypes.shape({}),
        schedule: PropTypes.shape({}),
        network: PropTypes.shape({}),
        average: PropTypes.shape({}),
        premiered: PropTypes.string,
        rating: PropTypes.shape({}),
        language: PropTypes.string,
        runtime: PropTypes.number,
        weight:  PropTypes.number,
        summary: PropTypes.string,
        updated: PropTypes.number,
        status: PropTypes.string,
        type: PropTypes.string,
        name: PropTypes.string,
        url: PropTypes.string,
        image: ImagePropTypes,
        id: PropTypes.number,
    }),
    config: PropTypes.shape({}),
    statusText: PropTypes.string,
    status: PropTypes.number,
    headers: HeadersPropTypes,
});
