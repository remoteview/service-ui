import React from 'react';
import { connect } from 'react-redux';
import Head from '../src/components/Head';
import withEmotion from '../src/hoc/withEmotion.component';

interface Props {};

class Index extends React.Component<Props> {
  static getInitialProps() {
    return {};
  }

  render() {
    return <Head/>;
  }
}

export default connect()(withEmotion(Index));
