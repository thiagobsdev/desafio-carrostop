import Card from "../Card/Index";
import "./styles.css";

export default function Main() {
  return (
    <main>
      <div className="dcar-container ">
        <div className="dscar-card-column">
          <h2>Venha nos visitar</h2>
          <Card />
          <Card />
        </div>
      </div>
    </main>
  );
}
