import React from 'react';
import PropTypes from 'prop-types';
import { get } from 'lodash';
import { Row, Col, KeyValue } from '@folio/stripes/components';
import css from '../ContactInformationView.css';
import LanguageLookup from '../../Utils/LanguageLookup';
import CatIDToLabel from '../../Utils/CatIDToLabel';

class ContactInformationView extends React.Component {
  static propTypes = {
    dataVal: PropTypes.arrayOf(PropTypes.object),
    dropdownVendorCategories: PropTypes.arrayOf(PropTypes.object),
  };

  constructor(props) {
    super(props);
    this.getPhoneNumbers = this.getPhoneNumbers.bind(this);
  }

  getPhoneNumbers(val, key) {
    const { dropdownVendorCategories } = this.props;
    const rowCount = (this.props.dataVal.length - 1) !== key;
    const categories = CatIDToLabel(val.categories, dropdownVendorCategories) || '';
    const phonenumber = get(val, 'phone_number', '');
    const type = get(val, 'type', '');
    const getLanguage = LanguageLookup(get(val, 'language', ''));

    return (
      <Row key={key}>
        <Col xs={3}>
          <KeyValue label="Phone Number" value={phonenumber} />
        </Col>
        <Col xs={3}>
          <KeyValue label="Type" value={type} />
        </Col>
        <Col xs={3}>
          <KeyValue label="Language" value={getLanguage} />
        </Col>
        <Col xs={3}>
          <KeyValue label="Categories" value={categories} />
        </Col>
        {rowCount &&
          <div style={{ width: '100%' }}>
            <hr />
          </div>
        }
      </Row>
    );
  }

  render() {
    const { dataVal } = this.props;
    return (
      <Col xs={12} className={css.rowHeader}>
        <div className={css.subHeadings}>Phone Numbers</div>
        { dataVal.map(this.getPhoneNumbers) }
      </Col>
    );
  }
}

export default ContactInformationView;
