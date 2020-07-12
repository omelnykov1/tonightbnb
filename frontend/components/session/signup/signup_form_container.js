import React from 'react';
import { connect } from "react-redux";
import { openModal, closeModal } from "../../../actions/modal_actions";
import { signup, clearErrors } from "../../../actions/session_actions";
import SignupForm from "./signup_form";

const mSTP = ({ errors }) => ({
    errors: errors.session,
    formType: 'Signup'
});

const mDTP = (dispatch) => ({
    processForm: user => dispatch(signup(user)),
    redirect: (
        <div className="session-button" onClick={() => dispatch(openModal('login'))}> Log in </div>
    ),
    closeModal: () => dispatch(closeModal()),
    clearErrors: () => dispatch(clearErrors())
})

export default connect(mSTP, mDTP)(SignupForm);