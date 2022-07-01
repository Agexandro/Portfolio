let animate = false;
//Function to animate incoming/outcoming content
function changePage(page = "", title = "") {
    displayMenu();

    //Hide actual page
    $(".content").animate({ opacity: 0.0 }, 200, () => {
        //scroll left section to the top
        document.getElementsByClassName("scroll")[0].scrollTo(0, 0);
        //Load new content
        $(".content").load(page, (response, status) => {
            if (status == "error") {
                title = "Error";
                $(".content").html("<div style='border-left:6px solid red; padding:0 0 0 2px'><span>Error al cargar la página. Verifique su conexión a internet</span></div>")
            }
            //Show new content
            $(".content").animate({ opacity: 1.0 }, 200, () => {
                //Set title
                $(".title").text(title);
            });
        });
    });
}

function showPage(page = "", title = "Home") {
    changePage(page, title);
}

function displayMenu() {
    $("#menu").toggleClass("grow");
    $(".white-space").toggleClass("animate");
}