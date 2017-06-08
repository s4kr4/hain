'use strict';

import React from 'react';
import { TextField } from 'material-ui';

import EasyInput from 'easyinput';

const utils = require('../utils');

class ShortcutStringComponent extends React.Component {
  handleChange(evt, val) {
    const { onChange, path } = this.props;
    onChange(path, val);
  }

  handleKeyDown(evt) {
    const { onChange, path } = this.props;

    let val = EasyInput.handleKeyDown(evt);

    onChange(path, val);
  }

  render() {
    const { schema, model, name, path, errors } = this.props;
    const error = utils.findErrorMessage(errors, path);
    let title = schema.title || name;
    const description = utils.wrapDescription(schema.description);

    if (title !== undefined)
      title = (<h5 style={{ marginBottom: '2px' }}>{title}</h5>);

    return (
      <div>
        {title}
        {description}
        <TextField name="text" value={model} errorText={error}
                   fullWidth={true} style={{ marginTop: '-2px' }}
                   onKeyDown={this.handleKeyDown.bind(this)} />
      </div>
    );
  }
}

module.exports = ShortcutStringComponent;
