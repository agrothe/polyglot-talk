var network = new synaptic.Architect.Perceptron(2, 3, 1);
var trainer = new synaptic.Trainer(network);

var trainingSet = [
    {
      input: [0,0],
      output: [0]
    },
    {
      input: [0,1],
      output: [1]
    },
    {
      input: [1,0],
      output: [1]
    },
    {
      input: [1,1],
      output: [0]
    },
  ];

trainer.train(trainingSet);

var standalone = network.standalone();

$("#result").val(standalone.toString());
