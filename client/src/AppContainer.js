import App from "./App";
import "./App.css";
import { connect } from "react-redux";
import {loadQuestions} from "./actions";

function mapDispatchToProps(dispatch) {
  return {
    loadQuestions: function () {
      dispatch(loadQuestions());
    },
  };
}

export default connect(null,mapDispatchToProps)(App);
