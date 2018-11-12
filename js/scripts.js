$( document ).ready(function() {
    jQuery('button').on('click',function () {
        var username = $("#log").val().trim();
        var password = $("#pass").val().trim();

        if( username == "admin" && password == "admin" ){
            alert('Поздравляем у вас получилось!\n'+ 'Логин: ' + username +'\n' +'Пароль: ' +password);
        } else {
            alert('Логин или пароль указаны не верно!\nПопробуйте admin admin');
        }
    });
});

