import React from 'react';
import { connect } from "react-redux";
import LoginForm from "./login_form";
import { login, clearErrors } from "../../../actions/session_actions";
import { openModal, closeModal } from "../../../actions/modal_actions";

const mSTP = ({ errors }) => ({
  errors: errors.session,
  formType: 'login',
  demo: {
    email: "tonightbnb@admin.com",
    password: "welcometomyapp"
  }
});

const mDTP = dispatch => ({
  processForm: (user) => dispatch(login(user)),
  redirect :<div onClick={() => dispatch(openModal('signup'))}>Sign up</div>,
  closeModal: () => dispatch(closeModal()),
  clearErrors: () => dispatch(clearErrors())
});

export default connect(mSTP, mDTP)(LoginForm);