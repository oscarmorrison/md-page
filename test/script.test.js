const { JSDOM } = require('jsdom');
const baseHtml = '<script src="file://./md-page.js"></script><noscript>'
const options = { resources: 'usable', runScripts: 'dangerously' };

describe("HTML Rendering Tests: Ensures header syntax renders accurately.", () => {
  beforeAll(() => {
    spyOn(console, "error"); // silences the error console.
  });

  test('It should render # as <h1>', async (done) => {
    let dom = new JSDOM(`${baseHtml}# header`, options);
    // We need to delay so we can read the second DOMContentLoaded from the script.
    await dom.window.document.addEventListener('DOMContentLoaded', async () => {
      await setImmediate(() => { }); // This is required for the second DOMContentLoaded.
      expect(dom.window.document.body.innerHTML).toMatchSnapshot();
      done();
    });
  });

  test('It should render ## as <h2>', async (done) => {
    let dom = new JSDOM(`${baseHtml}## header`, options);
    // We need to delay so we can read the second DOMContentLoaded from the script.
    await dom.window.document.addEventListener('DOMContentLoaded', async () => {
      await setImmediate(() => { }); // This is required for the second DOMContentLoaded.
      expect(dom.window.document.body.innerHTML).toMatchSnapshot();
      done();
    });
  });

  test('It should render ### as <h3>', async (done) => {
    let dom = new JSDOM(`${baseHtml}### header`, options);
    // We need to delay so we can read the second DOMContentLoaded from the script.
    await dom.window.document.addEventListener('DOMContentLoaded', async () => {
      await setImmediate(() => { }); // This is required for the second DOMContentLoaded.
      expect(dom.window.document.body.innerHTML).toMatchSnapshot();
      done();
    });
  });

  test('It should render #### as <h4>', async (done) => {
    let dom = new JSDOM(`${baseHtml}#### header`, options);
    // We need to delay so we can read the second DOMContentLoaded from the script.
    await dom.window.document.addEventListener('DOMContentLoaded', async () => {
      await setImmediate(() => { }); // This is required for the second DOMContentLoaded.
      expect(dom.window.document.body.innerHTML).toMatchSnapshot();
      done();
    });
  });

  test('It should render ##### as <h5>', async (done) => {
    let dom = new JSDOM(`${baseHtml}##### header`, options);
    // We need to delay so we can read the second DOMContentLoaded from the script.
    await dom.window.document.addEventListener('DOMContentLoaded', async () => {
      await setImmediate(() => { }); // This is required for the second DOMContentLoaded.
      expect(dom.window.document.body.innerHTML).toMatchSnapshot();
      done();
    });
  });

  test('It should render ###### as <h6>', async (done) => {
    let dom = new JSDOM(`${baseHtml}###### header`, options);
    // We need to delay so we can read the second DOMContentLoaded from the script.
    await dom.window.document.addEventListener('DOMContentLoaded', async () => {
      await setImmediate(() => { }); // This is required for the second DOMContentLoaded.
      expect(dom.window.document.body.innerHTML).toMatchSnapshot();
      done();
    });
  });
});

describe("HTML Rendering Tests: Ensures Emphasis syntax renders accurately ", () => {
  beforeAll(() => {
    spyOn(console, "error"); // silences the error console.
  });

  test("It should render *text* as italics", async (done) => {
    let dom = new JSDOM(`${baseHtml}*This text will be italic*`, options);
    // We need to delay so we can read the second DOMContentLoaded from the script.
    await dom.window.document.addEventListener('DOMContentLoaded', async () => {
      await setImmediate(() => { }); // This is required for the second DOMContentLoaded.
      expect(dom.window.document.body.innerHTML).toMatchSnapshot();
      done();
    });
  });

  test("It should render _text_ as italics", async (done) => {
    let dom = new JSDOM(`${baseHtml}_This text will not be italic_`, options);
    // We need to delay so we can read the second DOMContentLoaded from the script.
    await dom.window.document.addEventListener('DOMContentLoaded', async () => {
      await setImmediate(() => { }); // This is required for the second DOMContentLoaded.
      expect(dom.window.document.body.innerHTML).toMatchSnapshot();
      done();
    });
  });

  test("It should render **text** as bold", async (done) => {
    let dom = new JSDOM(`${baseHtml}**This text will be bold**`, options);
    // We need to delay so we can read the second DOMContentLoaded from the script.
    await dom.window.document.addEventListener('DOMContentLoaded', async () => {
      await setImmediate(() => { }); // This is required for the second DOMContentLoaded.
      expect(dom.window.document.body.innerHTML).toMatchSnapshot();
      done();
    });
  });

  test("It should render __text__ as underlined", async (done) => {
    let dom = new JSDOM(`${baseHtml}__This text will be underlined__`, options);
    // We need to delay so we can read the second DOMContentLoaded from the script.
    await dom.window.document.addEventListener('DOMContentLoaded', async () => {
      await setImmediate(() => { }); // This is required for the second DOMContentLoaded.
      expect(dom.window.document.body.innerHTML).toMatchSnapshot();
      done();
    });
  });

  test("It should render a combined bold and italics string __text **text**__", async (done) => {
    let dom = new JSDOM(`${baseHtml}_You **can** combine them_`, options);
    // We need to delay so we can read the second DOMContentLoaded from the script.
    await dom.window.document.addEventListener('DOMContentLoaded', async () => {
      await setImmediate(() => { }); // This is required for the second DOMContentLoaded.
      expect(dom.window.document.body.innerHTML).toMatchSnapshot();
      done();
    });
  });
});

