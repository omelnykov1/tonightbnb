import React from 'react';
import { connect } from "react-redux";
import { openModal, closeModal } from "../../../actions/modal_actions";
import { signup } from "../../../actions/session_actions";
import SignupForm from "./signup_form";

const mSTP = ({ errors }) => ({
    errors: errors.session,
    formType: 'Signup'
});

const mDTP = (dispatch) => ({
    processForm: (user) => dispatch(signup(user)),
    otherForm: (
        <div className="session-button" onClick={() => dispatch(openModal('Login'))}>
            Log in
        </div>
    ),
    closeModal: () => dispatch(closeModal())
})

export default connect(mSTP, mDTP)(SignupForm);