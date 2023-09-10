import './App.css'
import Header from "./Header.jsx"
import data from "./data.js"
import Card from "./Card.jsx"


function App() {
  const cards = data.map(item => {
    return (
      <Card key={item.id}
      {...item}/>
    )
  })

  return (
    <>
      <Header />
      <main>
        <section className='container'>
          {cards}
        </section>
      </main>
    </>
  )
}

export default App
