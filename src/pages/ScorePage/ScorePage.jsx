
export default function ScorePage({user, setUser}) {
  const scores = [
    { name: 'Billy', score: 250 },
    { name: 'Emily', score: 180 },
    { name: 'David', score: 210 },
    { name: 'Sarah', score: 300 },
    { name: 'Michael', score: 150 },
  ];

  return (
    <div>
      <h1>ScoreBoard</h1>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Score</th>
          </tr>
        </thead>
        <tbody>
          {scores.map((score, index) => (
            <tr key={score.id}>
              <td>{score.name}</td>
              <td>{score.score}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}