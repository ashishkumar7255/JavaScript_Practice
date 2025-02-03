var t1 = document.querySelectorAll(".tab1");
var aln = document.querySelector("#alen");
var coddetails = document.querySelector(".code");
var st = document.querySelector("#steve");
var sun = document.querySelector("#sunder");

aln.style.display = "initial";
t1[1].classList.add("active");

t1.forEach((x, index) => {
    x.addEventListener("click", function () {
        coddetails.style.display = "none";
        aln.style.display = "none";
        st.style.display = "none";
        sun.style.display = "none";

        t1.forEach(tab => tab.classList.remove("active"));

        if (index === 0) {
            coddetails.style.display = "block";
            
        }
         else if (index === 1) 
            {
            aln.style.display = "block";
        } 
        else if (index === 2) {
            st.style.display = "block";
        }

        else if (index === 3) {
            sun.style.display = "block";
        }
        x.classList.add("active");
    });
});
