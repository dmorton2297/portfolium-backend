import moment from "moment";

export const user = {
    id: 1,
    name: 'Dan Morton',
    title: 'Technology Consultant - Software Engineering',
    company: 'West Monroe partners',
    profileImage: 'https://avatars0.githubusercontent.com/u/10928036?s=460&v=4',
    authEmail: 'dmorton2297@gmail.com',
    email: 'dmorton@wmp.com',
    linkedin: 'https://www.linkedin.com/in/dan-morton-a10a83101',
    github: 'https://github.com/dmorton2297',
    summary: 'I am a software engineer out of Chicago IL. I am a huge fan of Javascript. You can typically find me writing React. I work professionally as a technology consultant at West Monroe Partners.',
    tags: ['Javascript', 'React', 'Angular', 'Node', 'Hooks'],
    projects: [
        {
            id: 1,
            name: 'Streamline',
            description: 'Task management software with integrated ML to analyze/predict task estimation.',
            images: []
        }
    ]
};

const lorem = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';
export const projects = [
    {
        id: 1,
        name: 'News Wesbite',
        description: lorem,
        github: 'http://google.com',
        image: 'https://firebasestorage.googleapis.com/v0/b/pres-demo.appspot.com/o/project1.png?alt=media&token=45022970-7073-4eac-bd00-f7cf895f42de',
        projectLink: 'http://google.com',
        createdAt: moment().format(),
        updatedAt: moment().format(),
        website: 'website.com',
        demoVideo: 'google.com',
        tags: ['Tag1', 'Tag2', 'Tag3']
    },
    {
        id: 2,
        name: 'Spoof News Wesbite',
        description: lorem,
        github: 'http://google.com',
        image: 'https://firebasestorage.googleapis.com/v0/b/pres-demo.appspot.com/o/project2.png?alt=media&token=c24a0e6b-dbb7-4916-8bdb-3ac8cb6fdc5c',
        projectLink: 'http://google.com',
        createdAt: moment().format(),
        updatedAt: moment().format(),
        website: 'website.com',
        demoVideo: 'google.com',
        tags: ['Tag1', 'Tag2', 'Tag3']
    },
    {
        id: 3,
        name: 'News Wesbite',
        description: lorem,
        github: 'http://google.com',
        image: 'https://firebasestorage.googleapis.com/v0/b/pres-demo.appspot.com/o/project3.png?alt=media&token=9337018a-9ea3-4542-a25e-b8f2749ac9d0',
        projectLink: 'http://google.com',
        createdAt: moment().format(),
        updatedAt: moment().format(),
        website: 'website.com',
        demoVideo: 'google.com',
        tags: ['Tag1', 'Tag2', 'Tag3']
    }
];

export const users = [
    user
];

