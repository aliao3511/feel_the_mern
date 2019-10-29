import React from 'react';

class TweetsIndex extends React.Component {

    renderTweets() {
        // if (this.props.tweets.length > 0) {
            return (<div>no tweets</div>);
        // } else {
        //     return (
        //         <ul>
        //             {Object.values(this.props.tweets).map(tweet => <li key={tweet.id}>{tweet}</li>)}
        //         </ul>
        //     );
        // }
    }
    
    render() {
       return (
           <div>
               {this.renderTweets()}
           </div>
       )
    }
}

export default TweetsIndex;