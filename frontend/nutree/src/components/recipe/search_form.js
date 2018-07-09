import React from 'react';
import { Link } from 'react-router-dom';
import Checkbox from './check_box';
import { selectAllRecipes } from '../../reducers/selectors';

// import fetchRecipes from '../../api_util/recipe_api_util';

class SearchForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            searchParams: "",
            selectedCheckboxes: [],
            recipes: this.props.recipes,
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.render = this.render.bind(this);
        this.toggleCheckbox = this.toggleCheckbox.bind(this);
        this.createCheckbox = this.createCheckbox.bind(this);
        this.parseResults = this.parseResults.bind(this);
        this.hits = this.hits.bind(this);
    }

    componentDidMount() {
        // this.setState(this.props.requestAllQuestions());
        // console.log(this.state, "Did Mount");
    }
    

    componentWillReceiveProps(newProps, props) {
        console.log(newProps, "Will Receive Props");
        console.log(this.props);
        
    }

    // shouldComponentUpdate(nextProps, nextState, context) {
    //     console.log(nextProps);
    //     return true;
    // }
    

    handleSubmit(e) {
        // e.preventDefault;
        // this.state = {
        //     searchParams: "",
            
        // };
        this.props.getRecipes(this.state.selectedCheckboxes);
    }


    toggleCheckbox (label) {
        if (this.state.selectedCheckboxes.includes(label)) {
            let index = this.state.selectedCheckboxes.indexOf(label);
            this.state.selectedCheckboxes.splice(index, 1);
        } else {
            this.state.selectedCheckboxes.push(label);
        }
    }

    createCheckbox(label) {
        return <Checkbox
            label={label}
            handleCheckboxChange={this.toggleCheckbox}
            key={label}
        />;
    }


    update(property) {
        return e => this.setState({ [property]: e.target.value });
    }

    hits() {
        let results = [];

        const { recipes } = this.props;
        // console.log(questions);
        if (this.state.recipes) {
            recipes.forEach(recipe => {
                console.log(recipes);
                results.push(recipe);
            });
        }

        if (results[0]) {
            console.log(results[0]);
            console.log(results[0][0].recipe);
            // let mappedResults = results.slice(0, 10).map((recipe, idx) => {
            //     // return (<li onClick={() => {
            //     //     this.setState({ searchParams: "" });
            //     // }} className="search-results" key={idx}>
            //     //     <Link to={`/api/questions/${question.id}`}
            //     //         onClick={this.handleSubmit}> {question.title}
            //     //     </Link>
            //     // </li>);
            // });
            // return mappedResults;
            // let mapped = results[0].map((res, idx) => {
            //     <div>
            //         res
            //     </div>;

            //     console.log(mapped);
            // });
            return (
                // results[0][0].forEach((rec) => {
                    <div>
                    <h1>{results[0][0].recipe.label}</h1>
                        <img src={results[0][0].recipe.image} />
                    <h1>{results[0][1].recipe.label}</h1>
                    <img src={results[0][1].recipe.image} />
                    <h1>{results[0][2].recipe.label}</h1>
                    <img src={results[0][2].recipe.image} />
                    </div>
                // })
                
            );
        } else {
            return false;
        }
        // return [];
    }

    parseResults() {
        if (this.hits().length === 0) {
            return (
                <div></div>
            );
        } else {
            return (
                <div className="results">
                    <ul>{this.hits()}</ul>
                </div>
            );
        }
    }
    // myFunction(e) {
    //     e.preventDefault;
    //     alert('please select a link');
    // }


    render() {
        return (
            <div className="search-container">
                <div className="outer">
                    <div className="search-bar">
                        <form>
                            <input type="text" placeholder="Search All Questions" className="search-form"
                                onChange={this.update('searchParams')} value={this.searchParams}></input>
                            {this.createCheckbox("Magnesium")}
                            {this.createCheckbox("Vitamin A")}
                            {this.createCheckbox("Iron")}
                            {this.createCheckbox("Vitamin E")}
                            {this.createCheckbox("Vitamin D")}
                            {this.createCheckbox("Vitamin B12")}
                            {this.createCheckbox("Vitamin C")}
                            
                            <button onClick={this.handleSubmit}>Submit </button>
                        </form>
                    </div>
                    {this.parseResults()}
                </div>
                <div>
                </div>
                </div>
        );
    }
}
export default SearchForm;
