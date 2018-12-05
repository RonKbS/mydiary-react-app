import React from 'react';
import PropTypes from 'prop-types';

export const SingleEntry = ({ entry }) => (
  <div className="row entry">
    <div className="card container entry-container">
      <div className="row no-gutters">
        <div className="col-9">
          <div className="card-block px-2">
            <button type="button" className="btn btn-block btn-light entry-btn" data-toggle="modal" data-target={`#${entry.title.split(' ').join('-')}`}>
              <h5 className="card-title text-left mb-0">{entry.title}</h5>
            </button>
            <div className="modal fade" id={`${entry.title.split(' ').join('-')}`} tabIndex="-1" role="dialog" aria-labelledby="contentTitle" aria-hidden="true">
              <div className="modal-dialog" role="document">
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="modal-title" id="contentTitle">{entry.title}</h5>
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                      <span aria-hidden="true">&times;</span>
                    </button>
                  </div>
                  <div className="modal-body">
                    <p className="card-text entry-content">{entry.content}</p>
                  </div>
                  <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

SingleEntry.propTypes = {
  entry: PropTypes.object.isRequired,
};

const EntriesList = ({ entries }) => (
  typeof entries !== 'string'
    ? (
      <div>
        {entries.map(entry => (
          <SingleEntry entry={entry} />
        ))}
      </div>) : false
);

EntriesList.propTypes = {
  entries: PropTypes.array.isRequired,
};

export default EntriesList;
