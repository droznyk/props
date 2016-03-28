import React, { PropTypes } from 'react';
import UserPropsStats from './user-props-stats';
import PropComponent from '../props/prop';
import isEmpty from 'lodash/isempty';

export default class UserProps extends React.Component {
  static get propTypes() {
    return {
      userName: PropTypes.string,
      givenProps: PropTypes.object,
      receivedProps: PropTypes.object,
    };
  }

  renderProps(props) {
    return props.map(prop =>
      <PropComponent key={prop.id} prop={prop} />
    );
  }

  render() {
    const { userName, givenProps, receivedProps } = this.props;

    if (!userName || isEmpty(givenProps) || isEmpty(receivedProps)) {
      return (
        <div className="loading" />
      );
    }

    return (
      <div>
        <UserPropsStats
          userName={userName}
          propsReceivedCount={receivedProps.props.length}
          propsGivenCount={givenProps.props.length}
        />

        <h2>Received props</h2>
        <ul className="list-unstyled">
          <div className="col-xs-12">
            {this.renderProps(receivedProps.props)}
          </div>
        </ul>


        <h2>Given props</h2>
        <ul className="list-unstyled">
          <div className="col-xs-12">
            {this.renderProps(givenProps.props)}
          </div>
        </ul>

      </div>
    );
  }
}
