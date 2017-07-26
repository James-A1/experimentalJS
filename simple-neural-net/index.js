const perceptron = w => i => w*i

const feedForward = (inputs, weights) => {
  if(inputs.length !== weights.length)
    console.error("Inputs and weights must have same array length.")

  return inputs.reduce((acc,input,index) => {
    return acc += perceptron(weights[index])(input)
  },0) 
}


const point = (x,y) => ({ x,y })


const test = () => {
  //Generate Inputs
  var inputs = [
    point(5, -3),
    point(13, 2)
  ];

  //Transform (flatten) Inputs
  //Note : Adds bias (1) 
  const flattenInputs = points => {
    return points.reduce((acc,point)=> acc.concat([point.x, point.y, 1]),[])
  }
  var flattenedInputs = flattenInputs(inputs)   

  //Generate Weights
  const generateWeights = n => {
    return Array.from({length : n}).map(r => (Math.random() * 10) * ((Math.random() * 1) > 0.5 ? 1 : -1))
  }
  var weights = generateWeights(flattenedInputs.length)

  //Logging
  console.log(weights)
  console.log(feedForward(flattenedInputs, weights))

}
