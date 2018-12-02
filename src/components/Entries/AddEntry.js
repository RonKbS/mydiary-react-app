import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { addEntry } from '../../actions/userActions';

export class AddEntry extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      content: '',
    };
  }

  handleSubmit = event => {
    event.preventDefault();
    const { title, content } = this.state;
    const payload = {
      title,
      content,
    };
    const { dispatch } = this.props;
    dispatch(addEntry(payload));
  }

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    const { title, content } = this.state;
    return (
      <React.Fragment>
        <div className="modal fade bg-transparent my-navbar modal-style" id="addEntry" tabIndex="-1" role="dialog" aria-labelledby="addEntryTitle" aria-hidden="true">
          <div className="modal-dialog modal-dialog-centered modal-lg" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <div className="md-form mb-5 title-form-group">
                  <div className="input-group mb-2">
                    <input
                      type="text"
                      name="title"
                      className="input-entry-field"
                      placeholder="Title..."
                      maxLength="30"
                      autoComplete="off"
                      id="title"
                      value={title}
                      onChange={this.handleChange}
                      required
                    />
                  </div>
                </div>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <div className="row">
                  <div className="col-12">
                    <form id="add-entry-form" onSubmit={this.handleSubmit}>
                      <div className="form-group">
                        <div className="input-group mb-2">
                          <textarea
                            type="text"
                            name="content"
                            cols="15"
                            rows="15"
                            className="input-entry-field"
                            placeholder="Entry..."
                            id="entry"
                            autoComplete="off"
                            required
                            value={content}
                            onChange={this.handleChange}
                          />
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-dismiss="modal" onClick={this.handleSubmit}>Save</button>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

AddEntry.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

export default connect()(AddEntry);
