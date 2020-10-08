const showdown = require('../src/showdown');

describe("HTML Rendering Tests: Ensures header syntax renders accurately.", () => {
  test('It should render # as <h1>', () => {
    const testCase = "# hello";
    expect(new showdown.Converter().makeHtml(testCase)).toMatchSnapshot();
  });

  test('It should render ## as <h2>', () => {
    const testCase = "## hello";
    expect(new showdown.Converter().makeHtml(testCase)).toMatchSnapshot();
  });

  test('It should render ### as <h3>', () => {
    const testCase = "### hello";
    expect(new showdown.Converter().makeHtml(testCase)).toMatchSnapshot();
  });

  test('It should render #### as <h4>', () => {
    const testCase = "#### hello";
    expect(new showdown.Converter().makeHtml(testCase)).toMatchSnapshot();
  });

  test('It should render ##### as <h5>', () => {
    const testCase = "##### hello";
    expect(new showdown.Converter().makeHtml(testCase)).toMatchSnapshot();
  });

  test('It should render ###### as <h6>', () => {
    const testCase = "###### hello";
    expect(new showdown.Converter().makeHtml(testCase)).toMatchSnapshot();
  });
});

describe("HTML Rendering Tests: Ensures Emphasis syntax renders accurately ", () => {
  test("It should render *text* as italics", () => {
    const testCase = "*This text will be italic*";
    expect(new showdown.Converter().makeHtml(testCase)).toMatchSnapshot();
  });

  test("It should render _text_ as italics", () => {
    const testCase = "_This text will be italic_";
    expect(new showdown.Converter().makeHtml(testCase)).toMatchSnapshot();
  });

  test("It should render **text** as bold", () => {
    const testCase = "**This text will be bold**";
    expect(new showdown.Converter().makeHtml(testCase)).toMatchSnapshot();
  });

  test("It should render __text__ as bold", () => {
    const testCase = "__This text will be bold__";
    expect(new showdown.Converter().makeHtml(testCase)).toMatchSnapshot();
  });

  test("It should render a combined bold and italics string __text **text**__", () => {
    const testCase = "_You **can** combine them_";
    expect(new showdown.Converter().makeHtml(testCase)).toMatchSnapshot();
  });

});

describe("HTML Rendering Tests: Ensures Lists syntax renders accurately", () => {
  test("It should render unordered lists of a single item", () => {
    const testCase = "* Item 1";
    expect(new showdown.Converter().makeHtml(testCase)).toMatchSnapshot();
  });

  test("It should render unordered lists of multiple items", () => {
    const testCase = "* Item 1\n * Item 2\n * Item 3";
    expect(new showdown.Converter().makeHtml(testCase)).toMatchSnapshot();
  });

  test("It should render unordered lists of multiple items with indented items", () => {
    const testCase = "* Item 1\n * Item 2\n * Item 3 \n\t * Item 4\n\t * Item 5";
    expect(new showdown.Converter().makeHtml(testCase)).toMatchSnapshot();
  });
});

describe("HTML Rendering Tests: Ensures Images and Links are rendered accurately", () => {
  test("It should render images", () => {
    const testCase = "![TestPassed](https://media0.giphy.com/media/111ebonMs90YLu/giphy.gif)";
    expect(new showdown.Converter().makeHtml(testCase)).toMatchSnapshot();
  });

  test("It should render links", () => {
    const testCase = "[md-page](https://github.com/oscarmorrison/md-page)"
    expect(new showdown.Converter().makeHtml(testCase)).toMatchSnapshot();
  });
});

describe("HTML Rendering Tests: Ensures Blockquotes are rendered accurately", () => {
  test("It should render a single blockquote", () => {
    const testCase = ">This should be a blockquote"
    expect(new showdown.Converter().makeHtml(testCase)).toMatchSnapshot();
  });

  test("It should render multiple-line blockquotes", () => {
    const testCase = ">Line 1\nLine 2\nLine 3";
    expect(new showdown.Converter().makeHtml(testCase)).toMatchSnapshot();
  });
});