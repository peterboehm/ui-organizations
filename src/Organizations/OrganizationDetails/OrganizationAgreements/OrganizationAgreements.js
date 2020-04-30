import React from 'react';
import { FormattedMessage } from 'react-intl';
import PropTypes from 'prop-types';

import OrganizationAgreement from './OrganizationAgreement';

const OrganizationAgreements = ({ agreements }) => {
  if (!agreements.length) {
    return (
      <p>
        <FormattedMessage id="ui-organizations.agreement.noAgreementsAvailable" />
      </p>
    );
  }

  return (
    <div data-test-agreements>
      {
        agreements.map((agreement, idx) => (
          <>
            <OrganizationAgreement
              key={idx}
              name={agreement.name}
              discount={agreement.discount}
              referenceUrl={agreement.referenceUrl}
              notes={agreement.notes}
            />

            {idx !== agreements.length && <hr />}
          </>
        ))
      }
    </div>
  );
};

OrganizationAgreements.propTypes = {
  agreements: PropTypes.arrayOf(PropTypes.object),
};

OrganizationAgreements.defaultProps = {
  agreements: [],
};

export default OrganizationAgreements;
