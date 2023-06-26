export default function taskBlock(trueOrFalse) {
    /*block scope*/

    var task = false;
    var task2 = true;

    if (trueOrFalse) {
        let task = true;
        let task1 = false;
    }
    
    return [task, task1];

}
