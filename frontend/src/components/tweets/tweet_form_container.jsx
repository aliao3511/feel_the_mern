import { connect } from 'react-redux';
import React from 'react';
import { withRouter } from 'react-router-dom';

import { createTweet } from '../../actions/tweet_actions';

const mapStateToProps = state => {
    return {
        currentUser: state.session.user,
    };
};

class TweetForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            body: '',
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.createTweet(this.state).then(this.props.history.push('/profile'));
    }

    update() {
        return e => this.setState({
            body: e.currentTarget.value
        });
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <input type="textarea" 
                            value={this.state.body}
                            onChange={this.update()}
                            placeholder='tweet ur tweet'
                        />
                        <input type="submit" value="tweet!"/>
                    </div>
                </form>
            </div>
        )
    }

}

export default connect(mapStateToProps, { createTweet })(withRouter(TweetForm));