describe("HTML Rendering Tests: Ensures Lists syntax renders accurately", () => {
  beforeAll(() => {
    spyOn(console, "error"); // silences the error console.
  });

  test("It should render unordered lists of a single item", async (done) => {
    let dom = new JSDOM(`${baseHtml}* Item 1`, options);
    // We need to delay so we can read the second DOMContentLoaded from the script.
    await dom.window.document.addEventListener('DOMContentLoaded', async () => {
      await setImmediate(() => { }); // This is required for the second DOMContentLoaded.
      expect(dom.window.document.body.innerHTML).toMatchSnapshot();
      done();
    });
  });

  test("It should render unordered lists of multiple items", async (done) => {
    let dom = new JSDOM(`${baseHtml}* Item 1\n * Item 2\n * Item 3`, options);
    // We need to delay so we can read the second DOMContentLoaded from the script.
    await dom.window.document.addEventListener('DOMContentLoaded', async () => {
      await setImmediate(() => { }); // This is required for the second DOMContentLoaded.
      expect(dom.window.document.body.innerHTML).toMatchSnapshot();
      done();
    });
  });

  test("It should render unordered lists of multiple items with indented items", async (done) => {
    let dom = new JSDOM(`${baseHtml}* Item 1\n * Item 2\n * Item 3 \n\t * Item 4\n\t * Item 5`, options);
    // We need to delay so we can read the second DOMContentLoaded from the script.
    await dom.window.document.addEventListener('DOMContentLoaded', async () => {
      await setImmediate(() => { }); // This is required for the second DOMContentLoaded.
      expect(dom.window.document.body.innerHTML).toMatchSnapshot();
      done();
    });
  });
});

describe("HTML Rendering Tests: Ensures Images and Links are rendered accurately", () => {
  beforeAll(() => {
    spyOn(console, "error"); // silences the error console.
  });

  test("It should render images", async (done) => {
    let dom = new JSDOM(`${baseHtml}![TestPassed](https://media0.giphy.com/media/111ebonMs90YLu/giphy.gif)`, options);
    // We need to delay so we can read the second DOMContentLoaded from the script.
    await dom.window.document.addEventListener('DOMContentLoaded', async () => {
      await setImmediate(() => { }); // This is required for the second DOMContentLoaded.
      expect(dom.window.document.body.innerHTML).toMatchSnapshot();
      done();
    });
  });

  test("It should render links", async (done) => {
    let dom = new JSDOM(`${baseHtml}[md-page](https://github.com/oscarmorrison/md-page)`, options);
    // We need to delay so we can read the second DOMContentLoaded from the script.
    await dom.window.document.addEventListener('DOMContentLoaded', async () => {
      await setImmediate(() => { }); // This is required for the second DOMContentLoaded.
      expect(dom.window.document.body.innerHTML).toMatchSnapshot();
      done();
    });
  });
});

describe("HTML Rendering Tests: Ensures Blockquotes are rendered accurately", () => {
  beforeAll(() => {
    spyOn(console, "error"); // silences the error console.
  });

  test("It should render a single blockquote", async (done) => {
    let dom = new JSDOM(`${baseHtml}>This should be a blockquote`, options);
    // We need to delay so we can read the second DOMContentLoaded from the script.
    await dom.window.document.addEventListener('DOMContentLoaded', async () => {
      await setImmediate(() => { }); // This is required for the second DOMContentLoaded.
      expect(dom.window.document.body.innerHTML).toMatchSnapshot();
      done();
    });
  });

  test("It should render multiple-line blockquotes", async (done) => {
    let dom = new JSDOM(`${baseHtml}>Line 1\nLine 2\nLine 3`, options);
    // We need to delay so we can read the second DOMContentLoaded from the script.
    await dom.window.document.addEventListener('DOMContentLoaded', async () => {
      await setImmediate(() => { }); // This is required for the second DOMContentLoaded.
      expect(dom.window.document.body.innerHTML).toMatchSnapshot();
      done();
    });
  });
});