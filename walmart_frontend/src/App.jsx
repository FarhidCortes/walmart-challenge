
import Header from './components/Header'
import Container from './components/Container'
import { ProductsProvider } from './context/ProductsProvider'
function App() {

    return (
        <ProductsProvider>
            <Header />
            <Container />
        </ProductsProvider>
    )
}

export default App
