import { connect } from 'react-redux';
import SearchForm from './search_form';
import ReceiveRecipes, { receiveRecipes } from '../../actions/recipe_actions';
import {selectAllRecipes} from '../../reducers/selectors';


// import { selectAllQuestions } from '../../reducers/selectors';
// import { fetchAllQuestions } from '../../util/question_api_util';
// import { requestAllQuestions } from '../../actions/question_actions';

const mapStateToProps = state => {
    return {
        recipes: selectAllRecipes(state),
    };
};

const mapDispatchToProps = dispatch => {
    return {
        getRecipes: (nutrients) => dispatch(receiveRecipes(nutrients))
    };
};

const SearchContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(SearchForm);

export default SearchContainer;
