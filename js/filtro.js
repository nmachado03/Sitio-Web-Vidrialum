$(function() {
    $('.filter').click(function() {
        $(this).addClass('active').siblings().removeClass('active');
        let valor = $(this).attr('data-nombre');
        if (valor == 'all') {
            $('.all').show('1000');
        } else {
            $('.all').not('.' + valor).hide('1000');
            $('.all').filter('.' + valor).show('1000');
        }
    });
});