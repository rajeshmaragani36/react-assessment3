function Student(props) {
  return (
    <div className="card">
      <h2>Name: {props.name}</h2>
      <p>Course: {props.course}</p>
    </div>
  );
}

function PropsDemo() {
  return (
    <div>
      <h1>Props Demo</h1>

      <Student name="Rajesh" course="CSE" />
      <Student name="Gopi" course="CSE" />
      <Student name="Rohit" course="CSE" />
    </div>
  );
}

export default PropsDemo;
