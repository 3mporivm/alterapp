import React from 'react';
import { compose } from 'recompose';
import { ui } from 'components';
import PropTypes from 'prop-types';
import { Field, reduxForm } from 'redux-form/immutable';

import iconSendWhite from 'assets/img/send-white.svg';
import iconSend from 'assets/img/send.svg';

import { required } from 'validators';

import './style.scss';

const SendForm = ({
  handleSubmit,
  facebookLoginRequest,
  isFetching,
  invalid,
}) => (
  <form onSubmit={handleSubmit} className="send-form-wrapper">
    <div className="send-form">
      <ui.Badge icon={iconSendWhite}/>
      <div className="send-form__title">
        Balance: 1.23567815
      </div>
      <Field
        validate={required}
        component={ui.Fields.AmountField}
        name="amount"
        props={{
          inputId: 'amount',
          styleWrapper: {
            marginTop: 20,
          },
          label: 'Amount',
        }}
      />
      <Field
        validate={required}
        component={ui.Fields.BasicField}
        name="BTC_address"
        placeholder="BTC address"
        props={{
          inputId: 'BTC_address',
          styleWrapper: {
            marginTop: 20,
          },
        }}
      />
      <Field
        validate={required}
        component={ui.Fields.BasicField}
        name="payment_id"
        placeholder="Payment ID"
        props={{
          inputId: 'payment_id',
          styleWrapper: {
            marginTop: 20,
          },
        }}
      />
    </div>
    <ui.Buttons.BasicButton
      title="Send"
      color="purple"
      icon={iconSend}
      onPress={handleSubmit}
      isLoading={isFetching}
      isDisabled={invalid || isFetching}
      style={{ marginTop: 20 }}
    />
  </form>
);

SendForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  isFetching: PropTypes.bool.isRequired,
};


SendForm.defaultProps = {
};


export default compose(
  reduxForm({
    form: 'sendForm',
  }),
)(SendForm);