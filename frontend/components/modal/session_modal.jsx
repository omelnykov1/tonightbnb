import React from 'react';
import { closeModal } from '../../actions/modal_actions';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import LoginFormContainer from '../session/login/login_form_container';
import SignupFormContainer from '../session/signup/signup_form_container';
import ReviewContainer from '../review/review_container';

const Modal = ({ modal, closeModal }) => {
  if (!modal) return null;
  let component;
  switch (modal) {
    case 'login':
      component = <LoginFormContainer />;
      break;
    case 'signup':
      component = <SignupFormContainer />;
      break;
    case 'review':
      component = <ReviewContainer />;
      break;
    default:
      return null;
  }
  return (
    <div className="modal-background" onClick={closeModal}>
      <div className="modal-child" onClick={e => e.stopPropagation()}>
        {component}
      </div>
    </div>
  );
}

const mSTP = state => ({ modal: state.ui.modal });
const mDTP = dispatch => ({ closeModal: () => dispatch(closeModal()) });

export default connect(mSTP, mDTP)(withRouter(Modal));