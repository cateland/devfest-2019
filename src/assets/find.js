const blogposts =[
    {id: 'postid1', authorid: 'authorid1', content: '...'}
];
const authors = [
    {id: 'authorid2', name: 'angryjsdevelopper'}
];
const firstBlogPostAuthorName =
    authors.find(author => author.id === blogposts[0]).name;
// => [Error] TypeError: undefined is not an object