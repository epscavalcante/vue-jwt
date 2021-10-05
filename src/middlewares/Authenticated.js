import Cookie from 'js-cookie';

export default {
    authenticated(to, from, next) {
        console.log(to, from, next);

        if (!Cookie.get('token'))
            next({
                name: 'Login'
            })

        next();
    }
}