import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="container mx-auto p-4 flex-grow">
        <h1 className="text-4xl font-bold mt-8">
          Hello world!
        </h1>
      </div>
      <Footer />
    </div>
  )
}

export default App