import {
  interactor,
} from '@bigtest/interactor';

import Button from './Button';
import {
  AccountsSection,
  ContactInformationSection,
  ContactPeopleSection,
  EdiInformationSection,
  InterfacesSection,
  SummarySection,
  VendorInformationSection,
  VendorTermsSection,
} from './orgSections';

export default interactor(class OrganizationDetailsInteractor {
  static defaultScope = '#pane-vendordetails';

  closePaneButton = new Button('[class*=paneHeaderButtonsArea---] [icon=times]');
  editOrganizationButton = new Button('#clickable-editvendor');

  summarySection = new SummarySection();
  contactInformationSection = new ContactInformationSection();
  contactPeopleSection = new ContactPeopleSection();
  interfacesSection = new InterfacesSection();
  vendorInformationSection = new VendorInformationSection();
  vendorTermsSection = new VendorTermsSection();
  ediInformationSection = new EdiInformationSection();
  accountsSection = new AccountsSection();

  expandAllButton = new Button('[class*=paneContent---] div[class*=row---] [class*=button---]');
});
