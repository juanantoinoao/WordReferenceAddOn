var option = {

    $response: null,

    showUpdatedMessage: status => {
        var me = option;
        var { $response } = me;

        if (status == 'success')
            $response.textContent = 'Your change has been saved.';
        else {
            $response.textContent = 'There is something wrong, please report to developer.';
        }
        $response.style.opacity = 1;
        setTimeout( () => {
            $response.style.opacity = 0;
        }, 2000);
    },

    init: () => {
        var me = option;
        me.$response = document.querySelector('.response');

        browser.storage.local.get("wordreflangvector").then(item => {
          var wordreflangvector = item.wordreflangvector;
          var dom = document.querySelector('#wordreflangvector');
          dom.querySelector(`[value=${wordreflangvector}]`).selected = true;
        });

        document.querySelector('#wordreflangvector').addEventListener('change', e => {
            var { value } = e.target;

            browser.storage.local.set({
              wordreflangvector: value
            }).then( () => {
                me.showUpdatedMessage('success');
            });
        });
    }
};

window.onload = option.init;
