const todos = [
    {text: 'play mariokart', author: 'shaun'},
    {text: 'buy some milk', author: 'mario'},
    {text: 'buy some bread', author: 'luigi'}
  ];

  //console.log(JSON.stringify(todos));
  //turm into json string
  localStorage.setItem('todos', JSON.stringify(todos));

  const stored = localStorage.getItem('todos');
  //parse to array
  console.log(JSON.parse(stored));