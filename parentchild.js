//--------when passing data form parent to child component we use props in react js------------------------

function Child({ name }) {
  return <h2>Hello {name}</h2>;
}

function Parent() {
  return <Child name="Vinodhini" />;
}