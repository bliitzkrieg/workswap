import publications from './publications';
import methods from './methods';
import seeder from './seeder';

const inDevelopment = function () {
    return process.env.NODE_ENV === "development";
};
const inProduction = function () {
    return process.env.NODE_ENV === "production";
};

publications();
methods();

if(inDevelopment()) {
    seeder();
    process.env.MAIL_URL = "smtp://postmaster@sandbox4c376ad3dba944128918837c24b1e8d0.mailgun.org:cf645a7cf19dbb3abf499c4b840162bd@smtp.mailgun.org:587";
    process.env.SITE_URL = 'localhost:3000';
}

if(inProduction()) {
    process.env.MAIL_URL = "smtp://postmaster@sandbox4c376ad3dba944128918837c24b1e8d0.mailgun.org:cf645a7cf19dbb3abf499c4b840162bd@smtp.mailgun.org:587";
    process.env.SITE_URL = 'workswap.meteor.com';
}
