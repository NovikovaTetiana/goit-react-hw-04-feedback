import PropTypes from 'prop-types';
import {List, FeedbackItem, Btn } from './FeedbackOptions.styled'

export const FeedbackOptions = ({ options, onLeaveFeedback }) => (
  <List onClick={onLeaveFeedback}>
    {options.map(option => (
      <FeedbackItem key={option}>
        <Btn name={option} type="button">
          {option}
        </Btn>
      </FeedbackItem>
    ))}
  </List>
);

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

