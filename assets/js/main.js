//Function to animate incoming/outcoming content
function changePage(page = "", title = "") {
    //Hide actual page
    $(".content").animate({ opacity: 0.0 }, 200, () => {
        //Load new content
        $(".content").load(page, (response, status) => {
            if (status == "error") {
                $(".content").html("<div style='border-left:6px solid #ffdd00; padding:0 0 0 2px'><span>Error al cargar la página. Verifique su conexión a internet</span></div>")
            } else {
                //Show new content
                $(".content").animate({ opacity: 1.0 }, 200, () => {
                    //Set title
                    $(".title").text(title);
                });
            }
        });
    });
}

function showPage(page = "", title = "Home") {
    changePage(page, title);
}