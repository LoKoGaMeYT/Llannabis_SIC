new Morris.Donut({
  element: 'torta',
  data: [
    {value: 70, label: 'Preguntas'},
    {value: 15, label: 'Quejas'},
    {value: 10, label: 'Reclamos'},
    {value: 5, label: 'Sugerencias'}
  ],
  formatter: function (x) { return x + "%"}
}).on('click', function(i, row){
  console.log(i, row);
});