const longBlogText = `# markdown-it

[![Build Status](https://img.shields.io/travis/markdown-it/markdown-it/master.svg?style=flat)](https://travis-ci.org/markdown-it/markdown-it)
[![NPM version](https://img.shields.io/npm/v/markdown-it.svg?style=flat)](https://www.npmjs.org/package/markdown-it)
[![Coverage Status](https://coveralls.io/repos/markdown-it/markdown-it/badge.svg?branch=master&service=github)](https://coveralls.io/github/markdown-it/markdown-it?branch=master)
[![Gitter](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/markdown-it/markdown-it)

> Markdown parser done right. Fast and easy to extend.

__[Live demo](https://markdown-it.github.io)__

- Follows the __[CommonMark spec](http://spec.commonmark.org/)__ + adds syntax extensions & sugar (URL autolinking, typographer).
- Configurable syntax! You can add new rules and even replace existing ones.
- High speed.
- [Safe](https://github.com/markdown-it/markdown-it/tree/master/docs/security.md) by default.
- Community-written __[plugins](https://www.npmjs.org/browse/keyword/markdown-it-plugin)__ and [other packages](https://www.npmjs.org/browse/keyword/markdown-it) on npm.

__Table of content__

- [markdown-it](#markdown-it)
  - [Install](#install)
  - [Usage examples](#usage-examples)
    - [Simple](#simple)
    - [Init with presets and options](#init-with-presets-and-options)
    - [Plugins load](#plugins-load)
    - [Syntax highlighting](#syntax-highlighting)
    - [Linkify](#linkify)
  - [API](#api)
  - [Syntax extensions](#syntax-extensions)
    - [Manage rules](#manage-rules)
  - [Benchmark](#benchmark)
  - [Support markdown-it](#support-markdown-it)
  - [Authors](#authors)
  - [References / Thanks](#references--thanks)

## Install

**node.js** & **bower**:

\`\`\`bash
npm install markdown-it --save
bower install markdown-it --save
\`\`\`

**browser (CDN):**

- [jsDeliver CDN](http://www.jsdelivr.com/#!markdown-it "jsDelivr CDN")
- [cdnjs.com CDN](https://cdnjs.com/libraries/markdown-it "cdnjs.com")


## Usage examples

See also:

- __[API documentation](https://markdown-it.github.io/markdown-it/)__ - for more
  info and examples.
- [Development info](https://github.com/markdown-it/markdown-it/tree/master/docs) -
  for plugins writers.


### Simple

\`\`\`js
// node.js, "classic" way:
var MarkdownIt = require('markdown-it'),
    md = new MarkdownIt();
var result = md.render('# markdown-it rulezz!');

// node.js, the same, but with sugar:
var md = require('markdown-it')();
var result = md.render('# markdown-it rulezz!');

// browser without AMD, added to "window" on script load
// Note, there is no dash in "markdownit".
var md = window.markdownit();
var result = md.render('# markdown-it rulezz!');
\`\`\`

Single line rendering, without paragraph wrap:

\`\`\`js
var md = require('markdown-it')();
var result = md.renderInline('__markdown-it__ rulezz!');
\`\`\`


### Init with presets and options

(*) presets define combinations of active rules and options. Can be
\`"commonmark"\`, \`"zero"\` or \`"default"\` (if skipped). See
[API docs](https://markdown-it.github.io/markdown-it/#MarkdownIt.new) for more details.

\`\`\`js
// commonmark mode
var md = require('markdown-it')('commonmark');

// default mode
var md = require('markdown-it')();

// enable everything
var md = require('markdown-it')({
  html: true,
  linkify: true,
  typographer: true
});

// full options list (defaults)
var md = require('markdown-it')({
  html:         false,        // Enable HTML tags in source
  xhtmlOut:     false,        // Use '/' to close single tags (<br />).
                              // This is only for full CommonMark compatibility.
  breaks:       false,        // Convert '\n' in paragraphs into <br>
  langPrefix:   'language-',  // CSS language prefix for fenced blocks. Can be
                              // useful for external highlighters.
  linkify:      false,        // Autoconvert URL-like text to links

  // Enable some language-neutral replacement + quotes beautification
  typographer:  false,

  // Double + single quotes replacement pairs, when typographer enabled,
  // and smartquotes on. Could be either a String or an Array.
  //
  // For example, you can use '«»„“' for Russian, '„“‚‘' for German,
  // and ['«\xA0', '\xA0»', '‹\xA0', '\xA0›'] for French (including nbsp).
  quotes: '“”‘’',

  // Highlighter function. Should return escaped HTML,
  // or '' if the source string is not changed and should be escaped externally.
  // If result starts with <pre... internal wrapper is skipped.
  highlight: function (/*str, lang*/) { return ''; }
});
\`\`\`

### Plugins load

\`\`\`js
var md = require('markdown-it')()
            .use(plugin1)
            .use(plugin2, opts, ...)
            .use(plugin3);
\`\`\`


### Syntax highlighting

Apply syntax highlighting to fenced code blocks with the \`highlight\` option:

\`\`\`js
var hljs = require('highlight.js'); // https://highlightjs.org/

// Actual default values
var md = require('markdown-it')({
  highlight: function (str, lang) {
    if (lang && hljs.getLanguage(lang)) {
      try {
        return hljs.highlight(lang, str).value;
      } catch (__) {}
    }

    return ''; // use external default escaping
  }
});
\`\`\`

### Linkify

\`linkify: true\` uses [linkify-it](https://github.com/markdown-it/linkify-it). To
configure linkify-it, access the linkify instance through \`md.linkify\`:

\`\`\`js
md.linkify.tlds('.py', false);  // disables .py as top level domain
\`\`\`


## API

__[API documentation](https://markdown-it.github.io/markdown-it/)__

If you are going to write plugins - take a look at
[Development info](https://github.com/markdown-it/markdown-it/tree/master/docs).


## Syntax extensions

Embedded (enabled by default):

- [Tables](https://help.github.com/articles/organizing-information-with-tables/) (GFM)
- [Strikethrough](https://help.github.com/articles/basic-writing-and-formatting-syntax/#styling-text) (GFM)

Via plugins:

- [subscript](https://github.com/markdown-it/markdown-it-sub)
- [superscript](https://github.com/markdown-it/markdown-it-sup)
- [footnote](https://github.com/markdown-it/markdown-it-footnote)
- [definition list](https://github.com/markdown-it/markdown-it-deflist)
- [abbreviation](https://github.com/markdown-it/markdown-it-abbr)
- [emoji](https://github.com/markdown-it/markdown-it-emoji)
- [custom container](https://github.com/markdown-it/markdown-it-container)
- [insert](https://github.com/markdown-it/markdown-it-ins)
- [mark](https://github.com/markdown-it/markdown-it-mark)
- ... and [others](https://www.npmjs.org/browse/keyword/markdown-it-plugin)

## Authors

- Alex Kocharin [github/rlidwka](https://github.com/rlidwka)
- Vitaly Puzrin [github/puzrin](https://github.com/puzrin)

_markdown-it_ is the result of the decision of the authors who contributed to
99% of the _Remarkable_ code to move to a project with the same authorship but
new leadership (Vitaly and Alex). It's not a fork.

## References / Thanks

Big thanks to [John MacFarlane](https://github.com/jgm) for his work on the
CommonMark spec and reference implementations. His work saved us a lot of time
during this project's development.

**Related Links:**

- https://github.com/jgm/CommonMark - reference CommonMark implementations in C & JS,
  also contains latest spec & online demo.
- http://talk.commonmark.org - CommonMark forum, good place to collaborate
  developers' efforts.

**Ports**

- [motion-markdown-it](https://github.com/digitalmoksha/motion-markdown-it) - Ruby/RubyMotion
- [markdown-it-py](https://github.com/ExecutableBookProject/markdown-it-py)- Python`

