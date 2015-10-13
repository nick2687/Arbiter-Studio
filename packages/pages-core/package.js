/* ============================================================
 * Pages Core JS
 * package metadata file for Meteor.js
 * Contribution : Jan @mediatainment
 * ============================================================ */

'use strict';

var packageName = 'revox:pages-core';
var where = 'client'; // where to install: 'client' or 'server'. For both, pass nothing.

Package.describe({
    name: packageName,
    summary: 'Pages Core',
    version: "1.2.0", //packageJson.version,
    git: 'https://github.com/revoxltd/pages'
});

Package.onUse(function(api) {
    api.versionsFrom(['METEOR@0.9.0', 'METEOR@1.0']);
    api.use(['jquery','less', 'momentjs:moment', 'bkruse:pace', 'gromo:jquery.scrollbar','fortawesome:fontawesome'], where);
    api.addFiles([
        'js/pages.min.js'], where);
});

Package.onTest(function(api) {
    api.use(packageName, where);
    api.use(['webapp'], where);
});
