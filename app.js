let imgArray = ["./Assets/image-curiosity.jpg", "./Assets/image-deep-earth.jpg", "./Assets/image-fisheye.jpg", "./Assets/image-from-above.jpg", "./Assets/image-grid.jpg", "./Assets/image-night-arcade.jpg", "./Assets/image-pocket-borealis.jpg", "./Assets/image-soccer-team.jpg"];
let pArray = ["THE CURIOSITY", "DEEP EARTH", "MAKE IT FISHEYE", "FROM UP ABOVE VR", "THE GRID", "NIGHT ARCADE", "POCKET BOREALIS", "SOCCER TEAM VR"];

function addImages() {
    let div = document.querySelector(".thirdBox-images");
    for(let i = 0; i < 8; i++) {
        
        let imgDiv = document.createElement("div");
        let a = document.createElement("a");
        imgDiv.classList.add("imgDiv");
        a.href = "#";
        let img = document.createElement("img");
        img.src = imgArray[i];
        a.appendChild(img);
        imgDiv.appendChild(a);
        let p = document.createElement("p");
        p.innerText = pArray[i];
        imgDiv.appendChild(p);

        img.addEventListener("mouseover", function() {
            p.classList.add("enterP");
        });

        img.addEventListener("mouseout", function() {
            p.classList.remove("enterP");
        });
        div.appendChild(imgDiv);
    }
}

addImages();


