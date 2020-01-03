import tcb from 'tcb-js-sdk'
tcb.init({
    env: 'qinyuapp-gka41'
});

let auth = tcb.auth({
    persistence: 'local' //用户显式退出或更改密码之前的30天一直有效
})

tcb.auth({
    persistence: 'session'
}).weixinAuthProvider({
    appid: 'wx216ff31d8a665978',
    scope: 'snsapi_base'
}).signIn().then(() => {
    console.log("success");
}).catch(err => {
    console.log("fail");
})

