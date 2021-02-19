module.exports = {
  HTML: function (title, list, body, control) {
    return `
    <!doctype html>
    <html>
    <head>
      <title>WEB1 - ${title}</title>
      <meta charset="utf-8">
    </head>
    <body>
      <h1><a href="/">WEB</a></h1>
      ${list}
      ${control}
      ${body}
    </body>
    </html>
    `;
  },
  list: function (topics) {
    var list = "<ul>";
    var i = 0;
    while (i < topics.length) {
      list =
        list + `<li><a href="/?id=${topics[i].id}">${topics[i].title}</a></li>`;
      i = i + 1;
    }
    list = list + "</ul>";
    return list;
  },
  authorSelect: function (author, author_id) {
    var tag = "";
    for (var i = 0; i < author.length; i++) {
      var selected = "";
      if (author[i].id === author_id) {
        selected = " selected";
      }
      tag += `<option value="${author[i].id}"${selected}>${author[i].name}</option>`;
    }
    tag = `<select name="author">${tag}</select>`;
    return tag;
  },
};
