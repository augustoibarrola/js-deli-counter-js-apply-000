/*Build a function that a new customer will use when entering the deli. The function, takeANumber,
 should accept two parameters: the current line of people, along with the new person's name. The
 function should return a welcome message including the new person's position in line, such as
 "Welcome, Ada. You are number 1 in line.". And don't go being too programmer-y and give them their
 index. These are normal people. If they are 7th in line, tell them that. Don't get their hopes up
 by telling them they are number 6 in line.

takeANumber
✓ adds a person to the line
✓ appends the person the end of the line if there are already people on it
✓ properly handles multiple people being added*/


function takeANumber(katzDeliLine, guestName){        // parametrs of the function takeANumber are katzDeliLine (the current line of peopel) and guestName (new person's name).
    katzDeliLine.push(guestName);                 // .push function sends the argument given to guestName to the BACK of the array in katzDeliLine (which is no longer empty, like in the beginning
    return  `Welcome, ${guestName}. You are number ${katzDeliLine.length} in line.`;
}         /* once that argument for the paramater guestName is given to the function, the function first sends it to the back of the array in katzDeliLine (originall empty)
             and then returns the string `Welcome, ${guestName} – (which will return whatever value was given to guestName) –. You are number ${katzDeliLine.length} – .length function of the
             array katzDeliLine lets me 'know' which index the guestName is in the array denoted by katzDeliLine.*/

// =======================================================================================================================================

        /*2. Build a function `nowServing`. This function should accept the current line of people (`katzDeliLine`) and return
          the first person in line and then remove that individual from the line. If there is nobody in line, it should return
          "There is nobody waiting to be served!"

          nowServing
          ✓ returns "There is nobody waiting to be served!" when no one is on line
          ✓ returns an announcement about the person it is serving, and shifts the line*/

function nowServing(katzDeliLine) {  //the function nowServing takes the parameter katzDeliLine (that is, this function takes the current number of people on line, whatever that might be)
  if (katzDeliLine.length > 0) {      // IF the amount of elements in the array denoted by katzDeliLine is greater than 0 (i.e. if there is at least one person on line / being served)...
    return `Currently serving ${katzDeliLine.shift()}.`; /* ...then return the string [`Currently serving ${katzDeliLine.shift()}.`;]. ${katzDeliLine.shift()} returns the first
                                                                  element (at index 0) inside the array denoted by katzDeliLine, while ALSO removing it from said array and shifting all the
                                                                  elements down an index (an element that was at index 1 would now be at index 0, index 2 now at index 1, etc.). Thus,
                                                                  katzDeliLine.shift() is saying that it will return the first element in the array denoted by katzDeliLine while at the same
                                                                  time removing it from said array (i,e., "shifting" the line).*/
  } else {                                  // IF the amount of elements in the array denoted by katzDeliLine is NOT greater than 0 (i.e. if there is NO ONE on line / being served)...
      return `There is nobody waiting to be served!`; // ... then return the string `There is nobody waiting to be served!`;`
  }
}

// =======================================================================================================================================

                /*3. Build a function `currentLine` that accepts the current line of people and returns the
                  current line as a string; for example, if 'katzDeliLine' is currently `["Ada", "Grace"]`,
                  `currentLine(katzDeliLine)` would return `"The line is currently: 1. Ada, 2. Grace"`.  You don't
                  have to use `katzDeliLine` as a variable or parameter name in your function though, it's just an
                  example of a variable that might be passed to it. If there is nobody in line, it should return
                  `"The line is currently empty."`

                  currentLine
    ✓ returns "The line is currently empty." if no one is in line
    ✓ says who is in line when there are people waiting
    ✓ returns a different response programmatically given a different array of names*/

function currentLine(katzDeliLine) {
  if (katzDeliLine.length > 0) {  // IF there are more than 0 elements in the array denoted by katzDeliLine ...
    var whosOnLine = [];    // THEN run the [for] loop:
    for (var i=0; i < katzDeliLine.length; i++) {       /*for (var i=0 [the counter of the loop is set to 0]; i < katzDeliLine.length [i needs to be less than the number of elements
                                                          inside katzDeliLine. Everytime it IS (boolean value of TRUE) the loop will...loop. When i is greater than the number of elements in
                                                          katzDeliLine, the loop will stop.]; i++ [add 1 to i after every iteratoion]).*/
      whosOnLine = whosOnLine + (i +1) + `. ` + katzDeliLine[i] + `, `;     /*everytime that i is less than the number of elements inside katzDeliLine (so, everytime that the
                                                                              loop iterates), the variable whosOnLine (local to this function) is updated: it is now going to give its
                                                                              PREVIOUS value (which was empty at the beginning of the loop) PLUS 1 (since i was 0 until this point), along with
                                                                              the indexed element that matches the index number in that iteration (therefore, if i=0 in the first iteration,
                                                                              katzDeliLine[i] would show the element at index 0. If i is equal to 4 or 5, then katzDeliLine[i] would return whatever
                                                                              element is at the 4th or 5th index in the array denoted by katzDeliLine).   */
      }
      whosOnLine = whosOnLine.slice(0, -2);           /* when the for loop is done and we have the final iteration of whatever array the variable whosOnLine now is,
                                                      we assign a new value to whosOnLine: it will now show whatever elements there are between and including index 0
                                                      and 2.*/
      return `The line is currently: ${whosOnLine}`;  /* all of this to say that IF there are more than 0 elements in the array denoted by katzDeliLine, THEN (after the loops behind the scene) return
                                                      the string `The line is currently: ${whosOnLine},` where the function whosOnLine will be played out thanks to ${}, and it will play out
                                                      the final value it got on line 70.*/
  } else {                         // IF there were NO elements in the array denoted by katzDeliLine all the way at the beginning...
    return `The line is currently empty.`; // THEN return the string `The line is currently empty.`
  }
}
