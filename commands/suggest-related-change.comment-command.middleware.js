/**
  @type {import('yyx990805/typescript-bot-commands').CommentCommand}
*/
export default function({content}) {
  let match;
  if (match = content.match(/new pr( originating :?from (?'srcref'.*))? with ```(?'contents'.*)``` appended in file (?'file'.*)/)) {
    // `clone repo ${match.srcref}`
    mergeFilesToFileSystem([{filename: match.file, content: match.contents}]);
    const pr = github.createNewPullRequest()
    // post comment with pr.link
  }
}
