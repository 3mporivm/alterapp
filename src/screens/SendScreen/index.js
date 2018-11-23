import React from 'react';
import PropTypes from "prop-types";
import { compose, getContext, withHandlers, withState } from "recompose";
import { ui, forms, modals } from 'components';
import iconSendWhite from 'assets/img/send-white.svg';
import Immutable from 'immutable';

import 'assets/screens.scss';
import './style.scss';

const SendScreen = ({
  currencies,
  onCoin,
  onSettings,
  onBack,
  setFooterModalOpen,
  confirmationSending,
}) => (
  <div className="send-screen-layout">
    <ui.Header
      onBackPress={onBack}
      isExtended
      onCenterPress={() => alert('onCenterPress')}
      onRightPress={onSettings}
      title="Send BTC"
    />
    <forms.SendForm
      onSubmit={(value) => setFooterModalOpen(value)}
      initialValues={{
        amount: "0.17846838",
      }}
    />
    {
      confirmationSending.get('amount') && <div className="header__hide-background"/>
    }
    {
      <modals.Footer
        icon={iconSendWhite}
        style={{ bottom: confirmationSending.get('amount') ? 0 : -500 }}
      >
        <ui.ConfirmationSending
          onCancel={() => setFooterModalOpen(Immutable.Map())}
          onSend={() => {}}
          values={confirmationSending}
        />
      </modals.Footer>
    }
    <ui.InfoBlock/>
  </div>
);

SendScreen.propTypes = {
  onCoin: PropTypes.func.isRequired,
  onSettings: PropTypes.func.isRequired,
  onBack: PropTypes.func.isRequired,
  setFooterModalOpen: PropTypes.func.isRequired,
  isFooterModalOpen: PropTypes.bool.isRequired,
};

SendScreen.defaultProps = {
};

export default compose(
  withState('confirmationSending', 'setFooterModalOpen', Immutable.Map()),
  getContext({
    router: PropTypes.shape({
      history: PropTypes.shape({
        push: PropTypes.func.isRequired,
      }).isRequired,
    }).isRequired,
  }),
  withHandlers({
    onBack: ({ router }) => () => {
      router.history.push('/wallet');
    },
    onCoin: ({ router }) => () => {
      router.history.push({
        pathname: '/coin',
      });
    },
    onSettings: ({ router }) => () => {
      router.history.push({
        pathname: '/settings',
      });
    },
  })
)(SendScreen);
