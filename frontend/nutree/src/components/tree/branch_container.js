import { connect } from 'react-redux';

import { logout } from '../../actions/session_actions';
import Branch from './branch';

const mapStateToProps = (state) => ({
    // currentUser: session.currentUser
    state
});

const mapDispatchToProps = dispatch => ({
    // logout: () => dispatch(logout())
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Branch);