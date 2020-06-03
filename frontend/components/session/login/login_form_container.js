import React from 'react';
import { connect } from "react-redux";
import LoginForm from "./login_form";
import { login } from "../../../actions/session_actions";
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
    otherForm: (
        <div onClick={() => dispatch(openModal('Signup'))}>
            Sign up
        </div>
    ),
    closeModal: () => dispatch(closeModal()),
});

export default connect(mSTP, mDTP)(LoginForm);