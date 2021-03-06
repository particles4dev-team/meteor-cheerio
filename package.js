Package.describe({
    summary: "Cheerio for meteor",
    version: "0.19.0",
    name: "particle4dev:cheerio",
    git: "https://github.com/particle4dev/meteor-cheerio.git"
});

Npm.depends({cheerio: "0.19.0"});

Package.on_use(function (api) {
	api.versionsFrom("1.0");
    api.add_files(['cheerio.js'], ['server']);
    api.export && api.export('cheerio');
});