export const blogs = [
    {
        id: 1, 
        title: 'This is a blog title',
        userId: 1,
        tags: ['Tag1', 'Tag2', 'Tag3'],
        createdAt: moment().format(),
        updatedAt: moment().format(),
        description: lorem,
        blogPosts: [
            {
                id: 1,
                text: '### Test Concept\n* Checking to see if I can render markdown',
                title: 'Accelerating technology though smart recruitment.',
                image: 'https://firebasestorage.googleapis.com/v0/b/pres-demo.appspot.com/o/circuit.png?alt=media&token=7a78e544-ec8c-4b38-bc45-318a2a482a60',
                description: 'Here are some actionabile items that you can do to accelerate the use of new technology in your business.',
                category: 'Quick Read',
                createdAt: moment().format(),
                updatedAt: moment().format(),
                tags: ['Tag1', 'Tag2', 'Tag3']
            },
            {
                id: 2,
                text: longBlogText,
                title: 'This is a the Readme of the library I am using to render MD to HTML for blog posts.',
                image: 'https://firebasestorage.googleapis.com/v0/b/pres-demo.appspot.com/o/hands-on.png?alt=media&token=faf70ac7-a4da-45d4-9937-568c574154b4',
                description: 'This is the library i am using to generate the MD html for my blog posts. Huge shoutout to the guys maintaing this, I really enjoy the library.',
                category: 'Technical Documentation',
                createdAt: moment().format(),
                updatedAt: moment().format(),
                tags: ['Tag1', 'Tag2', 'Tag3']
            }
        ]

    }
]