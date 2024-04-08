// STEPS WE TAKE IN THE FOR LOOPBELOW.
// Initialized the variable i to 1
// Check the condition is i less than or equal to 2 (true)
// Jump to line 2 initialize the variable str to an empty string("")
// Line 3 Initialize variable j to 1
// Check if j (1) is less than or equal to i (1) (true)
// Adding empty string (str) to j (1) , concatenate 1 as a string to the variable str (" " + 1) = ("1")
// Go back to the for loop. increment j by 1 (j++) would equal (2)
// Check if j (2) is less than or equal to i (1) (true)
// Console.log (str) which is ("1")
// Increment i by 1 (2)
// Check if i (2) is less than or equal to 2 (true)
// Initialize the variable str to an empty string ("")
// Initialize  the varable j to 1
// Check and compare. is j (1) is less than or equal to i (2) (true)
// Concatnate j (1) as a string to the variable str ("1") same as line 7.
// Increment j by 1 (2)
// Check if j (2) is less than or equal to i (2) (true)
// Concatenate j (2) as a string to the variable str("12")
// Increment j by 1 (3)
// Check if j (3) is less than or equal to i (2) (false)
// Console the variable str ("12")
// Increment i by 1 (3)
// Check if i (3) is less than or equal to 2 (false)
// Console.log ('done') 

//  j++ and i++ is the afterthought.


for (let i = 1; i <= 2; i++) {
    let str = ''
    for (let j = 1; i <= 2; j++) {
        str += j
    }
    console.log(str)
}
console.log('done')