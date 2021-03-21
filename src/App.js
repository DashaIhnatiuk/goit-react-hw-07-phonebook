import { Component } from 'react';
import AddSection from "./components/AddSection";
import OutputSection from "./components/OutputSection";
import Notification from "./components/Notification";
import Filter from "./components/Filter";
import MyLoader from "./components/Loader";
import { CSSTransition } from "react-transition-group";
import titleTransition from "./components/Animations/title.module.css";
import popTransition from "./components/Animations/pop.module.css";
import PropTypes from "prop-types";

import { connect } from "react-redux";
import operations from './redux/phoneBook/operations';
import selectors from './redux/phoneBook/selectors';
import actions from './redux/phoneBook/actions';

class App extends Component {
  static propTypes = {
    contacts: PropTypes.arrayOf(PropTypes.object),
    fetchContacts: PropTypes.func,
    isLoading: PropTypes.bool,
  };

  componentDidMount() {
    this.props.fetchContacts();
  }

  render() {
    const { contacts, error, clearFilter, isLoading } = this.props;

    return (
      <div className="container">
        {error && <Notification message={error.message} />}

      <CSSTransition in timeout={500} classNames={titleTransition} appear>
        <h1 className="title">Phonebook</h1>
      </CSSTransition>

      <AddSection />

      <CSSTransition
        in={contacts.length > 1}
        timeout={250}
        classNames={popTransition}
        unmountOnExit
        onExiting={() => clearFilter()}
      >
        <Filter />
      </CSSTransition>

      <CSSTransition
        in={contacts.length > 0}
        appear={true}
        timeout={250}
        classNames={popTransition}
        unmountOnExit
      >
        <div>
          <h2 className="title">Contacts</h2>
          {isLoading && <MyLoader />}
          <OutputSection />
        </div>
      </CSSTransition>
    </div>
    );
  }
}
const mapStateToProps = state => ({
  contacts: selectors.getAllContacts(state),
  isLoading: selectors.getLoading(state),
  error: selectors.getError(state),
});
const mapDispatchToProps = dispatch => ({
  fetchContacts: () => dispatch(operations.fetchContacts()),
  clearFilter: () => dispatch(actions.setFilter('')),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);