/*
Write a program that creates a string that represents an 8×8 grid, 
using new-line characters to separate lines. At each position of the grid there is 
either a space or a # character. 
The characters should form a chessboard.

Passing this string to console.log should show something like this:

დაწერეთ პროგრამა, რომელიც ქმნის string-ს რაც წარმოადგენს 8x8 ბადეს,
newline (\n) character -ის გამოყენებით განაცალკევეთ ხაზები. თითოეული ბადის პოზიციაზე ან არის space (" ") 
ან "#".
ამ სტრინგმა უნდა შეადგინოს ჭადრაკის დაფა.

console.log -ს რომ გადაცემთ ამ ფუნქციას შედეგი ასეთი უნდა მიიღოთ:

 # # # #
# # # # 
 # # # #
# # # # 
 # # # #
# # # # 
 # # # #
# # # # 
*/




function chessboard1(space = " ", hash = "#") {
    let c = space+hash
    let d = hash+space
    for (let i = 0; i < 2; i++) {
        c += c;
    }
    for (let i = 0; i < 2; i++) {
        d += d;
    }
    for (let i = 0; i < 4; i++) {
        console.log(c);
        console.log(d);
    }
    
}

console.log(chessboard1(" ", "#"));

let size = 8;
let chessboard = "";

for (let i = 0; i < size; i++) {
    for (let j = 0; j < size; j++) {
       
        chessboard += (i + j) % 2 === 0 ? " " : "#";
    }
    
    chessboard += "\n";
}

console.log(chessboard);