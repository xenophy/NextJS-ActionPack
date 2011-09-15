/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Next JS Action Pack
 * Copyright (c)2012 Xenophy.CO.,LTD All rights Reserved.
 * http://www.xenophy.com
 */

// {{{ NX.ap.PostOnly

NX.ns('NX.ap');

// 暫定対応、ってかバグじゃん。
if(!NX.ap.PostOnly) {

NX.define('NX.ap.PostOnly', {

    // {{{ extend

    extend: 'NX.WebAction',

    // }}}
    // {{{ execute

    execute: function() {

        var me = this,
            req = me.req;

        // {{{ getでのアクセスを拒否

        if(req.method.toLowerCase() !== 'post') {

            // アクセス禁止
            me.forbidden();

            return;

        }

        me.end();

        // }}}

    }

    // }}}

});

}

// }}}

/*
 * Local variables:
 * tab-width: 4
 * c-basic-offset: 4
 * c-hanging-comment-ender-p: nil
 * End:
 */
