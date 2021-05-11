import React from 'react';
import './bootstrap.min.css'
import './App.css';

class App extends React.Component {

  state = {
    data: ""
  };

  componentDidMount() {
    this.handleNewQuote();
  }

  handleNewQuote = () => {
    fetch("https://api.quotable.io/random")
      .then((res) => res.json())
      .then((result) => {
        this.setState({
          data: result
        });
      });
  };

  render() {
    const { data } = this.state;
    return (
      <div className="col-sm-12 mt-3" id="quote-box">
        <div className="card">
          <div className="card-header">Quote</div>
          <div className="card-body">
            <blockquote className="blockquote mb-0">
              <p id="text">{data.content}</p>
              <footer id="author" className="blockquote-footer">
                {data.author}
              </footer>
            </blockquote>
          </div>
        </div>
        <button
          id="new-quote"
          className="btn btn-primary mt-3"
          onClick={this.handleNewQuote}
        >
          New Quote
        </button>
        <a
          href="https://twitter.com/intent/tweet"
          id="tweet-quote"
          className="btn btn-info mt-3 float-right"
        >
          Tweet Quote
        </a>
      </div>
    )
  }
}

export default App;