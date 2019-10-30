import App from '../components/App'
import Header from '../components/Header'

export default () => (
  <App>
    <Header />
    <article>
      <h1>The Idea Behind This Example</h1>
      <p>
        GpraphQL client integrated with Reactjs and staticly hosted off Zeit.co, SERVERLESS bro.
        Never less.
        This gives the application significant flexiblity, data hosted and cant be fetched with apollo for near real time applications
        without the overhead of of server.

        On initial page load, while on the server and inside getInitialProps,
        we invoke the Apollo method, getDataFromTree.
        This method returns a promise; at the point in which the promise resolves,
        our Apollo Client store is completely initialized.
      </p>
    </article>
  </App>
)
