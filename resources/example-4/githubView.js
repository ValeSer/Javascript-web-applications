class GithubView {
  constructor(model, client) {
    this.model = model;
    this.client = client;

    const submitButtonEl = document.querySelector('#submit-button');
    const repoInputEl = document.querySelector('#repo-name-input');

    submitButtonEl.addEventListener('click', () => {
      const repoName = repoInputEl.value;

      this.client.getRepoInfo(repoName, repoData => {
        console.log(repoData);
        this.display(repoData);
      });
      
    });
  }

  display(repoData) {
    document.querySelector('#repo-name').innerHTML = repoData.full_name;
    document.querySelector('#repo-description').innerHTML = repoData.description;
  }
}

module.exports = GithubView;