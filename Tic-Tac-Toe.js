let boxes = document.querySelectorAll(".box");
let newGameBtn = document.querySelector("#newGameBtn");

let turnX = true;

const winPatterns =
[
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8]
];

boxes.forEach
(
    (box) => 
        { box.addEventListener
            ("click", () => 
                { 
                    console.log("Button Was Clicked"); 
                    if (turnX === true)
                        {
                            box.innerText = "X";
                            turnX = false;
                        }
                    else
                        {
                            box.innerText = "O";
                            turnX  = true;
                        }
                    box.disabled = true;

                    checkWinner();
                }
            );
        }
);

const checkWinner = () =>
{
    for (let patterns of winPatterns)
    {
        // console.log(patterns[0], patterns[1], patterns[2]);
        // console.log(boxes[patterns[0]].innerText, boxes[patterns[1]].innerText, boxes[patterns[2]].innerText);
        let pos1Val = boxes[patterns[0]].innerText;
        let pos2Val = boxes[patterns[1]].innerText;
        let pos3Val = boxes[patterns[2]].innerText;

        if (pos1Val === pos2Val && pos2Val === pos3Val && pos1Val !== "")
        {
            boxes[patterns[0]].style.backgroundColor = "green";
            boxes[patterns[1]].style.backgroundColor = "green";
            boxes[patterns[2]].style.backgroundColor = "green";
            boxes[patterns[0]].style.boxShadow = "0 0 30px green";
            boxes[patterns[1]].style.boxShadow = "0 0 30px green";
            boxes[patterns[2]].style.boxShadow = "0 0 30px green";
            boxes.forEach((box) => { box.disabled = true; });
            console.log(`Player ${pos1Val} wins!`);
            // alert(`Player ${pos1Val} wins!`);
        }
    }

}

newGameBtn.addEventListener("click", () =>
{
    boxes.forEach((box) =>
    {
        box.innerText = "";
        box.disabled = false;
        box.style.backgroundColor = "";
        box.style.boxShadow = "";
    });
    turnX = true;
});
