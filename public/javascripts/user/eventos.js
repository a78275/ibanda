$(() => {
    //pesquisar os eventos por tipo
    $("#tipoEvButton").click( e => {
        var tipo = $("#tipoEvPesq").val()
        $("#tipoEvPesq").val('')
        $.ajax({
            type: "GET",
            url: "http://localhost:3000/user/evento/tipo/" + tipo,
            success: result => {
                console.log(result)
                window.location.href="http://localhost:3000/user/evento/tipo/" + tipo
            },
            error: e => console.log('Erro na pesquisa dos eventos por tipo: ' + e)
        })
    })
    //pesquisar os eventos por designação
    $("#designacaoEvButton").click( e => {
        var d = $("#designacaoEvPesq").val()
        $("#designacaoEvPesq").val('')
        $.ajax({
            type: "GET",
            url: "http://localhost:3000/user/evento/designacao/" + d,
            success: result => {
                console.log(result)
                window.location.href="http://localhost:3000/user/evento/designacao/" + d
            },
            error: e => console.log('Erro na pesquisa dos eventos por designação: ' + e)
        })
    })
    //pesquisar os eventos após uma data
    $("#dataEvButton").click( e => {
        var d = $("#dataEvPesq").val()
        $("#dataEvPesq").val('')
        $.ajax({
            type: "GET",
            url: "http://localhost:3000/user/evento/data/" + d,
            success: result => {
                console.log(result)
                window.location.href="http://localhost:3000/user/evento/data/" + d
            },
            error: e => console.log('Erro na pesquisa dos eventos por data: ' + e)
        })
    })
    //pesquisar os eventos por data
    $("#dataexEvButton").click( e => {
        var d = $("#dataexEvPesq").val()
        $("#dataexEvPesq").val('')
        $.ajax({
            type: "GET",
            url: "http://localhost:3000/user/evento/dataex/" + d,
            success: result => {
                console.log(result)
                window.location.href="http://localhost:3000/user/evento/dataex/" + d
            },
            error: e => console.log('Erro na pesquisa dos eventos por data exata: ' + e)
        })
    })
    //pesquisar os eventos por local
    $("#localEvButton").click( e => {
        var l = $("#localEvPesq").val()
        $("#localEvPesq").val('')
        $.ajax({
            type: "GET",
            url: "http://localhost:3000/user/evento/local/" + l,
            success: result => {
                console.log(result)
                window.location.href="http://localhost:3000/user/evento/local/" + l
            },
            error: e => console.log('Erro na pesquisa dos eventos por local: ' + e)
        })
    })
})