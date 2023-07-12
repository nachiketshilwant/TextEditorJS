let sm = document.querySelectorAll(".sm");
//Here execCommand is deprevated so 
// we can do using selection API or clipboardAPI of JS all task not perfectly but can be done in some aspect
sm.forEach(e => {
    let val;
    let ele = e.getAttribute("id");
    e.addEventListener('click', () => {
        if (e.getAttribute("class") == "active") {
            document.execCommand(`${ele}`, false)
            if (ele.includes("List")) {
                document.execCommand(`outdent`, true)
            }

            e.setAttribute("class", "nactive")
        } else {
            if (ele.includes("insert")) {
                document.execCommand(`indent`, true)
            }
            if(ele.includes("foreC")){
                val=document.querySelector("#color").value;
            }
            if(ele.includes("backC")){
                val=document.querySelector("#back").value;
            }
            if(ele.includes("createlink")){
                val=prompt("Enter Link to add");
            }
            if(ele.includes("format")){
                val=document.querySelector('#head').value;
            }
            if(ele.includes("font")){
                val=`${document.querySelector('#size').value*1}rem`;
            }
            document.execCommand(`${ele}`, true,val)
            e.setAttribute("class", "active");
        }
    })
})


//Tried using selection API
// b.addEventListener("click", () => {
    // var range = window.getSelection().getRangeAt(0);
    // var selectionContents = range.extractContents();
    // var div = document.createElement("div");
    // div.style.textAlign = "center";
    // div.appendChild(selectionContents);
    // range.insertNode(div);
// })