import './App.css';
import TodoList from './Components/todos/TodoList'
import Footer from './Components/footer/Footer'


function App() {
  return (
    <div className="App">
      <nav>
        <section>
          <h1>Todos</h1>
          <sub>Power by Redux</sub>
        </section>
      </nav>
      <main>
        <section className="medium-container">
          <br />
          <div className="todoapp">
            <TodoList />
            <Footer />
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
