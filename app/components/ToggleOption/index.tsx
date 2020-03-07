/**
 *
 * ToggleOption
 *
 */

import * as React from 'react';
import { injectIntl } from 'react-intl';

const ToggleOption: React.FC<{}> = ({ value, message, intl }: any) => (
  <option value={value}>{message ? intl.formatMessage(message) : value}</option>
);

export default injectIntl(ToggleOption);
