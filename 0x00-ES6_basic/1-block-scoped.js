export default function taskBlock(trueOrFalse) {
  //block scope

  var task = false;
  var task2 = true;

  if (trueOrFalse) {
    let task = true;
    let task2 = false;
  };

  return [task, task2];
}
