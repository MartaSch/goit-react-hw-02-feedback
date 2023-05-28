import { Component } from "react";
import Feedback from "./FeedbackOptions/FeedbackOptions";
import Statistics from "./Statistics/Statistics";
import Section from "./Sections/Sections";
import Notification from "./Notification/Notification";


  class App extends Component {
    state = {
        good: 0,
        neutral: 0,
        bad: 0
      };

      onHandleClick = e => {
        this.setState((prevState) => ({
          [e]: prevState[e] + 1,
        }))
      }
      countTotalFeedback = () => {
        const {good, neutral, bad} = this.state;
        return parseFloat(good + neutral + bad);
    }
    countPositiveFeedbackPercentage = () => {
      const total = this.countTotalFeedback();
      if(!total) {
        return 0;
      }
      const result = parseFloat((this.state.good / total) * 100);
      return result.toFixed(0);
    }

    render() {
      const {good, neutral, bad} = this.state;
      const total = this.countTotalFeedback();
      const positivePercentage = this.countPositiveFeedbackPercentage()
      return (
      <div>
        <Section
        title = "Please leave feedback">
        <Feedback
        options={['good', 'neutral', 'bad']}
        onLeaveFeedback={this.onHandleClick}
        />
        </Section>
        <Section
        title = "Statistics:">
        {!total ? (
         <Notification
          message = 'There is no feedback'/>
        ) : (
        <Statistics
        good={good}
        neutral={neutral}
        bad={bad}
        total={total}
        positivePercentage = {positivePercentage}
        />
        )}
        </Section>
        </div>
      )

    }
  };
export default App;
