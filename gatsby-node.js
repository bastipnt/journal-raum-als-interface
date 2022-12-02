const path = require(`path`); // eslint-disable-line @typescript-eslint/no-var-requires

const blacklist = ['project1', 'project2'];

const getTags = (rawTags) =>
  rawTags.reduce((tags, currentTags) => {
    const currentTagsArray = currentTags.split(/\s*(?:,|$)\s*/);
    const newTags = [...tags];

    currentTagsArray.forEach((currentTag) => {
      if (
        tags.indexOf(currentTag) === -1 &&
        blacklist.indexOf(currentTag) === -1
      ) {
        newTags.push(currentTag);
      }
    });

    return newTags;
  }, []);

exports.createPages = async ({ actions, graphql }) => {
  const {
    data: { project1, project2 },
  } = await graphql(`
    query {
      project1: allMarkdownRemark(
        sort: { frontmatter: { date: ASC } }
        filter: { frontmatter: { tags: { regex: "/^(?=.*project1).*$/i" } } }
      ) {
        nodes {
          frontmatter {
            tags
          }
        }
      }
      project2: allMarkdownRemark(
        sort: { frontmatter: { date: ASC } }
        filter: { frontmatter: { tags: { regex: "/^(?=.*project2).*$/i" } } }
      ) {
        nodes {
          frontmatter {
            tags
          }
        }
      }
    }
  `);

  const tags1 = getTags(
    project1.nodes.map(({ frontmatter: { tags } }) => tags)
  );
  const tags2 = getTags(
    project2.nodes.map(({ frontmatter: { tags } }) => tags)
  );

  actions.createPage({
    path: 'project1',
    component: path.resolve(`./src/page-templates/index-template.tsx`),
    context: {
      tagsRegex: `/^(?=.*project1).*$/i`,
      page: 'project1',
      tags: tags1,
      tag: '',
    },
  });

  actions.createPage({
    path: '/',
    component: path.resolve(`./src/page-templates/index-template.tsx`),
    context: {
      tagsRegex: `/^(?=.*project2).*$/i`,
      page: 'project2',
      tags: tags2,
      tag: '',
    },
  });

  tags1.forEach((tag) => {
    actions.createPage({
      path: `project1/${tag}`,
      component: path.resolve(`./src/page-templates/index-template.tsx`),
      context: {
        tagsRegex: `/^(?=.*project1)(?=.*${tag}).*$/i`,
        page: 'project1',
        tags: tags1,
        tag,
      },
    });
  });

  tags2.forEach((tag) => {
    actions.createPage({
      path: `${tag}`,
      component: path.resolve(`./src/page-templates/index-template.tsx`),
      context: {
        tagsRegex: `/^(?=.*project2)(?=.*${tag}).*$/i`,
        page: 'project2',
        tags: tags2,
        tag,
      },
    });
  });
};
