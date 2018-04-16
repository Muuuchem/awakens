import { connect } from 'react-redux';
import ReceiveRecipes, { receiveRecipes } from '../../actions/recipe_actions';
import { withRouter } from 'react-router-dom';
import RecipeMatches from './recipe_matches';
// import RecipeIndex from './recipe_index';



const mapStateToProps = (state) => {
    return {
        recipes: state.recipes,
       
    };
};

const mapDispatchToProps = (dispatch) => {
    

    return {
        getRecipes: (nutrients) => dispatch(receiveRecipes(nutrients))
    };
};


export default withRouter(connect(
    mapStateToProps,
    mapDispatchToProps
)(RecipeMatches));
