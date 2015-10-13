
FlowRouter.route('/', {
    action: function(params) {
	    FlowLayout.render("_defaultLayout", {main: "dashboard"});
    }
});

FlowRouter.route('/blank/:areaName', {
    action: function(params) {
	    FlowLayout.render("_defaultLayout", {main: "blankPage", area:params.areaName});
    }
});

FlowRouter.route('/login', {
	action: function (params) {
		FlowLayout.render("_plainLayout", {main: "login"});
	}
});

FlowRouter.route('/register', {
	action: function (params) {
		FlowLayout.render("_plainLayout", {main: "register"});
	}
});

FlowRouter.route('/lock', {
	action: function (params) {
		FlowLayout.render("_plainLayout", {main: "lock"});
	}
});

FlowRouter.route('/calendar', {
	action: function (params) {
		FlowLayout.render("_calendarLayout", {main: "calendarApp"});
	}
});

FlowRouter.route('/builder', {
	action: function (params) {
		FlowLayout.render("_builderLayout", {main: "pageBuilder"});
	}
});

FlowRouter.route('/error/:code', {
	action: function (params) {
		FlowLayout.render("_plainLayout", {main: "errorPage", errorCode:params.code});
	}
});

FlowRouter.route('/ui/:templateName', {
	action: function (params) {
		FlowLayout.render("_defaultLayout", {main: params.templateName});
	}
});

FlowRouter.route('/table/:templateName', {
	action: function (params) {
		FlowLayout.render("_defaultLayout", {main: params.templateName});
	}
});

FlowRouter.route('/maps/:templateName', {
	action: function (params) {

		FlowLayout.render("_fullHeightLayout", {main: params.templateName});
	}
});

FlowRouter.route('/:templateName', {
    action: function(params) {
	    FlowLayout.render("_defaultLayout", {main: params.templateName});
    }
});

FlowRouter.notFound = {
    action: function() {
        FlowLayout.render("_plainLayout", {main: "errorPage"});
    }
};
