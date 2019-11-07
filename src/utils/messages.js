import swal from 'sweetalert2';

const aMessagem = (type, title, text, footer) => {
    var x = swal({
        type: type,
        title: title,
        text: text,
        footer: footer
    })
    return x
}

const aCustonHTML = (type, title, html, footer) => {
    var x = swal({
        type: type,
        title: title,
        html: html,
        footer: footer,
        width: "40rem"
    })
    return x
}


const aConfirmacao = (text) => {
    const swalWithBootstrapButtons = swal.mixin({
        confirmButtonClass: 'btn btn-success',
        cancelButtonClass: 'btn btn-danger margin-confir-button',
        buttonsStyling: false,
    })
    var x = swalWithBootstrapButtons({
        title: 'Atenção !',
        text: text,
        type: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Sim, confirmar',
        cancelButtonText: 'Não, cancelar',
        reverseButtons: true
    })
    return x;
}

const aWaitMessage = async (title, text) => {

    var msg = await swal.queue([{
        title: title,
        text: text,
        showLoaderOnConfirm: true,
        onOpen: () => {
            swal.showLoading()
        }
    }])


    return msg;
}

const aWaitMessagePreConfirm = async (title, text, preConfirm) => {

    var x = await swal.queue([{
        title: title,
        text: text,
        showLoaderOnConfirm: true,
        preConfirm: preConfirm,
        onOpen: () => {
            swal.showLoading()
        }
    }])


    return x;
}


const aToastMenssageSuccess = (title) => {
    aToastMenssage('success', title);
}

const aToastMenssageError = (title) => {
    aToastMenssage('error', title);
}

const aToastMenssage = (type, title) => {
    const toast = swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 3000
    })

    toast({
        type: type,
        title: title
    })
}

const onCloseMenssege = (_swal, ...swalp) => {
    _swal = swal({
        type: swalp[0],
        title: swalp[1],
        text: swalp[2],
        footer: swalp[3],
        onOpen: () => {
            swal.hideLoading();
        }
    })

}

export {
    aMessagem,
    aConfirmacao,
    aWaitMessage,
    aWaitMessage2,
    aToastMenssage,
    aToastMenssageSuccess,
    aToastMenssageError,
    onCloseMenssege,
    aCustonHTML,
    aWaitMessagePreConfirm
}
