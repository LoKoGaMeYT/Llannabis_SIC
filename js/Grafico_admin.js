var neg_data = [
  {"period": "2011-08-12", "a": 100},
  {"period": "2011-03-03", "a": 75},
  {"period": "2010-08-08", "a": 50},
  {"period": "2010-05-10", "a": 25},
  {"period": "2010-03-14", "a": 0},
  {"period": "2010-01-10", "a": -25},
  {"period": "2009-12-10", "a": -50},
  {"period": "2009-10-07", "a": -75},
  {"period": "2009-09-25", "a": -100}
];
new Morris.Line({
  element: 'graphs',
  data: neg_data,
  xkey: 'period',
  ykeys: ['a'],
  labels: ['Series A'],
  units: '%'
});