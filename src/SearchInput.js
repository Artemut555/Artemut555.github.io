import React, { PureComponent } from "react";
import PropTypes from "prop-types";

import styles from "./SearchInput.module.css";

export default class SearchInput extends PureComponent {
  static propTypes = {
    textChange: PropTypes.func
  };

  handleChange = event => {
    this.props.textChange(event);
  };

  render() {
    return (
      <div className={styles.componentSearchInput}>
          <input onChange={this.handleChange} placeholder={"Поиск"} />
      </div>
    );
  }
}
