import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import { createMuiTheme } from '@material-ui/core/styles';
import ItemCard from './Components/ItemCard';
import blue from '@material-ui/core/colors/blue';

const theme = createMuiTheme({
    palette: {
      primary: blue,
    },
});

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      entries: []
    };
  }

  componentDidMount() {
    fetch('/data')
      .then(response => response.json())
      .then(entries => {
        this.setState({
          entries
        });
      });
  }

  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <div style={{ display: 'flex' }}>
          {this.state.entries.map(
            ({ id, author, avatarUrl, title, description }) => (
              <ItemCard
                key={id}
                author={author}
                title={title}
                avatarUrl={avatarUrl}
                style={{ flex: 1, margin: 10 }}
              >
                {description}
              </ItemCard>
            )
          )}
        </div>
      </MuiThemeProvider>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));