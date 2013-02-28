//Shows the thanks page
function termsAccepted () {
    var header = $('header');
    var tos = $('.tos');
    var footer = $('footer');
    var thanks = $('.thanks');

    header.addClass('hidden');
    tos.addClass('hidden');
    footer.addClass('hidden');
    thanks.removeClass('hidden');
};

$('#acceptTos').click(function() {
    termsAccepted();
});