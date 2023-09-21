import Card from './components/Card'
import Search from './components/Search'
import HederL from './components/HederL'
import HederR from './components/HederR'
import CartOverley from './components/Cart'

function App() {
  return (
    <div className="wrapper">
      <CartOverley />
      <header>
        <HederL />
        <HederR />
      </header>
      <div className="content">
        <Search />
        <Card />
      </div>
    </div>
  )
}

export default App
