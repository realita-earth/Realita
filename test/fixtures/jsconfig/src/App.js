import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* Upload your logo to /public/logo.png */}
        <img src="/logo.png" className="App-logo" alt="REALITA" />

        <h1>REALITA</h1>
        <p>THE PURCHASE OF A NEW REALITY</p>

        {/* Core Ration System */}
        <div className="Manifesto">
          <h2>THE ECONOMY OF UNITY</h2>
          
          <div className="Ration">
            <h3>When you buy 100 REALITA:</h3>
            <ul>
              <li>50 → Your Wallet</li>
              <li>10 → Gold Reserve</li>
              <li>10 → Land Acquisition</li>
              <li>10 → Water Projects</li>
              <li>10 → Energy Infrastructure</li>
              <li>10 → Education Fund</li>
            </ul>
          </div>

          <div className="Donation">
            <h3>When you donate 100 REALITA:</h3>
            <ul>
              <li>20 → Burned (Value Reinforcement)</li>
              <li>30 → Global Charity</li>
              <li>20 → Land Stewardship</li>
              <li>20 → Clean Water Access</li>
              <li>10 → Energy Redistribution</li>
            </ul>
          </div>
        </div>

        {/* Philosophy */}
        <div className="Philosophy">
          <h3>OUR PURPOSE:</h3>
          <p>
            To unify purchasing power into <strong>tangible change</strong>.<br />
            Every transaction builds <strong>real infrastructure</strong> —<br />
            not abstract wealth, but <strong>breathable air, drinkable water,<br />
            and land owned by the people</strong>.
          </p>
        </div>

        {/* Call-to-Action */}
        <a
          className="App-link"
          href="#"
          target="_blank"
          rel="noopener noreferrer"
        >
          JOIN THE RECLAMATION
        </a>
      </header>
    </div>
  );
}

export default App;
