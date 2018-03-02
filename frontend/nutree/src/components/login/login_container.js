import { connect } from 'react-redux';
import { login, signup, receiveErrors } from '../../actions/session_actions';
import LoginForm from './login_form';
import { withRouter } from 'react-router-dom';


const mapStateToProps = ({ session }) => {
    return {
        loggedIn: Boolean(session.currentUser),
        errors: session.errors
    };
};

const mapDispatchToProps = (dispatch, { location }) => {
    const formType = location.pathname.slice(1);
    console.log(formType, "HERE GO THE FORM");
    const processForm = (formType === 'login') ? login : signup;
    return {
        processForm: user => dispatch(processForm(user)),
        formType,
        receiveErrors: errors => dispatch(receiveErrors(errors))
    };
};

export default withRouter(connect(
    mapStateToProps,
    mapDispatchToProps
)(LoginForm));
