import { connect } from 'react-redux';

import { logout } from '../../actions/session_actions';
import Greeting from './greeting';

const mapStateToProps = ({ session }) => ({
    currentUser: session.currentUser
});

const mapDispatchToProps = dispatch => ({
    logout: () => dispatch(logout()),
    signUp: () => {
        this.props.history.push('/signup');
    },

});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Greeting);
