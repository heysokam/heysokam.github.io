subfolder to gh-pages : https://gist.github.com/cobyism/4730490
subtree force push:
  ```bash
  git push origin `git subtree split --prefix public master`:public --force
  # or
  git push origin :public && git subtree push --prefix public origin public
  ```
