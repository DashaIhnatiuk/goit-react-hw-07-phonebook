import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import actions from '../../redux/phoneBook/actions';
import selectors from '../../redux/phoneBook/selectors';

function Filter({ value, onChangeFilter }) {
  return (
    <div>
            <p>Find contacts by name</p>
            <input type="text" placeholder="Enter contact name" name="filter"
            value={value} onChange={onChangeFilter}/>
</div>
  );
}
const mapStateToProps = state => ({
  value: selectors.getFilter(state),
});

const mapDispatchToProps = dispatch => ({
  onChangeFilter: event =>
    dispatch(actions.setFilter(event.currentTarget.value)),
});

Filter.propTypes = {
  value: PropTypes.string,
  onChangeFilter: PropTypes.func,
};

export default connect(mapStateToProps, mapDispatchToProps)(Filter);