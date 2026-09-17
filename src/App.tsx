import { Navbar } from './components/Navbar';
import { LeftColumn } from './components/LeftColumn';
import { MiddleColumn } from './components/MiddleColumn';
import { RightColumn } from './components/RightColumn';
import { Footer } from './components/Footer';

function App() {
  // Aplicamos la clase de fondo al div principal para simular el body
  return (
    <div className="w3-theme-l5" style={{ minHeight: '100vh' }}>
      <Navbar />

      {/* Page Container */}
      <div className="w3-container w3-content" style={{ maxWidth: '1400px', marginTop: '80px' }}>
        <div className="w3-row">
          <LeftColumn />
          <MiddleColumn />
          <RightColumn />
        </div>
      </div>
      <br />

      <Footer />
    </div>
  );
}

export default App;