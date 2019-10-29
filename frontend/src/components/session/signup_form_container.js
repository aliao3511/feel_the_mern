import { connect } from 'react-redux';
import { signup, clearSessionErrors } from '../../actions/session_actions';
import SignupForm from './signup_form';
// import { bindActionCreators } from 'redux';

const mapStateToProps = state => ({
    signedIn: state.session.isSignedIn,
    errors: state.errors.session,
});

export default connect(mapStateToProps, { signup, clearSessionErrors })(SignupForm);