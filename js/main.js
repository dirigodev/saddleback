$(document).ready(function(){
    $('.menu-link').click(function(e){
        e.preventDefault();
        // $('.active-link').removeClass('active-link');
        // $(this).addClass('active-link');
        var toSectionId = $(this).attr('href');
        $('html, body').animate({ scrollTop: $(toSectionId).offset().top }, 'slow');
    });
    //console.log({home: $('#home').offset(), season: $('#seasonPasses').offset()});
});





function selectActiveLink(listOfSections, scrollAmount){
    for(var i = 0;  i<listOfSections.length; i++){
        var section = $(listOfSections[i]);
        if(scrollAmount >= section.offset().top - 200 && scrollAmount  <= (section.offset().top + section.height() + 450 )){
            $('.active-link').removeClass('active-link');
            $(listOfSections[i]+"Link").addClass('active-link');
        }

        if(scrollAmount >= 5000){
            $('.active-link').removeClass('active-link');
            $('#contactUsLink').addClass('active-link');
        }
    }
}

$(window).on('scroll', function(event){
    var listOfSections = ['#home', '#seasonPasses', '#latestUpdates','#pressRelease','#contactUs'];
    var scrollAmount = $(document).scrollTop();    
    selectActiveLink(listOfSections, scrollAmount );
});