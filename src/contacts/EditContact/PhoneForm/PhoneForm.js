import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import {
  Field,
  FieldArray,
} from 'redux-form';

import {
  Col,
  RepeatableField,
  Row,
  TextField,
  Label,
} from '@folio/stripes/components';
import {
  validateRequired,
  FieldSelect,
} from '@folio/stripes-acq-components';

import {
  FieldLanguage,
  ButtonIsPrimary,
} from '../../../common/components';
import { createAddNewItem } from '../../../common/utils';
import CategoryDropdown from '../../../Utils/CategoryDropdown';

const headLabels = (
  <Row>
    <Col
      data-test-contact-phone-label-value
      xs={3}
    >
      <Label
        id="phoneFormValueLabel"
        required
      >
        <FormattedMessage id="ui-organizations.contactPeople.phoneNumbers.phoneNumber" />
      </Label>
    </Col>

    <Col
      data-test-contact-phone-label-description
      xs={2}
    >
      <Label id="phoneFormTypeLabel">
        <FormattedMessage id="ui-organizations.contactPeople.phoneNumbers.type" />
      </Label>
    </Col>

    <Col
      data-test-contact-phone-label-language
      xs={2}
    >
      <Label id="phoneFormLanguageLabel">
        <FormattedMessage id="ui-organizations.contactInfo.language" />
      </Label>
    </Col>

    <Col
      data-test-contact-phone-label-category
      xs={3}
    >
      <Label id="phoneFormCategoriesLabel">
        <FormattedMessage id="ui-organizations.data.contactTypes.categories" />
      </Label>
    </Col>

    <Col
      data-test-contact-phone-label-primary
      xs={2}
    >
      <Label>
        <FormattedMessage id="ui-organizations.primaryItem" />
      </Label>
    </Col>
  </Row>
);

const PhoneForm = ({ categories, dispatchChange, phoneTypesList }) => {
  const addNewPhone = useCallback((fields) => createAddNewItem()(fields), []);

  const renderEmailFields = (elem, index, fields) => {
    return (
      <Row>
        <Col
          data-test-contact-phone-number
          xs={3}
        >
          <Field
            component={TextField}
            name={`${elem}.phoneNumber`}
            required
            validate={validateRequired}
            ariaLabelledBy="phoneFormValueLabel"
          />
        </Col>

        <Col
          data-test-contact-phone-type
          xs={2}
        >
          <FieldSelect
            name={`${elem}.type`}
            dataOptions={phoneTypesList}
            aria-labelledby="phoneFormTypeLabel"
          />
        </Col>

        <Col
          xs={2}
          data-test-contact-phone-language
        >
          <FieldLanguage
            namePrefix={elem}
            withLabel={false}
            ariaLabelledBy="phoneFormLanguageLabel"
          />
        </Col>

        <Col
          xs={3}
          data-test-contact-phone-category
        >
          <CategoryDropdown
            dropdownVendorCategories={categories}
            name={elem}
            withLabel={false}
            ariaLabelledBy="phoneFormCategoriesLabel"
            id={`contact-form-phone-categories-${index}`}
          />
        </Col>

        <Col
          xs={2}
          data-test-contact-phone-primary
        >
          <ButtonIsPrimary
            dispatchChange={dispatchChange}
            fields={fields}
            fieldIndex={index}
            labelId="ui-organizations.primaryItem"
          />
        </Col>
      </Row>
    );
  };

  return (
    <FieldArray
      addLabel={<FormattedMessage id="ui-organizations.contactPeople.addPhoneNumber" />}
      component={RepeatableField}
      headLabels={headLabels}
      id="phoneNumbers"
      name="phoneNumbers"
      onAdd={addNewPhone}
      renderField={renderEmailFields}
    />
  );
};

PhoneForm.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.object),
  dispatchChange: PropTypes.func.isRequired,
  phoneTypesList: PropTypes.arrayOf(PropTypes.object),
};

PhoneForm.defaultProps = {
  phoneTypesList: [],
};

export default PhoneForm;
