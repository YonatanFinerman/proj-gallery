function openCanvas(){
    document.querySelector('.offcanvas-btn').classList.toggle('offcanvas-btn-open');
    document.querySelector('.offcanvas-aside').classList.toggle('offcanvas-aside-open');  
    var elModal = document.querySelector('.modal-body').classList.toggle('offcanvas-aside-open');  
    

    // $('.modal-body').children('h2').text('proj.name') 
    // $('.modal-body').children('img').attr("src","img/portfolio/${proj.id}.png") 


}

