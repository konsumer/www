# jetboystudio

This is the site for [jetboystudio](http://jetboystudio.com).

It's deployed on dokku.

# development

* `npm start`: build & start webserver
* `npm run build:css`: build
* `npm run dev`: watch fr changes in sass & rebuild (you still need to refresh)

I am using a dokku:redirect from bare domain to `www`:

```
dokku plugin:install https://github.com/dokku/dokku-redirect.git
dokku redirect:set www jetboystudio.com www.jetboystudio.com
```